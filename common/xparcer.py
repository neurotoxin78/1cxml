#!/usr/bin/python
# -*- coding: utf-8 -*-
import datetime
from definition import Config 
from mtsql import bank_sql
from xml.etree.ElementTree import fromstring, ElementTree



class Parcer(object):

    """Get xml file """

    def __init__(self):
        """@todo: to be defined1. """
        self.c = Config()
        self.s = bank_sql()
        
    def get_filename(self, type_id, bank_id='0', date=datetime.datetime.now().date()):
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

    def xml2dict_summary_bank(self, bank_id, date=datetime.datetime.now().date()):
        bankid = self.c.bank_id()
        xml = self.s.get_last_bank(bank_id, date)
        tree = ElementTree(fromstring(xml[0][0].encode('utf-8')))
        root = ElementTree.getroot(tree)
#        print xml[0][0].encode('utf-8')
        children = root.getchildren()
        for item in children:
            summary = item.attrib

        return summary


