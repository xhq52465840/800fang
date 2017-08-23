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
$(".tip-note-box").mouseenter(function(){
	$(".note div").css("display","block")
})
$(".tip-note-box").mouseleave(function(){
	$(".note div").css("display","none")
})
$(".btn-add").click(function(){
	var value = $(".number-input").val();
	console.log(value)
	value++;
	$(".number-input").val(value)
})
$(".btn-reduce").click(function(){
	var value = $(".number-input").val();
	console.log(value)
	value--;
	if (value>0) {
		$(".number-input").val(value)
	} else{
		$(".number-input").val(0)
		
	}
})
//$(".small-img-box li").mouseenter(function(){
//	$(this).css("border","2px solid red")
//})
//$(".small-img-box li").mouseleave(function(){
//	$(this).css("border","2px solid #fff")
//})
//$(".goods-big-img").mouseenter(function(){
//	$(".big-img-box").css("display","block")
//})
//$(".goods-big-img").mouseleave(function(){
//	$(".big-img-box").css("display","none")
//})
//$("goods-big").mousemove(function(e){
//	$(".image-zoom").css("display","block")
//	var iScrollLeft = $(window).scrollLeft();
//	var iScrollTop = $(window).scrollTop();
//	var iLeft = iScrollLeft + e.clientX - $(".image-zoom").outerWidth()/2 - $(".goods-big").offset().left;
//	var iTop = iScrollTop + e.clientY - $(".image-zoom").outerHeight()/2 - $(".goods-big").offset().top;
//	var iSmallMaxLeft = $(".goods-big").outerWidth() - $(".image-zoom").outerWidth();
//	var iSmallMaxTop = $(".goods-big").outerHeight() - $(".image-zoom").outerHeight();
//			if(iLeft<0) {
//						iLeft = 0;
//					} else if(iLeft>iSmallMaxLeft) {
//						iLeft = iSmallMaxLeft;
//					}
//
//					if(iTop<0) {
//						iTop = 0;
//					} else if(iTop>iSmallMaxTop) {
//						iTop = iSmallMaxTop;
//					}	
//	
//					var iBigLeft = -iLeft/iSmallMaxLeft*($(".big-img-box").outerWidth()-$(".big-img-box").outerWidth());
//					var iBigTop = -iTop/iSmallMaxTop*($(".big-img-box").outerHeight()-$(".big-img-box").outerHeight());
//					$(".image-zoom").css({"left": iLeft, "top": iTop});
//					$(".big-img").css({"left": iBigLeft, "top": iBigTop})
//})
