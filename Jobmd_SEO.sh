百度蜘蛛
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0"  | wc -l

百度移动蜘蛛
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep "Mobile" | wc -l

---------------------------------------------------------------

移动职位页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep "Mobile" | grep "/work/" | wc -l

移动黄页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep "Mobile" | grep "/works/" | wc -l

移动资讯页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep "Mobile" | grep "/article/" | wc -l

移动企业页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep "Mobile" | grep "/company/" | wc -l

以上数据是指『该日志中记录的百度移动爬虫访问相关页面的次数』
---------------------------------------------------------------
桌面职位页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep -vn "Mobile" | grep "/work/" | wc -l

桌面黄页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep -vn "Mobile" | grep "/works/" | wc -l

桌面资讯页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep -vn "Mobile" | grep "/article/" | wc -l

桌面企业页
less -f web_access_2015-06-16-3.log | grep "Baiduspider/2.0" | grep -vn "Mobile" | grep "/company/" | wc -l

以上数据是指『该日志中记录的百度PC爬虫访问相关页面的次数』