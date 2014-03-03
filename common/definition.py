#!/usr/bin/python
# -*- coding: utf-8 -*-
from ConfigParser import SafeConfigParser

class Config(object):

    """Docstring for Config. """

    def __init__(self):
        """@todo: to be defined1. """
        self.cfg = SafeConfigParser()
        self.cfg.read("xlogger.conf")

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




