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
//console.log($.cookie("backgroundImage"))
//$(".tb2_td2").css("src",$.cookie("backgroundImage"))
if ($.cookie("srcs")) {
	var srcs = JSON.parse($.cookie("srcs"));
//	console.log(srcs)
	for (var src in srcs) {
		var str = srcs[src].slice(5,srcs[src].length-2);
//		console.log(src)
		$(".pay").append("<tr><td><div id='cccc'><img src = "+str+"/></div></td><td>商品信息</td><td><input value='1'></input></td><td>8.00</td><td><button class='delate'>删除</button></td></tr>")
	}
//	var str0 = $.cookie("backgroundImage")
//	var str = str0.slice(5,str0.length-2)
//	console.log(str)
//	$("#cccc img").attr("src",str)
}
$("#jz2").click(function(){
		location.href="../html/pay.html"
})
$(".delate").click(function(){
	$(this).parent().parent().remove();
//	for(var src in srcs){
//		console.log($(this).siblings().find("#cccc"))
//		$(this).siblings().find("#cccc")
//			if(id == srcs[i].id){
//			delete srcs[i]
//		}
//	}
//	$.cookie("srcs",srcs)
})
