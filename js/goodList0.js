require(["config"],function(){
		require(["jquery","load"],function(){
//	alert(11)
	}),
require(["jquery","arttemplate"],function($,arttemplate){
//	alert(11)
	$.ajax({
		type:"get",
		url:"../mock/goodList.json",
		async:true,
		success:function(data){
//			alert(11)
		var html = arttemplate("goodList",{list:data})
		$(html).appendTo(".bigall1");
		$(".bigall1 li").mouseenter(function(){
//	$(this).find(".option").css("display","block")
	$(this).find(".bgoption").css("display","block")
})
$(".bigall1 li").mouseleave(function(){
//	$(this).find(".search-img .option").css("display","none")
	$(this).find(".bgoption").css("display","none")
})
		}
	});
	})
})
