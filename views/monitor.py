#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, session, redirect, request
from datetime import datetime

monitor = Blueprint('monitor', __name__)

@monitor.route("/monitor", methods=['GET','POST'])
def monitor_page():
    date = str(datetime.now().date())
    if 'username' not in session:
       return redirect('/login')     
    if request.method == 'POST':
        pass
    else: 
        pass
    return render_template('monitor.html', 
                            title=u"Монитор руководителя")

