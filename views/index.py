#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, session, redirect, request
from datetime import datetime

index = Blueprint('index', __name__)

@index.route("/")
def index_page():
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
    return render_template(template, content=html, debug=platform)

