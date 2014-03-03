#function!/usr/bin/python
# -*- coding: utf-8 -*-
import sqlite3 as lite
import sys
import datetime


class bank_sql():
	def __init__(self):
	    self.database = 'xml.db'
        def connect(self):
            self.con = lite.connect(self.database)
            return self.con 

	def insert_bank(self,bank_id, xml, date=datetime.datetime.now().date()):
                self.connect()
		with self.con:
			cur = self.con.cursor()
			values = "'"+bank_id+"','"+str(date)+"','"+xml+"'"
                        cur.execute("insert into bank (bank_id, date, xml) values ("+values+");")

        def update_bank(self,bank_id, xml, date=datetime.datetime.now().date()):
                self.connect()
		with self.con:
			cur = self.con.cursor()
			values = "'"+bank_id+"','"+str(date)+"','"+xml+"'"
                        cur.execute("update bank set xml='"+xml+"' where date='"+str(date)+"' and bank_id='"+bank_id+"';")


	def get_last_bank(self, bank_id, date=datetime.datetime.now().date()):
                self.connect()
		cur = self.con.cursor()
		cur.execute('select xml, date from bank where bank_id="'+bank_id+'" and date="'+str(date)+'" order by rowid desc limit 1;')
		return cur.fetchall()

