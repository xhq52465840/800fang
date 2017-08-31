define(["jquery", "cookie", "arttemplate"], function($, arttemplate) {

	$.ajax({
		type: "get",
		url: "/html/common/nav.html",
		success: function(data) {

			$(data).appendTo(".nav0")
			$(".top").click(function() {
				var _top = $(".top").offset().top;
				$("html,body").animate({
					scrollTop: 0
				}, "slow")
			})
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
						'<div style = \'height: 27px;width: 27px; background-image:' + product.imgSrc + ';background-size: cover; float: left;margin-right: 11px;\'></div>' +
						'<input id = "goodamount" type = "text" value=' + product.amount + ' style = "height: 27px;width: 26px;margin-left: 10px;text-align: center;margin-right: 10px;"/>' +
						'<span id = "goodprice">' + product.price + '</span>' +
						'<span id = "goodprice0" style = "margin-left: 15px;">' + (product.price * product.amount) + '</span>' +
						"</li>"
				})
				$(html0).appendTo($(".shoppingCart").children("ul"))
					//				document.getElementsByClassName("shoppingCart")[0].children[1].innerHTML += html0;
					//				$(".goods-check").prop('checked',function(){
					//					alert(111)
					//				})

				var _value0 = 0;
				var _price0 = 0;
				var _value1 = 0;
				var _price1 = 0;
				$(".goodckb").click(function() {
					if ($(".goodckb").prop("checked", true)) {
						$(".ck").prop("checked", true)
							//						console.log($($(".ck")[0]).siblings("#goodamount"));

						for (var i = 0; i < $(".ck").length; i++) {
							_value1 += parseInt($($(".ck")[i]).siblings("#goodamount").val());
							_price1 += parseInt($($(".ck")[i]).siblings("#goodprice0").html())
						}
						//					console.log(_price1);
						$("#lala").html(_value1);
						$("#price").html(_price1);
						$(".boooo").css({
							background: "red"
						})
					}

				})

				$(".ck").click(function() {

					var _value = parseInt($(this).siblings("#goodamount").val());
					var _price = parseInt($(this).siblings("#goodprice0").html());
					//					console.log(_price);
					_price0 += _price;
					_value0 += _value;
					//					 console.log($("#lala"));
					$("#lala").html(_value0);
					$("#price").html(_price0);
					$(".boooo").css({
						background: "red"
					})

				})

			}

			$("p").eq(0).mouseenter(function() {
				$(".shoppingCart").show("slow")
			})
			$(".shoppingCart").mouseenter(function() {
				$(".shoppingCart").show()
			}).mouseleave(function() {
				$(".shoppingCart").hide("slow")

			})
			$("p").eq(1).mouseenter(function() {
				$(".customerService").show("slow")
			})
			$(".customerService").mouseenter(function() {
				$(".customerService").show("slow")

			}).mouseleave(function() {
				$(".customerService").hide("slow")

			})
			$("p").eq(2).mouseenter(function() {
				$(".signin").show("slow")
			})
			$(".signin").mouseenter(function() {
				$(".signin").show("slow")

			}).mouseleave(function() {
				$(".signin").hide("slow")

			})
			$(".pay").click(function() {

				location.href = "/../html/shoppingcart.html"
			})

		}
	})
	$.ajax({
		type: "get",
		url: "/html/common/header.html",
		async: true,
		success: function(data) {
			
			$(data).appendTo(".header0");
			$(".fullProducts").mouseenter(function() {
				$(".sort_list").show("slow")
			})
			$(".sort_list").mouseenter(function() {
				$(".sort_list").show()

			}).mouseleave(function() {
				$(".sort_list").hide();
				$(".detail_big").hide()

			})
			if ($.cookie("username")) {
				$("#loginIn").html($.cookie("username").slice(0, 12))
				$("#registIn").html("退出登录")
					//				$("#loginIn0").html($.cookie("username").slice(1,12))
				$("#loginIn0").html("")
				$(".signin p").html($.cookie("username").slice(0, 12));
				$(".sigin_1").hide()

			}
			$("#indexHref").click(function(){
				location.href="../index.html"
			})
			$("#loginIn").click(function() {
				location.href = "html/login0.html"
			})+
			$("#registIn").click(function() {
				location.href = "html/regist0.html"
			})
			$(".header0").delegate(".out", "click", function() {
				location.href = "html/goodList0.html"
			});
			$(".detail_big").click(function(){
				location.href = "html/goodList0.html"
			})
			$(".sort_list li").mouseenter(function() {
				$(this).siblings().css({
					"background": "#0f5cb3",
					"color": "white"
				})
				$(this).css({
					"background": "white",
					"color": "#0f5cb3"
				})
				$(".detail_big").show("slow")
			})
			$(".detail_big").mouseenter(function() {
				$(".detail_big").show();
				$(".sort_list").show()

			}).mouseleave(function() {
				$(".sort_list").hide();

				$(".detail_big").hide()

			});

		}
	});
	$.ajax({
		type: "get",
		url: "/html/common/footer.html",
		async: true,
		success: function(data) {
			$(data).appendTo(".footer");

		}
	});

});