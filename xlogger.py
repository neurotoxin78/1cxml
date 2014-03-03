#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
from nanoparcer.xparcer import Parcer
from common.mtsql import bank_sql as bsql
import datetime
import logging
logging.basicConfig(filename='xlogger.log',level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
from common.definition import Config 
from ConfigParser import SafeConfigParser
from time import sleep

c = Config()
cfg = SafeConfigParser()
cfg.read("xlogger.conf")
s=bsql()
p=Parcer()
path = cfg.get('global','path')

class xlogger(object):

    """Docstring for xlogger. """

    def __init__(self):
        """@todo: to be defined1. """
        self.c = Config()
        self.cfg = SafeConfigParser()
        self.cfg.read("xlogger.conf")
        self.s=bsql()
        self.p=Parcer()
        self.path = cfg.get('global','path')

    
    def get_xml(self, type_id, bank_id='0'):
        """@todo: Docstring for function.

        :arg1: @todo
        :returns: @todo

        """
        with open(self.path+self.p.get_filename(type_id, bank_id),'r') as xfile:
             xml = xfile.read()
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
                    s.update_bank(bank_id, new_data)
                else:
                    log = typetxt[type_id] + bank[bank_id] + u" Новая дата, добавляю запись"
                    logging.debug(log)
                    s.insert_bank(bank_id, new_data)
        return log
    def store_banks(self):
        while 1:
            log0 = self.store_to_db('0','0') # Касса
            log1 = self.store_to_db('1','1') # KBKPB
            log2 = self.store_to_db('1','2') # KBKiev
            log3 = self.store_to_db('1','3') # KBPivden
            log4 = self.store_to_db('1','4') # KBVBR
            logging.debug("\r")
            print u"Выполнено:\n" + log0 +"\n"+log1+"\n"+log2+"\n"+log3+"\n"+log4+"\n"
            sleep(60)
        

if __name__ == '__main__':
    x = xlogger()
    x.store_banks()





