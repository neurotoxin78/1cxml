#!/usr/bin/python
# -*- coding: utf-8 -*-
from ConfigParser import SafeConfigParser

class Config(object):

    """Docstring for Config. """

    def __init__(self):
        """@todo: to be defined1. """
        self.cfg = SafeConfigParser()
        self.cfg.read("/opt/ui2/1cxml/uinformed.conf")

    def type_id(self):
        """@todo: Docstring for definition.

        :arg1: @todo
        :returns: @todo

        """
        type_id = dict(self.cfg._sections['type_id'])
        return type_id

    def bank_id(self):
        """@todo: Docstring for bank_id.
        :returns: @todo

        """
        bank_id = dict(self.cfg._sections['bank_id'])
        return bank_id

    def monitor_id(self):
        """@todo: Docstring for monitor_id.
        :returns: @todo

        """
        monitor_id = dict(self.cfg._sections['monitor_id'])
        return monitor_id





