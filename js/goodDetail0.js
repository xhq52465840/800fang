require(["config"],function(){
	require(["jquery","load"],function(){
		
	})
	require(["jquery","cookie","fangdajing"],function($){
	var _value0	=$.cookie("goodPrice").slice(1,($.cookie("goodPrice").length-1));
		var html = "";
		html+='<div id = "kk" style = "height: 432px;width: 414px;background-size: cover; float: left;margin-right: 11px;"></div>'+
		"<p>"+"商品编号"+$.cookie("goodId").slice(1,$.cookie("goodId").length-1)+"</p>"+
		"<p>"+"商品价格"+$.cookie("goodPrice").slice(1,$.cookie("goodPrice").length-1)+"</p>"+
		"商品数量"+"<input id='hehehe' type='number' min = '1' value ="+$.cookie("goodAmount").slice(0,$.cookie("goodAmount").length)+">"
		 
		
	$(html).appendTo(".buy-good")
		$("#heji").html(_value0)
	
	$("#kk").css({
		backgroundImage:"url("+$.cookie("goodSrc").slice(6,($.cookie("goodSrc").length-4))+'"'+")"
	})
	$("#hehehe").blur(function(){
		var _value = $("#hehehe").val(),
			_price = _value0
//		console.log(_price*_value);
		$("#heji").html(_price*_value)
	})
	$(".pay").click(function(){
		location.href="/html/shoppingcart.html"
	})

	})
})
