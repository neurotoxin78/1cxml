#!/usr/bin/python
# -*- coding: utf-8 -*-
import datetime

class html(object):

    """Docstring for html. """

    def __init__(self):
        """@todo: to be defined1. """
  #      self.p = bank_parcer()

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
        
            name = u"<center>"+kassa_name+u"<br>"+_date+"</center>"
            table = u"""

            <table data-role="table" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive" data-column-btn-theme="b" data-column-btn-text="Показать" data-column-popup-theme="a" >
     <thead>
       <tr>
         <th></th>
         <th></th>
       </tr>
     </thead>
     <tbody>

<tr>
                        <td>Приход:</td><td> {} </td>
</tr>
<tr> 
                       <td>Расход:</td><td> {} </td>
</tr>
<tr>
                        <td>Нач.остаток:</td><td> {} </td>
</tr>
<tr>
                        <td>Кон.остаток:</td><td> {} </td>
</tr>         
        </tbody>
        </table>

            """.format(kassa_prixod,kassa_rasxod,kassa_nach_ost,kassa_konech_ost)
            html = name + table

        else: # Banks
            bank_name = data_dict['bank_name']
            bank_rasxod = data_dict['bank_rasxod']
            bank_prixod = data_dict['bank_prixod']
            bank_konech_ost = data_dict['bank_konech_ost']
            bank_nach_ost = data_dict['bank_nach_ost']
        
            name = "<center>"+bank_name+u"<br>"+_date+"</center>"
            table = u"""
            <table data-role="table" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive" data-column-btn-theme="b" data-column-btn-text="Показать" data-column-popup-theme="a">
     <thead>
       <tr>
         <th></th>
         <th></th>
       </tr>
     </thead>
     <tbody>

<tr>
                        <td>Приход:</td><td> {} </td>
</tr>
<tr> 
                       <td>Расход:</td><td> {} </td>
</tr>
<tr>
                        <td>Нач.остаток:</td><td> {} </td>
</tr>
<tr>
                        <td>Кон.остаток:</td><td> {} </td>
</tr>	            
            </tbody>
            </table>

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
         <th></th>
         <th></th>
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
