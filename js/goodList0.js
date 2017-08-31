require(["config"], function() {
require(["jquery", "load"], function() {
		//	alert(11)
	}),
	require(["jquery", "arttemplate", "cookie"], function($, arttemplate) {
		//	alert(11)
		//			var bomm = $("#bomm").text();
		//					console.log(boom);
		//			console.log("");
$.ajax({
	type: "get",
	url: "/../mock/goodList.json",
	async: true,
	success: function(data) {
		//			alert(11)
		var html = arttemplate("goodList", {
			list: data
		})
		$(html).appendTo(".bigall1");
		$(".bigall1 li").mouseenter(function() {
			//	$(this).find(".option").css("display","block")
			$(this).find(".bgoption").css("display", "block");

		})
		$(".bgoption").click(function(){
			location.href="/html/goodDetail0.html";
//			var _src = $(this).siblings(".cover-image")
//			console.log(_src);
		})
		$(function() {
			$(".bigall1 li a").click(function() {
//				console.log($(this).children(".cover-img").css("background-image"));
				var product = {
						id: $(this).children(".sign").html(),
						price: $(this).next().children().find(".now-price").html(),
						imgSrc: $(this).children(".cover-img").css("background-image"),
						amount: 1
					}
					//						console.log(product.imgSrc);
				var _src = product.id
//				console.log(_src);
				var _price = product.price;
				var _amount = product.amount;
				var _imgSrc = product.imgSrc
				$.cookie.json = true; // 自动转换0
				$.cookie("goodSrc",_imgSrc,{
					expires:10
				})
				$.cookie("goodId", _src, {
					expires: 10
				});	
				$.cookie("goodPrice",_price,{
					expires:10
				})
				$.cookie("goodAmount",_amount,{
					expires:10
				})
				var _products = $.cookie("products") || [];
				var index = isExist(product.id, _products);
				if (index === -1) { // 不存在
					// 向数组中添加元素
					_products.push(product);
				} else { // 存在，则修改数量
					_products[index].amount++;
				}
				// 将数组存回到 cookie 中
				$.cookie("products", _products, {
					expires: 10
				});
				return false;
			})

			function isExist(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (products[i].id == id)
						return i;
				}

				return -1;
			}
		})

		$(".bigall1 li").mouseleave(function() {
			//	$(this).find(".search-img .option").css("display","none")
			$(this).find(".bgoption").css("display", "none")
		})
	}
});
$(window).on("scroll",function(){
	  var st = $(this).scrollTop();
if(st>500){
	$(".header1_1").css({
		position:"fixed",
		top:"0px",
		zIndex:"999",
		background:"white"
	})
}else{
	$(".header1_1").css({
		position:"relative"
	})
}
})
$(".sort").children("a:even").click(function() {
	$(this).siblings("a").css({
		color: 'black'
	})
	$(this).css({
		color: 'red'
	})
	$.getJSON("../mock/goodList.json", function(data) {
		var html = arttemplate("goodList", {
			list: data
		})
		$(".bigall1").empty()
		$(html).appendTo(".bigall1");
		$(".bigall1 li").mouseenter(function() {
			//	$(this).find(".option").css("display","block")
			$(this).find(".bgoption").css("display", "block")
		})
		$(".bigall1 li").mouseleave(function() {
			//	$(this).find(".search-img .option").css("display","none")
			$(this).find(".bgoption").css("display", "none")
		})
	})
})
$(".sort").children("a:odd").click(function() {
	$(this).siblings("a").css({
		color: 'black'
	})
	$(this).css({
		color: 'red'
	})
	$.getJSON("../mock/goodList0.json", function(data) {
		var html = arttemplate("goodList", {
			list: data
		})
		$(".bigall1").empty();

		$(html).appendTo(".bigall1");
		$(".bigall1 li").mouseenter(function() {
			//	$(this).find(".option").css("display","block")
			$(this).find(".bgoption").css("display", "block")
		})
		$(".bigall1 li").mouseleave(function() {
			//	$(this).find(".search-img .option").css("display","none")
			$(this).find(".bgoption").css("display", "none")
		})
	})
})

})
})