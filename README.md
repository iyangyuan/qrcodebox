qrcodebox 面向移动设备的二维码弹出框
=========
  
qrcodebox 简介
-------------
  
qrcode box，一个小小的二维码工具，通过调用它，可以在页面中间弹出一个二维码窗口，主要是面向移动设备的，对于PC端浏览器而言，百度分享和JiaThis已经做的很好了。  
它能够自动适应屏幕，并且不受移动设备横屏、竖屏切换的干扰。  
无论是横屏的pad设备，还是竖屏的phone设备，qrcode box均有良好表现。  
  
qrcodebox 使用说明
-------------
  
引入js、css文件  
  
    <link rel="stylesheet" type="text/css" href="qrcodebox/css/qrcode.box.css">
    <script src="qrcodebox/js/jquery.min.js"></script>
    <script src="qrcodebox/js/jquery.qrcode.js"></script>
    <script src="qrcodebox/js/qrcode.js"></script>
    <script src="qrcodebox/js/jquery.qrcode.box.js"></script>
  
调用qrcodebox  
  
    $("body").qrcodeBox({
      title: "分享到微信朋友圈",
      des: "使用微信 “扫一扫” 即可分享网页到朋友圈",
      qrcodeText: "www.baidu.com",
      offsetX: 0,
      offsetY: 100
    });
  
参数说明  
  
$("body")意思就是插入到html body中，不用管，这么写就行了。  
title是box的标题。  
des是box的描述。  
qrcodeText 是二维码的内容。  
offsetX , offsetY 是说水平方向和竖直方向的偏移量，box默认出现在屏幕正中央，万一你不想呢？可接受正、负数，偏的方向不一样，具体效果自己试。单位：px。  
  