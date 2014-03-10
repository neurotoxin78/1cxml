#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Blueprint, render_template, session, request, redirect, flash, url_for
from forms.formlogin import LoginForm
from common.tools import Users
from datetime import datetime

u = Users()
login = Blueprint('login', __name__)
logout = Blueprint('logout', __name__)
index = Blueprint('index', __name__)

@index.route("/", methods=['POST','GET'])
def index_page():
    if 'username' not in session:
       return redirect('/login')    
    if 'theme' not in session:
        session['theme']='a'
    
    date = datetime.now().strftime("%A, %d %B %Y")

    welcome = u'''<div class="wide"><center><h2>Добро пожаловать {}</h2><p>
    <h3>Сегодня: {}</h3> <center>
    '''.format(session['username'],date.decode('utf-8'))

    html = welcome
    return render_template('main.html', content=html, title=u"<b>Главная</b>", footer=u"(c) ПАО 'Асфальтобетонный завод'", t=session['theme'])


@login.route("/login", methods=['GET','POST'])
def login_page():
    if 'theme' not in session:
        session['theme']='a'    
    form = LoginForm()
    if form.validate_on_submit():
        profile = u.get_user(form.openid.data)
        hashed_password = ""
        if profile.has_key('password'):
            hashed_password = profile['password']
        entered_password = u.make_digest(form.password.data)
        if form.openid.data == profile['login'] and hashed_password == entered_password:
            session['username'] = form.openid.data
            return redirect('/', code=301)            
        else:
            return redirect('/login', code=302)
    return render_template('login.html', title = u'ABZ uInformed:Вход', form = form, t=session['theme'])

@logout.route("/logout", methods=['GET','POST'])
def logout_page():
    session.clear()
    flash(u'Вы вышли', category='info')
    return redirect('/')
