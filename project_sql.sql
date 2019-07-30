SET NAMES UTF8;
#丢弃指定的数据库my_project,如果存在的话:
DROP DATABASE IF EXISTS my_project;
#创建新的数据库
CREATE DATABASE my_project CHARSET=UTF8;
#进入数据库
use my_project;


/**用户信息**/
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),	#用户名,如李明
  gender INT			#性别 0-女 1-男
);


/**用户信息**/
INSERT INTO user VALUES
(NULL,'zhangsan',md5('123456'),'zhangsan@qq.com','13812345678','张三','1'),
(NULL,'dangdang',md5('123456'),'dang@qq.com','13501234568','林当','1'),
(NULL,'doudou',md5('123456'),'dou@qq.com','13501234569','窦志强','1'),
(NULL,'yaya',md5('123456'),'ya@qq.com','13501234560','秦小雅','0');


/**图片**/
CREATE TABLE myimg(
  imgid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(80)
);

/**图片**/
INSERT INTO myimg VALUES
(NULL,'http://127.0.0.1:3000/myo_img/3uk-314.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/5g-ultra-lean-site-2019-540.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/190517.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/arrow-line-right (1).png'),
(NULL,'http://127.0.0.1:3000/myo_img/arrow-line-right.png'),
(NULL,'http://127.0.0.1:3000/myo_img/banner-nav-img02.png'),
(NULL,'http://127.0.0.1:3000/myo_img/banner-nav-img03.png'),
(NULL,'http://127.0.0.1:3000/myo_img/bucket_p30_cn.png'),
(NULL,'http://127.0.0.1:3000/myo_img/chazhao.png'),
(NULL,'http://127.0.0.1:3000/myo_img/fankui.png'),
(NULL,'http://127.0.0.1:3000/myo_img/hbanner_p30pro_cn_v3.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/hbanner_p30pro_m_cn_v3.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/hbanner-hwsafer-bg.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/hbanner-hwsafer-mobile-bg.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/hbanner-hwsafer-text-cn.png'),
(NULL,'http://127.0.0.1:3000/myo_img/home_banner_matex_pc_cn.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/home_banner_matex_text_cn.png'),
(NULL,'http://127.0.0.1:3000/myo_img/huawei_logo.png'),
(NULL,'http://127.0.0.1:3000/myo_img/hw_408955.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/icon58.png'),
(NULL,'http://127.0.0.1:3000/myo_img/img_ent_en_logo_ico.png'),
(NULL,'http://127.0.0.1:3000/myo_img/in (1).png'),
(NULL,'http://127.0.0.1:3000/myo_img/in.png'),
(NULL,'http://127.0.0.1:3000/myo_img/jiantouyou.png'),
(NULL,'http://127.0.0.1:3000/myo_img/lazy.png'),
(NULL,'http://127.0.0.1:3000/myo_img/mate20-plz-cn-452.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/matuwang-zhihufangxingdianji.png'),
(NULL,'http://127.0.0.1:3000/myo_img/mulu.png'),
(NULL,'http://127.0.0.1:3000/myo_img/mwc-shanghai-2019-cn.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/ngon2019.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/opacity0.png'),
(NULL,'http://127.0.0.1:3000/myo_img/p30_left_cn.png'),
(NULL,'http://127.0.0.1:3000/myo_img/p30_logo_cn_2.png'),
(NULL,'http://127.0.0.1:3000/myo_img/quanqiu.png'),
(NULL,'http://127.0.0.1:3000/myo_img/rustenburg-smart-city.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/shouji.png'),
(NULL,'http://127.0.0.1:3000/myo_img/toutiao.png'),
(NULL,'http://127.0.0.1:3000/myo_img/wangtao.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/weibo.png'),
(NULL,'http://127.0.0.1:3000/myo_img/weix.png'),
(NULL,'http://127.0.0.1:3000/myo_img/weixin-copy.png'),
(NULL,'http://127.0.0.1:3000/myo_img/yunnan-video-crbt.jpg'),
(NULL,'http://127.0.0.1:3000/myo_img/zhuanfa.png');