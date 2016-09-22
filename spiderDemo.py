#-*- coding:utf8 -*-
import urllib
from bs4 import BeautifulSoup
import urllib2
import cookielib
#from bs4 import BeautifulSoup

# response = urllib2.urlopen("http://www.baidu.com/s?wd=%E8%8D%AF%E7%94%A8%E5%B4%A9%E8%A7%A3%E5%89%82")

# page = response.read()
# x = BeautifulSoup(page)
# print x.prettify()



# html = BeautifulSoup(page)

# target = html.find_all('span','merchant-name')
# for i in target:
#     print i.string

id_list = [35301009,32545248]

for i in id_list:
    response = urllib2.urlopen('http://www.biomart.cn/infosupply/' + str(i) + '.htm')
    page = response.read()
    html = BeautifulSoup(page)
    desc = html.find_all(id="_info_desc")
    print desc
    
    with open ('./desc.txt','w') as f:
        f.write(desc)