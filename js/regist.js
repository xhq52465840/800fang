define(["jquery"], function($) {
	$.get("../mock/regist/regist1.json", function(data) {
		var result = data;
		$(".da-login-index").css("background", result.background)
	})
	$(".tabs .login").click(function() {
			location.href = "login0.html"
		})
		// function createCode(){
		//      var code = '';
		//      var codeLength = 4;
		//      var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
		//      //循环codeLength 我设置的4就是循环4次
		//      for(var i = 0; i < codeLength; i++){
		//          //设置随机数范围,这设置为0 ~ 36
		//           var index = Math.floor(Math.random()*36);
		//           //字符串拼接 将每次随机的字符 进行拼接
		//           code += random[index]; 
		//      }
		//      //将拼接好的字符串赋值给展示的Value
		//      return code
		//  }
	function loadCode() {
		$.ajax({
			url: "http://route.showapi.com/932-2",
			type: "get",
			data: {
				showapi_appid: "29550",
				showapi_sign: "08402fce064a484baad949d9a18f75e7",
				length: 4
			},
			dataType: "json",
			success: function(data) {
				//					console.log(data)
				data = data.showapi_res_body;
				$("#gen_code").attr({
						src: data.image
					})
					// 在图像节点上添加自定义的 sid 属性，保存返回数据中的sid值，以供后期验证使用
				$("#gen_code").sid = data.sid;
			}
		});
	}
	loadCode();
	$("#gen_code").click(function() {
		loadCode();
	})
	$(".verify").focus(function() {
		$(this).css({
			"border": "1px solid #94d469",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #94d469",
		})
		$(".ctrl .ico-password").css("background", "url(../img/regist/ico-login.png) 0 -27px no-repeat")
		$(".ctrl1 .ico-password").css("background", "url(../img/regist/ico-login.png) -29px -27px no-repeat")
	})
	$(".verify").blur(function() {
		$(this).css({
			"border": "1px solid #ccc",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #ccc",
		})
		$(".ctrl .ico-password").css("background", "url(../img/regist/ico-login.png) -29px -27px no-repeat")
		$(".ctrl1 .ico-password").css("background", "url(../img/regist/ico-login.png) -29px -27px no-repeat")

		var _code = $(this).val();

		$.ajax({
			type: "get",
			url: "http://route.showapi.com/932-1",
			data: {
				showapi_appid: "29550",
				showapi_sign: "08402fce064a484baad949d9a18f75e7",
				checkcode: _code,
				sid: $("#gen_code").sid
			},
			dataType: "json",
			success: function(data) {
				//				console.log(_code);
				//				console.log(data.showapi_res_body.valid);
				if (data.showapi_res_body.valid) {
					$(".da-login-panel .register-form .ctrl p").html("")
					return true;
				} else {
					//					$(".da-login-panel .register-form .ctrl p").html("*验证码输入错误")
					//					alert("aaa")

					return false;
					//					alert("aaa")

				}
			}
		});
		if (_code == "") {
			$(".da-login-panel .register-form .ctrl p").html("*请输入验证码")
			return false;
		}
	})

	$(".mobile").focus(function() {
		$(this).css({
			"border": "1px solid #94d469",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #94d469",
		})
		$(".ico-user").css("background", "url(../img/regist/ico-login.png) no-repeat")
	})
	var regs = {
		userNameReg: /^(([\u4e00-\u9fa5])|[a-zA-Z0-9-_]){4,20}$/,
		pwdReg: /.{6,20}/,
		numReg: /\d/,
		strReg: /[a-zA-Z]/,
		tsReg: /[^u4e00-\u9fa5a-zA-Z0-9]/,
		emailReg: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
		mobileReg: /^0?(13[0-9]|15[012356789]|18[0-9]|17[0-9])[0-9]{8}$/,
	}
	$(".mobile").blur(function() {
		$(this).css({
			"border": "1px solid #ccc",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #ccc",
		});
		$(".ico-user").css("background", "url(../img/regist/ico-login.png) -29px 0 no-repeat");
		var value = $(".mobile").val();
		if (value == "") {
			$("form .ctrl label.error").html("电话号码不能为空");
			$("form .ctrl label.error").css("display", "block");
			return false;
		} else if (regs.mobileReg.test(value)) {
			$("form .ctrl label.error").html("");
			$("form .ctrl label.error").css("display", "none");
			return true;
		} else {
			$("form .ctrl label.error").html("输入的手机号码错误");
			$("form .ctrl label.error").css("display", "block");
			return false;
		}

	})
	$(".password").focus(function() {
		$(this).css({
			"border": "1px solid #94d469",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #94d469",
		})
		$(".ctrl .ico-password").css("background", "url(../img/regist/ico-login.png) -29px -27px no-repeat")
		$(".ctrl1 .ico-password").css("background", "url(../img/regist/ico-login.png) 0px -27px no-repeat")
	})
	$(".password").blur(function() {
		$(this).css({
			"border": "1px solid #ccc",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #ccc",
		})
		$(".ctrl .ico-password").css("background", "url(../img/regist/ico-login.png) -29px -27px no-repeat")
		$(".ctrl1 .ico-password").css("background", "url(../img/regist/ico-login.png) -29px -27px no-repeat")
		var value = $(".password").val();
		if (value == "") {
			$(".da-login-panel .register-form .ctrl p").html("*请输入密码");
			return false;
		} else if (regs.pwdReg.test(value)) {
			$(".da-login-panel .register-form .ctrl p").html("")
			return true;
		} else {
			$(".da-login-panel .register-form .ctrl p").html("密码为6到20位")
			return false;

		}
	})
	$(".sms").focus(function() {
		$(this).css({
			"border": "1px solid #94d469",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #94d469",
		})
		$(".ico-msgcode").css("background", "url(../img/regist/ico-login.png) 0 -56px no-repeat")

	})
	$(".sms").blur(function() {
		$(this).css({
			"border": "1px solid #ccc",
			"outline": "none"
		});
		$(this).siblings(".login-sign").css({
			"border-right": "1px solid #ccc",
		})
		$(".ico-msgcode").css("background", "url(../img/regist/ico-login.png) -29px -56px no-repeat")
	})
	var timer = 60
	$("#getcode").click(function Countdown() {
			if (timer >= 1) {
				timer -= 1;
				setTimeout(function() {
					Countdown();
				}, 1000);
				$("#getcode").html("请在（"+timer+"秒）后输入验证码")
			}else{
				$("#getcode").html("重新发送验证码")
				
			}
		})
		//console.log($(".checkbox")[0].checked)
	$(".checkbox").click(function() {
			if ($(".checkbox")[0].checked && $(".mobile").blur() && $(".password").blur()) {
				$(".submit-btn").css("background", "#e14958")
				$(".submit-btn").css("cursor", "pointer")
				$(".submit-btn").click(function() {
					location.href = "login0.html"
				})
			}
			$.cookie.json = true;
			$.cookie("username", $(".mobile").val(), {
				Domain: "../",
				path: "/",
				expires: 10
			});
			$.cookie("password", $(".password").val(), {
				Domain: "../",
				path: "/",
				expires: 10
			})
		})
		//	$(".checkbox").click(function() {
		//		if ($(".checkbox")[0].checked) {
		//			$(".submit-btn").css("background", "#e14958")
		//			$(".submit-btn").css("cursor", "pointer")
		//			$(".submit-btn").click(function() {
		//				if ($(".checkbox")[0].checked && $(".mobile").blur() && $(".password").blur() && $(".verify").blur) {
		//					location.href = "login.html"
		//					var value = $(".mobile").val();
		//					var value1 = $(".password").val();
		//					$.cookie("userName", value, {
		//						expires: 7,
		//						path: "/"
		//					})
		//					$.cookie("passWord", value1, {
		//						expires: 7,
		//						path: "/"
		//					})
		//				} else {
		//					return false;
		//				}
		//			})
		//		} else {
		//			$(".submit-btn").css("background", "#ccc")
		//			$(".submit-btn").css("cursor", "default")
		//
		//		}
		//	})
		//	$("#getcode").click(function(e) {
		//			e.stopPropagation();
		//		})
		//$(".submit-btn").click(function(){
		//
		////	console.log($.cookie("userName"));
		//	
		//})

})