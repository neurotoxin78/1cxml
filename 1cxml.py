#!/usr/bin/env python
# -*- coding: utf-8 -*-
from functools import wraps
from flask import Flask, g, session, redirect, url_for, escape, request, Response
from flask import render_template
from flask import Markup
import time
from datetime import datetime
from nanoparcer.xparcer import Parcer
from nanoparcer.html import html
import locale
locale.setlocale(locale.LC_ALL, '')



p = Parcer()
h = html()

app = Flask(__name__)


def check_auth(username, password):
    """This function is called to check if a username /
    password combination is valid.
    """
    return username == 'neuro' and password == 'cyber78d'


def authenticate():
    """Sends a 401 response that enables basic auth"""
    return Response(
        'Could not verify your access level for that URL.\n'
        'You have to login with proper credentials', 401,
        {'WWW-Authenticate': 'Basic realm="Login Required"'})


def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            return authenticate()
        return f(*args, **kwargs)
    return decorated


@app.route("/")
def hello():
    if 'username' in session:
        return 'Logged in as %s' % escape(session['username'])
    date = datetime.now().strftime("%A, %d %B %Y")

    html = u'''<div class="wide"><center><h2>Добро пожаловать</h2><p>
    <h3>Сегодня: {}</h3> <center>
    </div>'''.format(date.decode('utf-8'))


    return render_template('main.html', content=html)


@app.route("/bank", methods=['GET','POST'])
@requires_auth
def bank():
    if 'username' in session:
        return 'Logged in as %s' % escape(session['username'])
    
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

    return render_template('banks.html', 
                            bank_id_0=cassa, bank_id_1=bank_1, bank_id_2=bank_2, 
                            bank_id_3=bank_3, bank_id_4=bank_4,
                            title="uInformed 2.0 flask", summary="test")


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

