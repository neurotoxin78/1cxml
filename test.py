#!/usr/bin/python
# -*- coding: utf-8 -*-
from common.xparcer import MonitorParcer

if __name__ == '__main__':
    m = MonitorParcer()
    monitor = m.monitor2dict()
    for p,v in monitor:

        if p == u'Раздел10':
            print p
            print v[0],v[1]
