#!/usr/bin/python
# -*- coding: utf-8 -*-
from datetime import datetime
from definition import Config 
from mtsql import bank_sql
from mtsql import monitor_sql
from xml.etree.ElementTree import fromstring, ElementTree
import unicodedata
from locale import atof, format, currency

class BankParcer(object):

    """Get xml file """

    def __init__(self):
        """@todo: to be defined1. """
        self.c = Config()
        self.s = bank_sql()
        self.m = monitor_sql()
        
    def get_filename(self, type_id, bank_id='0', date=datetime.now().date()):
        """@todo: Docstring for get_filename.

        :type_id: @todo
        :date: @todo
        :returns: @todo


        """
        filepart = self.c.type_id()
        if filepart == '0':
            filename = filepart[type_id]+"_"+str(date)+".xml"
        else:
            bank = self.c.bank_id()
            filename = filepart[type_id]+bank[bank_id]+"_"+str(date)+".xml"
        return filename

    def xml2dict_summary_bank(self, bank_id, date=datetime.now().date()):
        bankid = self.c.bank_id()
        xml = self.s.get_last_bank(bank_id, date)
        tree = ElementTree(fromstring(xml[0][0].encode('utf-8')))
        root = ElementTree.getroot(tree)
#        print xml[0][0].encode('utf-8')
        children = root.getchildren()
        for item in children:
            summary = item.attrib

        return summary
    
    def sum_of_all(self, date=datetime.now().date()):
        bankid = self.c.bank_id()
        kost_list = []
        for keys in bankid:
            if keys != '__name__':
                xml = self.s.get_last_bank(keys, date)
                tree = ElementTree(fromstring(xml[0][0].encode('utf-8')))
                root = ElementTree.getroot(tree)                
                children = root.getchildren()
                for item in children:
                    #print item.attrib
                    if item.attrib.has_key('kassa_konech_ost'):
                        kost_list.append(item.attrib['kassa_konech_ost'].encode('ascii','ignore'))
                    if item.attrib.has_key('bank_konech_ost'):
                        kost_list.append( item.attrib['bank_konech_ost'].encode('ascii','ignore'))
        sum = 0
        for item in kost_list:
            sum = sum + float(atof(item))
        return currency(sum, symbol=False, grouping=True)

class MonitorParcer(object):

    """Docstring for MonitorParcer. """

    def __init__(self):
        """@todo: to be defined1. """
        self.c = Config() 
        self.s = monitor_sql()    
    def get_filename(self,  monitor_id, date=str(datetime.now().date())):
        """@todo: Docstring for get_filename.

        :monitor_id: @todo
        :returns: @todo

        """
        filepart = self.c.monitor_id()
        filename = filepart[monitor_id]+'_'+date+'.xml'
        return filename

    def monitor2dict(self, monitor_id='2', date=str(datetime.now().date())):
        """@todo: Docstring for monitor2dict.

        :arg1: @todo
        :returns: @todo

        """
        data_list=[]
        xml = self.s.get_monitor(date)
        tree = ElementTree(fromstring(xml[0][0].encode('utf-8')))
        root = ElementTree.getroot(tree)
        child_dict={}
        for item in root:
            part_name = item.attrib['NSName']
            child = item.getchildren()
            child_dict[part_name]=child
        list_of_attribs=[]
        tuples=()
        for keys in child_dict:
            data = child_dict[keys]
            for items in data:
                attrib_tuple=()
                data = items.attrib
                attrib_tuple = data['str_name'], data['str_value']
                tuples = keys, attrib_tuple
                list_of_attribs.append(tuples)
        return list_of_attribs


