#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask

from views.test import account_api
from views.login import login
from views.login import logout
from views.index import index
from views.banks import banks

import locale
locale.setlocale(locale.LC_ALL, '')


app = Flask(__name__)
app.config.from_object('config')
app.register_blueprint(account_api)
app.register_blueprint(login)
app.register_blueprint(logout)
app.register_blueprint(index)
app.register_blueprint(banks)



if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')


