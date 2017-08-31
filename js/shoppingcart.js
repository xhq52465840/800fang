require(["config"], function() {
	require(["jquery", "load"], function() {

	})
	require(["jquery", "cookie"], function($) {
		//		console.log($.cookie("products"));
		$.cookie.json = true; // 自动转换
		var _products = $.cookie("products") || [];
		if ($.cookie("products")) {
			var data = {
				products: _products
			};
			var html0 = "";

			data.products.forEach(function(product) {
				html0 += "<li>" +
					'<input type = "checkbox" name = "ck" class = "ck goods-check" style = "float: left;"/>' +
					'<div style = \'height: 56px;width: 62px; background-image:'+ product.imgSrc + ';background-size: cover; margin-left: 66px; float: left;margin-right: 11px;\'><span style="display:none">'+product.id+'</span></div>' +
					'<input id = "goodamount" type = "text" value=' + product.amount + ' style = "height: 27px;width: 26px;margin-left: 130px;text-align: center;margin-right: 10px;"/>' +
					'<span id = "goodprice" style="margin-left: 150px;">' + product.price + '</span>' +
					'<span id = "goodprice0" style = "margin-left: 150px;">' + (product.price * product.amount) + '</span>' +
					'<span><a class="delate" style="margin-left:160px">' + "删除" + '</a></span>'
				"</li>"
			});
			$(html0).appendTo($(".shoppingCart-list").children("ul"));
			var _value0 = 0;
			var _price0 = 0;
			var _value1 = 0;
			var _price1 = 0;
			$(".goodckb").click(function() {
				if ($(".goodckb").prop("checked", true)) {
					$(".ck").prop("checked", true)

					for (var i = 0; i < $(".ck").length; i++) {
						_value1 += parseInt($($(".ck")[i]).siblings("#goodamount").val());
						_price1 += parseInt($($(".ck")[i]).siblings("#goodprice0").html())
					}
					$("#lala").html(_value1)
					$("#price").html(_price1);
					$(".boooo").css({
						background: "red"
					})
				}

			})

		}else{
			alert("请购物")
		}
		$(".ck").click(function() {

			var _value = parseInt($(this).siblings("#goodamount").val());
			var _price = parseInt($(this).siblings("#goodprice0").html());
			_price0 += _price;
			_value0 += _value;
			console.log($("#lala").html());
			$("#lala").click(function(){
				alert(11)
			})
			$("#lala").html(_value0);
			$("#price").html(""+_price0);
			$(".boooo").css({
				background: "red"
			})

		})

		$(".delate").click(function(){
			var row = $(this).parent().parent("li");
//			console.log(row);
			var id = row.find("div").children("span").html();
//			console.log(id);
			var index = isExist(id,_products)
			_products.splice(index,1)
			$.cookie("products",JSON.stringify(_products),{expires:7})
			row.remove()
		})
		function isExist(id, products) {
			for (var i = 0, len = products.length; i < len; i++) {
				if (products[i].id == id)
					return i;
			}
		}
	})
})