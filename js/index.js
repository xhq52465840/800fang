require(["config"],function(){
	require(["jquery","load"],function(){
		
	}),
	require(["tool","lunbo"],function(){
		
	}),
	require(["jquery","arttemplate"],function($,arttemplate){
//		console.log(arttemplate);
		$.getJSON("/mock/mainitem.json",function(data){
//			console.log(data);
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
