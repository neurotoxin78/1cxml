#!/usr/bin/python
# -*- coding: utf-8 -*-
import SOAPpy
from datetime import datetime
class soap(object):

    """Docstring for soap. """

    def __init__(self):
        """@todo: to be defined1. """
    
    def get_data(self, type_id='0', bank_id='0', date=str(datetime.now().date()) ):
        """@todo: Docstring for get_data.

        :type_id: @todo
        :bank_id: @todo
        :monitor_id: @todo
        :returns: @todo

        """
        server = SOAPpy.SOAPProxy("http://10.10.10.20:7777/")
        return server.get_xml(type_id, bank_id, date)
