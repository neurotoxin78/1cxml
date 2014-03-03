#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Blueprint, render_template, session, redirect, flash
from forms.formlogin import LoginForm
from common.tools import Users

u = Users()
login = Blueprint('login', __name__)
logout = Blueprint('logout', __name__)

@login.route("/login", methods=['GET','POST'])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        profile = u.get_user(form.openid.data)
        hashed_password = ""
        if profile.has_key('password'):
            hashed_password = profile['password']
        entered_password = u.make_digest(form.password.data)
        if form.openid.data == profile['login'] and hashed_password == entered_password:
            session['username'] = form.openid.data
            return redirect('/')
        else:
            return redirect('/login')
    return render_template('login.html', 
        title = 'Sign In',
        form = form)

@logout.route("/logout")
def logout_page():
    session.clear()
    flash(u'Вы вышли', category='info')
    return redirect('/')

