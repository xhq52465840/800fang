$(".dowload").mouseenter(function() {
	$(".da-code").css("display", "block");
	$(".arrow-7-5").css("display", "block");
	$(".pic-code").css("display", "block")
})
$(".dowload").mouseleave(function() {
	$(".da-code").css("display", "none");
	$(".arrow-7-5").css("display", "none");
	$(".pic-code").css("display", "none")
})
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
if ($.cookie("srcs")) {
	var srcs = JSON.parse($.cookie("srcs"));
//	console.log(srcs)
	for (var src in srcs) {
		var str = srcs[src].slice(5,srcs[src].length-2);
		$(".order-table").append("<ul class='thead'><li class='th item'><p><img src = "+str+"/></p></li><li class='th price'><p>8.00</p></li><li class='th number'><p>2</p></li><li class='th total'><p>500.00</p></li></ul>")
	}
//	var str0 = $.cookie("backgroundImage")
//	var str = str0.slice(5,str0.length-2)
//	console.log(str)
//	$("#cccc img").attr("src",str)
}