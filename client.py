#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

import SOAPpy
import time

#SOAPpy.Config.debug = 1

server = SOAPpy.SOAPProxy("http://10.10.10.20:7777/")
resp = server.get_xml()
print resp

