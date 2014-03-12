#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, session, redirect, request

from views.login import login
from views.login import logout
from views.login import index
from views.banks import banks
from views.monitor import monitor

import locale
locale.setlocale(locale.LC_ALL, '')


app = Flask(__name__)
app.config.from_object('config')
app.register_blueprint(login)
app.register_blueprint(logout)
app.register_blueprint(index)
app.register_blueprint(banks)
app.register_blueprint(monitor)

@app.route("/index/sw")
def sw():
    if 'username' not in session:
       return redirect('/login') 

    if 'theme' not in session:
        session['theme']='b'
    else:
        if session['theme'] == 'a':
            session['theme'] = 'b'
        else:
            session['theme'] = 'a'
    return redirect('/')
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

