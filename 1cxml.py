#!/usr/bin/env python
# -*- coding: utf-8 -*-
from functools import wraps
from flask import Flask, g, session, redirect, flash,  url_for, escape, request, Response, render_template, Markup
import time
from datetime import datetime
from common.xparcer import Parcer
from common.html import html
import locale

from views.test import account_api
from views.login import login

locale.setlocale(locale.LC_ALL, '')

p = Parcer()
h = html()
u = Users()

app = Flask(__name__)
app.config.from_object('config')
app.register_blueprint(account_api)
app.register_blueprint(login)
app.register_blueprint(loginout)

@app.before_request
def before_request():
    g.user = None




@app.route("/")
def hello():
    if 'username' not in session:
       return redirect('/login')    
    date = datetime.now().strftime("%A, %d %B %Y")

    html = u'''<div class="wide"><center><h2>Добро пожаловать {}</h2><p>
    <h3>Сегодня: {}</h3> <center>
    </div>'''.format(session['username'],date.decode('utf-8'))
    
        

    debug=""
    platform = request.user_agent.platform
    if platform == "android":
        template = "mobile.html"
    else:
        template = "main.html"
    sum = platform
    return render_template(template, content=html, debug=platform, summary=sum)


@app.route("/bank", methods=['GET','POST'])
def bank():
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
    else: 
        cassa = h.gen_summary_html(p.xml2dict_summary_bank("0"),"0")
        bank_1 = h.gen_summary_html(p.xml2dict_summary_bank("1"),"1")
        bank_2 = h.gen_summary_html(p.xml2dict_summary_bank("2"),"2")
        bank_3 = h.gen_summary_html(p.xml2dict_summary_bank("3"),"3")
        bank_4 = h.gen_summary_html(p.xml2dict_summary_bank("4"),"4")

    debug=""
    platform = request.user_agent.platform
    if platform == "android":
        template = "mbanks.html"
    else:
        template = "banks.html"

    sum = u"Сумма по всем счетам: "
    return render_template(template, 
                            bank_id_0=cassa, bank_id_1=bank_1, bank_id_2=bank_2, 
                            bank_id_3=bank_3, bank_id_4=bank_4,
                            title="uInformed 2.0 flask", summary=sum)

 


if __name__ == "__main__":
    app.secret_key = "bcjkm4kPpYviyA7qjMTwn3ngo3C9LAHui9AfmgHNKeJXv7vbnc7EzMTCUhK3JiJ7"
    app.run(debug=True, host='0.0.0.0')


