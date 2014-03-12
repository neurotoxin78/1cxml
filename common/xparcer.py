#!/usr/bin/python
# -*- coding: utf-8 -*-
from datetime import datetime
from definition import Config 
from soap import soap
from xml.etree.ElementTree import fromstring, ElementTree
import unicodedata
from locale import atof, format, currency
import locale
#ru_UA.UTF-8
locale.setlocale( locale.LC_ALL, 'ru_UA.UTF-8' )

class BankParcer(object):

    """Get xml file """

    def __init__(self):
        """@todo: to be defined1. """
        self.c = Config()
        self.soap = soap()

    def xml2dict_summary_bank(self, bank_id, date=datetime.now().date()):
        if bank_id == '0':
            xml = self.soap.get_data('0',bank_id, date)
        else:
            xml = self.soap.get_data('1',bank_id, date)            
        tree = ElementTree(fromstring(xml.encode('utf-8')))
        root = ElementTree.getroot(tree)
        children = root.getchildren()
        for item in children:
            summary = item.attrib
        return summary
    
    def sum_of_all(self, date=datetime.now().date()):
        bankid = self.c.bank_id()
        kost_list = []
        for keys in bankid:
            if keys != '__name__' and keys != '1':
                if keys == '0':
                    xml = self.soap.get_data('0',keys, date)
                else:
                    xml = self.soap.get_data('1',keys, date)
                tree = ElementTree(fromstring(xml.encode('utf-8')))
                root = ElementTree.getroot(tree)                
                children = root.getchildren()
                for item in children:
                    if item.attrib.has_key('kassa_konech_ost'):
                        kost_list.append(item.attrib['kassa_konech_ost'].encode('ascii','ignore'))
                    if item.attrib.has_key('bank_konech_ost'):
                        kost_list.append( item.attrib['bank_konech_ost'].encode('ascii','ignore'))
        sum = 0
	locale.setlocale( locale.LC_ALL, 'ru_UA.UTF-8' )
        for item in kost_list:
            sum = sum + float(atof(item))
        return currency(sum, symbol=False, grouping=True)

class MonitorParcer(object):

    """Docstring for MonitorParcer. """

    def __init__(self):
        """@todo: to be defined1. """
        self.soap = soap()
          
    def monitor2dict(self, monitor_id, date=str(datetime.now().date())):
        """@todo: Docstring for monitor2dict.

        :arg1: @todo
        :returns: @todo

        """
        data_list=[]
        xml = self.soap.get_data('2', '0', date)
        tree = ElementTree(fromstring(xml.encode('utf-8')))
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


