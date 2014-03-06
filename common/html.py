#!/usr/bin/python
# -*- coding: utf-8 -*-
from xparcer import BankParcer as bank_parcer
import datetime

class html(object):

    """Docstring for html. """

    def __init__(self):
        """@todo: to be defined1. """
        self.p = bank_parcer()

    def gen_summary_html(self, data_dict, bank_id, date=datetime.datetime.now().date()):
        """@todo: Docstring for gen_summary_html.

        :data_dict: dict of etree atributes
        :bank_id: bank_id
        :returns: html of summary

        """
        html=""
        __date__ = str(date).split("-")
        _date = __date__[2]+"-"+__date__[1]+"-"+__date__[0]
        if bank_id == "0": # Make cassa
            kassa_name = data_dict['kassa_name']
            kassa_rasxod = data_dict['kassa_rasxod']
            kassa_prixod = data_dict['kassa_prixod']
            kassa_konech_ost = data_dict['kassa_konech_ost']
            kassa_nach_ost = data_dict['kassa_nach_ost']
        
            name = u"<h2><center>"+kassa_name+u"<br>"+_date+"</center></h2>"
            table = u"""
            <div style="margin:0 auto;">
            <center>
            <table border="0"   width="70%" cellpadding="0" cellspacing="2">
	            <tr>
                        <td><h2>Приход: {} </h2></td>
                        <td><h2>Расход: {} </h2></td>
	            </tr>
	            <tr>
                        <td><h2>Начальный остаток: {} </h2></td>
                        <td><h2>Конечный остаток: {} </h2></td>
	            </tr>
            </table>
            </center>
            </div>
            """.format(kassa_prixod,kassa_rasxod,kassa_nach_ost,kassa_konech_ost)
            html = name + table

        else: # Banks
            bank_name = data_dict['bank_name']
            bank_rasxod = data_dict['bank_rasxod']
            bank_prixod = data_dict['bank_prixod']
            bank_konech_ost = data_dict['bank_konech_ost']
            bank_nach_ost = data_dict['bank_nach_ost']
        
            name = "<h2><center>"+bank_name+u"<br>"+_date+"</center></h2>"
            table = u"""
            <div style="margin:0 auto;">
            <center>
            <table border="0"   width="70%" cellpadding="0" cellspacing="2">
	            <tr>
                        <td><h2>Приход: {} </h2></td>
                        <td><h2>Расход: {} </h2></td>
	            </tr>
	            <tr>
                        <td><h2>Начальный остаток: {} </h2></td>
                        <td><h2>Конечный остаток: {} </h2></td>
	            </tr>
            </table>
            </center>
            </div>
            """.format(bank_prixod, bank_rasxod, bank_nach_ost, bank_konech_ost)
            html = name + table

        return html
    
    def gen_monitor_table(self, data):
        """@todo: Docstring for gen_monitor_table.

        :data: @todo
        :returns: @todo

        """
        header = u'''
<table data-role="table" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive" data-column-btn-theme="b" data-column-btn-text="Показать" data-column-popup-theme="a">
     <thead>
       <tr>
         <th>Позиция</th>
         <th>Значение</th>
       </tr>
     </thead>
     <tbody>
        '''
        tcell =''
        for item in data:
            tdata = item
            tcell = tcell + u'''
       <tr>
         <td>{}</td>
         <td>{}</td>
       </tr>
            '''.format(tdata[0], tdata[1])
        table = header+ tcell + "</tbody></table>"
        return table
