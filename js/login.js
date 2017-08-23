$.get("../data/regist/regist1.json", function(data) {
		var result = data;
		$(".da-login-index").css("background", result.background)
	})
$(".tabs .regist").click(function(){
	location.href = "regist.html"
})
  $(".mobile").focus(function(){
  	$(this).css({"border":"1px solid #94d469","outline":"none"});
 	$(this).siblings(".login-sign").css({"border-right":"1px solid #94d469",})
 	$(".ico-user").css("background","url(../img/regist/ico-login.png) no-repeat")
 	console.log($.cookie("userName"))
 	$(".mobile").val($.cookie("userName"))
 	$(".password").val($.cookie("passWord"))
  })
   $(".mobile").blur(function(){
  	$(this).css({"border":"1px solid #ccc","outline":"none"});
 	$(this).siblings(".login-sign").css({"border-right":"1px solid #ccc",});
 	$(".ico-user").css("background","url(../img/regist/ico-login.png) -29px 0 no-repeat");})
  $(".password").blur(function(){
	$(this).css({"border":"1px solid #ccc","outline":"none"});
 	$(this).siblings(".login-sign").css({"border-right":"1px solid #ccc",})
	$(".ctrl .ico-password").css("background", "url(../img/regist/ico-login.png) -29px -27px no-repeat")
	$(".ctrl1 .ico-password").css("background","url(../img/regist/ico-login.png) -29px -27px no-repeat")
	})
   $(".password").focus(function(){
  	$(this).css({"border":"1px solid #94d469","outline":"none"});
 	$(this).siblings(".login-sign").css({"border-right":"1px solid #94d469",})
	$(".ctrl .ico-password").css("background", "url(../img/regist/ico-login.png) 0px -27px no-repeat")
	$(".ctrl1 .ico-password").css("background","url(../img/regist/ico-login.png) 0px -27px no-repeat")
  })
   $(".submit-btn").click(function(){
   	location.href="index.html"
   })
