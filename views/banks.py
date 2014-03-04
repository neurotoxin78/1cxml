#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, session, redirect, request
from datetime import datetime
import time
from time import mktime
from common.xparcer import Parcer
from common.html import html
h = html()
p = Parcer()


banks = Blueprint('banks', __name__)

@banks.route("/bank", methods=['GET','POST'])
def banks_page():
    if 'username' not in session:
       return redirect('/login')     
    if request.method == 'POST':
        date = request.form['date'] 
        try:
            cassa = h.gen_summary_html(p.xml2dict_summary_bank("0", date),"0", date)
        except:
            cassa = u"Нет данных"
        try:
            bank_1 = h.gen_summary_html(p.xml2dict_summary_bank("1", date),"1", date)
        except:
            bank_1 = u"Нет данных"
        try:
            bank_2 = h.gen_summary_html(p.xml2dict_summary_bank("2", date),"2", date)
        except:
            bank_2 = u"Нет данных"
        try:
            bank_3 = h.gen_summary_html(p.xml2dict_summary_bank("3", date),"3", date)
        except:
            bank_3 = u"Нет данных"
        try:
            bank_4 = h.gen_summary_html(p.xml2dict_summary_bank("4", date),"4", date)        
        except:
            bank_4 = u"Нет данных"
        try:
            sum = p.sum_of_all(date)
        except:
            sum = u'Нет данных'
        date=datetime.fromtimestamp(mktime(time.strptime(date,'%Y-%m-%d'))).strftime('%d-%m-%Y')   
    else: 
        cassa = h.gen_summary_html(p.xml2dict_summary_bank("0"),"0")
        bank_1 = h.gen_summary_html(p.xml2dict_summary_bank("1"),"1")
        bank_2 = h.gen_summary_html(p.xml2dict_summary_bank("2"),"2")
        bank_3 = h.gen_summary_html(p.xml2dict_summary_bank("3"),"3")
        bank_4 = h.gen_summary_html(p.xml2dict_summary_bank("4"),"4")
        date = u'Сегодня'
        sum = p.sum_of_all()

    platform = request.user_agent.platform



    summa = u"Общая cумма: " + sum + u" грн"
    return render_template('banks.html', 
                            bank_id_0=cassa, bank_id_1=bank_1, bank_id_2=bank_2, 
                            bank_id_3=bank_3, bank_id_4=bank_4,
                            title=u"Состояние счетов", footer=summa,summary=date)

