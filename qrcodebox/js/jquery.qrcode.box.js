(function($,exports){
  $.fn.extend({
    qrcodeBox: function(obj){
    
      var html = '<div class="rqrcode_share rqrcode_off" id="rqrcode_share">'+
                  '<div class="rqrcode_modal" id="rqrcode_modal">'+
                    '<div class="rqrcode_dummy">'+
                    '</div>'+
                    '<div class="rqrcode_content">'+
                      '<div class="rqrcode_modal_header">'+
                        '<a id="rqrcode_close" target="_self">'+
                          '×'+
                        '</a>'+
                        '<h3 class="rqrcode_title" id="rqrcode_title"></h3>'+
                      '</div>'+
                      '<div class="rqrcode_border_bottom_holder_h3">'+
                      '</div>'+
                      '<div class="rqrcode_blank_holder_h1">'+
                      '</div>'+
                      '<div class="rqrcode_modal_body" id="rqrcode_modal_body">'+
                      '</div>'+
                      '<div class="rqrcode_blank_holder_h1">'+
                      '</div>'+
                      '<div class="rqrcode_border_top_holder_h2">'+
                      '</div>'+
                      '<div class="rqrcode_modal_footer">'+
                        '<div class="rqrcode_footer_content" id="rqrcode_footer_content"></div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>';
      $(this).append(html);
      
      var _obj = obj || {},
          $rqrcode_share = $("#rqrcode_share"),
          $rqrcode_modal = $("#rqrcode_modal"),
          $rqrcode_modal_body = $("#rqrcode_modal_body"),
          crown = parseInt($(window).width()/$(window).height()),
          widthRate = "22%",
          mWidth = 0,
          mHeight = 0,
          util = {
            startThread: function(fn){
              setTimeout(fn,1);
            }
          };
      
      //简单判断可视区宽高比(防止box过大)
      if(crown === 0){
        widthRate = "66%";
      }
      $rqrcode_modal.css({
        width: widthRate
      });
      
      //最小宽度220px，防止过小
      if($rqrcode_modal.width()<220){
        $rqrcode_modal.css({
          width: "220px"
        });
      }
      
      //最大宽度330px，防止过大
      if($rqrcode_modal.width()>330){
        $rqrcode_modal.css({
          width: "330px"
        });
      }
      
      //生成二维码(canvas方式,table方式不稳定)
      util.startThread(function(){
        $rqrcode_modal_body.qrcode({
          text: _obj.qrcodeText,
          width: $rqrcode_modal_body.width(),
          height: $rqrcode_modal_body.height()
        });
      });
      
      //添加文字描述
      $("#rqrcode_title").html(_obj.title || "");
      $("#rqrcode_footer_content").html(_obj.des || "");

      //移动到屏幕中间
      //固定宽高(应对移动设备自动横、竖屏)
      mWidth = $rqrcode_modal.width();
      mHeight = $rqrcode_modal.height();
      $rqrcode_modal.css({
        marginLeft: -mWidth/2+(_obj.offsetX || 0)+"px",
        marginTop: -mHeight/2+(_obj.offsetY || 0)+"px",
        width: mWidth+"px",
        height: mHeight+"px"
      });
      
      //显示(利用透明度显示、隐藏)
      $rqrcode_share.addClass("rqrcode_on");
      $rqrcode_share.removeClass("rqrcode_off");
      
      //添加关闭事件
      $("#rqrcode_close").on("click",function(e){
        $rqrcode_share.addClass("rqrcode_off");
        $rqrcode_share.removeClass("rqrcode_on");
      });
    }
  });
})(jQuery,this);


