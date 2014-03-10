#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
from common.xparcer import BankParcer, MonitorParcer
from common.mtsql import bank_sql as bsql
from common.mtsql import monitor_sql as msql
import datetime
import logging
from common.definition import Config 
from ConfigParser import SafeConfigParser
from time import sleep
import os

path os.path.dirname(os.path.realpath(__file__))


logging.basicConfig(filename=path+'/xlogger.log',level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')


c = Config()
cfg = SafeConfigParser()
cfg.read("xlogger.conf")
path = cfg.get('global','path')

class xlogger(object):

    """Docstring for xlogger. """

    def __init__(self):
        """@todo: to be defined1. """
        self.c = Config()
        self.cfg = SafeConfigParser()
        self.cfg.read("xlogger.conf")
        self.s=bsql()
        self.ms=msql()
        self.m=MonitorParcer()
        self.p=BankParcer()
        self.path = cfg.get('global','path')

    
    def get_xml(self, type_id, bank_id='0'):
        """@todo: Docstring for function.

        :arg1: @todo
        :returns: @todo

        """
        try:
            with open(self.path+self.p.get_filename(type_id, bank_id),'r') as xfile:
                 xml = xfile.read()
        except:
            logging.debug(u"Не могу прочесть файл")
            xml = ""
        return xml

    def store_to_db(self, type_id,  bank_id='0'):
        """
        Пишет в базу

        """
        bank = self.c.bank_id()
        typetxt = self.c.type_id()
        log=""
        if type_id == '0' or type_id == '1':
            ## Bank or Cassa
            try:
                last_xml = self.s.get_last_bank(bank_id)[0][0]
                last_date = self.s.get_last_bank(bank_id)[0][1]
            except:
                last_xml = ""
                last_date =""
            new_data = self.get_xml(type_id, bank_id)
            if new_data != '':                
                if last_xml == new_data.decode('utf-8'):
                    log = typetxt[type_id] + bank[bank_id] + u" Не изменилось не пишу в базу"
                    logging.debug(log)
                    #s.update_bank(bank_id, new_data)
                else:
                    log = typetxt[type_id] + bank[bank_id] + u" Данные изменились, проверяю наличие даты в базе"
                    logging.debug(log)
                    if last_date == str(datetime.datetime.now().date()):
                        log = typetxt[type_id] + bank[bank_id] + u" Данные с этой датой "+last_date+u" существуют, обновляю запись"
                        logging.debug(log)
                        self.s.update_bank(bank_id, new_data)
                    else:
                        cur_date = str(datetime.datetime.now().date())
                        log = typetxt[type_id] + bank[bank_id] + u" Новая дата, добавляю запись"
                        logging.debug(log)
                        self.s.insert_bank(bank_id, new_data, cur_date)

        if type_id == '2':
            # Monitor
            try:
                last_monitor = self.ms.get_monitor()[0][0]
                last_date = self.ms.get_monitor()[0][1]
            except:
                last_monitor = ''
                last_date = ''
            new_data = self.get_xml('2')
            if new_data != '':
                if last_monitor == new_data.decode('utf-8'):
                    log = u"Данные монитора не изменились"
                else:
                    if last_date == str(datetime.datetime.now().date()):
                        log = u"Данные монитора изменились, обновляю"
                        self.ms.update_monitor(new_data, last_date)
                    else:
                        cur_date = str(datetime.datetime.now().date())
                        self.ms.insert_monitor(new_data, cur_date)
                        log = u"Данные монитора отсутствуют, добавляю запись"
                logging.debug(log)

        return log

    def store_data(self):
        log0 = self.store_to_db('0','0') # Касса
        log1 = self.store_to_db('1','1') # KBKPB
        log2 = self.store_to_db('1','2') # KBKiev
        log3 = self.store_to_db('1','3') # KBPivden
        log4 = self.store_to_db('1','4') # KBVBR
        self.store_to_db('2','0') # Monitor
        logging.debug("\r")
      #  print u"Выполнено:\n" + log0 +"\n"+log1+"\n"+log2+"\n"+log3+"\n"+log4+"\n"
        

if __name__ == '__main__':
    x = xlogger()
    x.store_data()
    


