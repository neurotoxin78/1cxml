#!/usr/bin/env python
# -*- coding: utf-8 -*-
import hashlib
import sqlite3 as lite

class Users(object):

    """Docstring for hash. """

    def __init__(self):
        """@todo: to be defined1. """
        self.database = '/opt/ui2/1cxml/users.db'

    def connect(self):
        self.con = lite.connect(self.database)
        return self.con 

    def make_digest(self,psw):
        return hashlib.sha224(psw).hexdigest()        
    
    def get_user(self, login):
        self.connect()
	cur = self.con.cursor()
	cur.execute('select * from users where login="'+login+'" ;')
        try:
	    data = cur.fetchall()[0]
            profile = {}
            profile['id'] = data[0]
            profile['login'] = data[1]
            profile['password'] = data[2]
            profile['role'] = data[3]
            profile['profile'] = data[4]
        except:
            profile = {}
            profile['login'] = None
        return profile

if __name__ == "__main__":
    pass
#    u = Users()
#    print u.get_user('neuro')
