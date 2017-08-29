define(["jquery"],function($){
	$.get("../mock/regist/regist1.json", function(data) {
		var result = data;
		$(".da-login-index").css("background", result.background)
	})
$(".tabs .regist").click(function(){
	location.href = "regist0.html"
})
  $(".mobile").focus(function(){
  	$(this).css({"border":"1px solid #94d469","outline":"none"});
 	$(this).siblings(".login-sign").css({"border-right":"1px solid #94d469",})
 	$(".ico-user").css("background","url(../img/regist/ico-login.png) no-repeat")
// 	console.log($.cookie("username").slice(1,12))
if ($.cookie("username")&&$.cookie("password")) {
	$(".mobile").val($.cookie("username").slice(1,12))
 	$(".password").val($.cookie("password").slice(1,($.cookie("password").length-1)))
}
 	
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
   	location.href="../index.html"
   })

})