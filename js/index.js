require(["config"],function(){
	require(["jquery","load"],function(){
		
	}),
	require(["tool","lunbo"],function(){
		
	}),
	require(["jquery","cookie"],function(){
		console.log($.cookie("username"))
	}),
	require(["jquery","arttemplate"],function($,arttemplate){
		$(function(){
			// 获取窗口高度
			var winHeight = $(window).height();
			// 获取1L之前的布局结构高度
			var layoutHeight = $(".brand-box0").offset().top;
			// 标记是鼠标滚轮的滚动还是点击菜单导航的滚动
			var autoScroll = true;
			// 滚动
			$(window).scroll(function(){
				if (autoScroll) {
					// 获取当前滚动的高度
					var _scrollTop = $(window).scrollTop();
						var _bottom = $(".link0").offset().top;
					// 判断滚动的高度
					if (_scrollTop > layoutHeight - winHeight / 2) {
						$(".side_menu").stop().fadeIn();
					} else {
						$(".side_menu").stop().fadeOut();
					}
					if(_scrollTop+200>_bottom- winHeight / 2){
							$(".slide_menu").stop().fadeOut();
						}

					// 滚动过程中导航菜单样式切换
					$(".floor").each(function(index, element){
						// 当前遍历到楼层在文档中距离顶部高度
						var _top = $(element).offset().top;
					
//						console.log(_bottom);
//						console.log(_scrollTop);
//						console.log(_bottom);
//						
						// 判断
						if (_scrollTop > _top - winHeight/2) {
							$(".side_menu li").eq(index)
											  .children("span").show()
											  .end()
											  .siblings()
											  .children("span").hide();
						}
						
					});
				}
			});

			// 点击菜单跳转
			// $(".side_menu").delegate("li", "click", function(){});
			$(".side_menu").on("click", "li", function(){
				// 标记点击滚动
				autoScroll = false;
				// 找出当前点击li的索引
				var idx = $(this).index();
				// 计算idx对应楼层在文档中的定位
				var _top = $(".floor").eq(idx).offset().top;
				// 运动动画
				$("html, body").stop().animate({scrollTop:_top}, function(){
					autoScroll = true;
				});
				// 点击的 li 切换显示样式内容
				$(this).children("span").show().end().siblings().children("span").hide();
			});

			// 菜单上移入移出
			$(".side_menu li").hover(function(){
				$(this).children("span").show();
			}, function(){
				$(this).children("span").hide();
			});
		});

		$.getJSON("/mock/mainitem.json",function(data){
		var html = arttemplate("mainitem",{list:data})
		$(html).appendTo(".main-sell-list")
		})
		$.getJSON("../mock/brand.json",function(data){
			$(".brand-img").attr({
				src:data.brand1.src
			})
//			console.log(data.brand1.src1);
			$(".brand-img0").attr({
				src:data.brand2.src
			})
//			$(".banner_img").attr({
//				src:data.brand3.src
//			})
		})
		$.getJSON("../mock/discount.json",function(data){
			var html = arttemplate("mainitem",{list:data})
		$(html).appendTo(".discount")
		})
//		$.getJSON("../mock/main.json",function(data){
////			console.log(data);
//			var html = arttemplate("maizn",{list:data})
////			$(html).appendTo(".all")
//			console.log(html);
//		})
		var _html = arttemplate("discount",{list:6});
//		console.log(_html);
		$(_html).appendTo(".cate-list")
		
})
})
//require(["config"],function(){
//	require(["jquery"],function($){
//		
//	})
//})