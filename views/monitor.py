#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, session, redirect, request
from datetime import datetime, timedelta
import time
from time import mktime
from common.xparcer import MonitorParcer
from common.html import html

h=html()
p = MonitorParcer()

monitor = Blueprint('monitor', __name__)

@monitor.route("/monitor", methods=['GET','POST'])
def monitor_page():
    date = str(datetime.now().date())
    if 'username' not in session:
       return redirect('/login')
    if 'theme' not in session:
        session['theme']='a'   
    if request.method == 'POST':
        if request.form['date']:
            date = request.form['date']
        if 'prev' in request.form:
            if 'date' not in session:
                date = str(datetime.now().date() - timedelta(days = 1))
                session['date'] = date
            else:
                d=datetime.fromtimestamp(mktime(time.strptime(session['date'],'%Y-%m-%d')))
                d = d - timedelta(days = 1)
                date = d.strftime('%Y-%m-%d')
                session['date'] = date
        if 'next' in request.form:
            if 'date' not in session:
                date = str(datetime.now().date() + timedelta(days = 1))
                session['date'] = date
            else:
                d=datetime.fromtimestamp(mktime(time.strptime(session['date'],'%Y-%m-%d')))
                d = d + timedelta(days = 1)
                date = d.strftime('%Y-%m-%d')
                session['date'] = date
    else:
        session['date']=str(datetime.now().date())
        date = str(datetime.now().date())




    part_1_data = []
    part_2_data = []
    part_3_data = []
    part_4_data = []
    part_5_data = []
    part_6_data = []
    part_7_data = []
    part_8_data = []
    part_9_data = []
    part_10_data = []
    rawdata = p.monitor2dict('2',date)
    for part_name, value in rawdata:
        if part_name == u'Раздел1':
            part_1=()
            part_1 = value[0], value[1]
            part_1_data.append(part_1)

    for part_name, value in rawdata:
        if part_name == u'Раздел2':
            part_2=()
            part_2 = value[0], value[1]
            part_2_data.append(part_2)

    for part_name, value in rawdata:
        if part_name == u'Раздел3':
            part_3=()
            part_3 = value[0], value[1]
            part_3_data.append(part_3)

    for part_name, value in rawdata:
        if part_name == u'Раздел4':
            part_4=()
            part_4 = value[0], value[1]
            part_4_data.append(part_4)

    for part_name, value in rawdata:
        if part_name == u'Раздел5':
            part_5=()
            part_5 = value[0], value[1]
            part_5_data.append(part_5)

    for part_name, value in rawdata:
        if part_name == u'Раздел6':
            part_6=()
            part_6 = value[0], value[1]
            part_6_data.append(part_6)

    for part_name, value in rawdata:
        if part_name == u'Раздел7':
            part_7=()
            part_7 = value[0], value[1]
            part_7_data.append(part_7)

    for part_name, value in rawdata:
        if part_name == u'Раздел8':
            part_8=()
            part_8 = value[0], value[1]
            part_8_data.append(part_8)

    for part_name, value in rawdata:
        if part_name == u'Раздел9':
            part_9=()
            part_9 = value[0], value[1]
            part_9_data.append(part_9)

    for part_name, value in rawdata:
        if part_name == u'Раздел10':
            part_10=()
            part_10 = value[0], value[1]
            part_10_data.append(part_10)

    
    p1 = h.gen_monitor_table(part_1_data)
    p2 = h.gen_monitor_table(part_2_data)
    p3 = h.gen_monitor_table(part_3_data)
    p4 = h.gen_monitor_table(part_4_data)
    p5 = h.gen_monitor_table(part_5_data)
    p6 = h.gen_monitor_table(part_6_data)
    p7 = h.gen_monitor_table(part_7_data)
    p8 = h.gen_monitor_table(part_8_data)
    p9 = h.gen_monitor_table(part_9_data)
    p10 = h.gen_monitor_table(part_10_data)

    date=datetime.fromtimestamp(mktime(time.strptime(date,'%Y-%m-%d'))).strftime('%d-%m-%Y')

    return render_template('monitor.html', part_1=p1, part_2=p2, part_3=p3, part_4=p4,
                            part_5=p5, part_6=p6, part_7=p7, part_8=p8, part_9=p9,
                            part_10=p10,t=session['theme'],
                            title=u"Монитор руководителя "+date)

