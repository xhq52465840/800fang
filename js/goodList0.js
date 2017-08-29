require(["config"],function(){
		require(["jquery","load"],function(){
//	alert(11)
	}),
require(["jquery","arttemplate"],function($,arttemplate){
//		$.getJSON("../mock/goodList.json",function(data){
////			alert(11)
//		var html = arttemplate("goodList",{list:data})
//			console.log(html);
//		})
	$.getJSON("../mock/goodList.json",function(data){
		alert(11)
		var html = arttemplate("goodList",{list:data})
		console.log(html);
//		$(html).appendTo(".main-sell-list")
		})
	})
})
