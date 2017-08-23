
$(".sb-promo").mouseenter(function(){
	$(".sb-promo").css("background-color","red")
	$(".sb-promo").find("strong").css("display","block")
})
$(".sb-promo").mouseleave(function(){
	$(".sb-promo").css("background-color","#333")
	$(".sb-promo").find("strong").css("display","none")
})
$(".sb-collect").mouseenter(function(){
	$(".sb-collect").css("background-color","red")
	$(".sb-collect").find("strong").css("display","block")
})
$(".sb-collect").mouseleave(function(){
	$(".sb-collect").css("background-color","#333")
	$(".sb-collect").find("strong").css("display","none")
})
$(".dt-title").mouseover(function() {
	$(".ico-down").css("display", "inline-block");
	$(".ico-up").css("display", "none");
	$(".dd").css("display","block")
	$(".dd dl").mouseover(function() {
	$(this).css({
		"background": "white",
		"border": "1px solid #654579",
		"border-right": "none",
		"width":"180px",
	})
	$(".dd").css("display","block")
	$(".category-drop1").css("display", "block")
	$(".ico-down").css("display", "inline-block");
	$(".ico-up").css("display", "none");
	$(".dot-wrap").css("display","none")
})
})
$(".dt-title").mouseleave(function() {
	$(".ico-down").css("display", "none");
	$(".ico-up").css("display", "inline-block");
	$(".dd").css("display","none")
	
})

$(".dd dl").mouseleave(function() {
	$(this).css({
		"background": "#e8e3eb",
		"border": "none"
	})
	$(".category-drop1").css("display", "none")
	$(".ico-down").css("display", "none");
	$(".ico-up").css("display", "inline-block");
	$(".dot-wrap").css("display","block")
	$(".dd").css("display","none")
	
	
})
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
$(".da-search .searchlist li").mouseenter(function(){
	$(this).find(".search-img .option").css("display","block")
	$(this).find(".search-img .bgoption").css("display","block")
})
$(".da-search .searchlist li").mouseleave(function(){
	$(this).find(".search-img .option").css("display","none")
	$(this).find(".search-img .bgoption").css("display","none")
})
$.get("../data/goodList/goodList.json",function(data){
	var result = data.li1;
	var count = 0;
	for (var i in result) {
		$(".da-search .searchlist li .cover-img").eq(count).css("background-image",result[i])
		$(".da-search .searchlist li .cover-img").eq(count).attr("id",i)
		count++;
	}
})
$(".option").click(function(e){
	e.preventDefault()
	var value1 = $(".icon_number").html();
	var value2 = $(".da-header-cart span").html();
	value2++;
	value1++;
	$(".icon_number").html(value1);
	$(".da-header-cart span").html(value2);
	var id = $(this).siblings(".cover-img").eq(0).attr('id');
	var src = document.getElementById(id).style.backgroundImage;
//	var attr=[];
//	attr.push(src);
//	console.log(attr)
//	$.cookie("backgroundImage",src,{expires: 7, path: "/"})
	setSrc(id,src);
//	console.log(JSON.parse($.cookie("srcs")))


})
function setSrc(id,src) {
	var srcs = $.cookie("srcs")?JSON.parse($.cookie("srcs")):{};
	if (!(id in srcs)) {
		srcs[id] = src;
	}
	$.cookie("srcs",JSON.stringify(srcs),{expires:7,path:"/"});
}
$(".sb-cart").click(function(){
	location.href = "../html/shopCar.html"
})
$(".da-header-cart").click(function(){
	location.href = "../html/shopCar.html"
})
$(".logo").click(function(){
	location.href = "../html/index.html"
})