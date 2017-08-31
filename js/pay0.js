require(["config"],function(){
	require(["jquery","load"],function(){
		$(".input158").blur(function(){
	var value = $(".input158").val();
	if(value==""){
		$("#consignee-error").css("display","block");
		$(this).css({"border":"1px solid #e14958","background":"#fdf3fd"})
		$("#consignee-error").html("请输入用户名")
	} else if (value.length==1) {
		$("#consignee-error").css("display","block");
		$(this).css({"border":"1px solid #e14958","background":"#fdf3fd"})
		$("#consignee-error").html("用户输入错误")
	}else{
		$("#consignee-error").css("display","none");
		$(this).css({"border":"1px solid #ccc","background":"#fff"})
		
	}
})
$(".input438").blur(function(){
	var value = $(".input438").val();
	if (value=="") {
		$(this).css({"border":"1px solid #e14958","background":"#fdf3fd"});
		$("#address-error").html("请输入地址")
	}else{
		$("#address-error").css("display","none");
		$(this).css({"border":"1px solid #ccc","background":"#fff"})
		
		
	}
})
  var regs = {
		userNameReg: /^(([\u4e00-\u9fa5])|[a-zA-Z0-9-_]){4,20}$/,
		pwdReg:/.{6,20}/,
		numReg:/\d/,
		strReg:/[a-zA-Z]/,
		tsReg:/[^u4e00-\u9fa5a-zA-Z0-9]/,
		emailReg:/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
		mobileReg: /^0?(13[0-9]|15[012356789]|18[0-9]|17[0-9])[0-9]{8}$/,
	}
  $(".input1508").blur(function(){
  	var value = $(this).val();
  	if (value=="") {
		$(this).css({"border":"1px solid #e14958","background":"#fdf3fd"});
  		$("#phone_mob-error").html("请输入电话号码")
  	}else if(regs.mobileReg.test(value)){
		$(this).css({"border":"1px solid #ccc","background":"#fff"})
  		$("#phone_mob-error").html("")
		
  	}else{
  		$(this).css({"border":"1px solid #e14958","background":"#fdf3fd"});
  		$("#phone_mob-error").html("电话号码输入错误")
  	}
  })
	})
})
