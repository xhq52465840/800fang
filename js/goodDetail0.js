require(["config"],function(){
	require(["jquery","load"],function(){
		
	})
	require(["jquery","cookie","fangdajing"],function($){
//		alert(1)
//		console.log($.cookie("goodDetail"));
//		$(".mine").css({
//			backgroundImage:'\$.cookie("goodDetail")/'
//		})
		var html = "" ;
		html+='<div class="box">'+

	'<div class="tb-booth tb-pic tb-s310">'+
		'<img src="../img/goodDetail/images/01_mid.jpg" alt="美女" rel="../img/goodDetail/images/01.jpg" class="jqzoom" />'+
	'</div>'+

	'<ul class="tb-thumb" id="thumblist">'+
		'<li class="tb-selected"><div class="tb-pic tb-s40"><a href="#"><img src="../img/goodDetail/images/01_small.jpg" mid="../img/goodDetail/images/01_mid.jpg" big="../img/goodDetail/images/01.jpg"></a></div></li>'+
		'<li><div class="tb-pic tb-s40"><a href="#"><img  src="../img/goodDetail/images/02_small.jpg" mid="../img/goodDetail/images/02_mid.jpg" big="../img/goodDetail/images/02.jpg"></a></div></li><li><div class="tb-pic tb-s40"><a href="#"><img src="../img/goodDetail/images/03_small.jpg" mid="../img/goodDetail/images/03_mid.jpg" big="../img/goodDetail/images/03.jpg"></a></div></li><li><div class="tb-pic tb-s40"><a href="#"><img src="../img/goodDetail/images/04_small.jpg" mid="../img/goodDetail/images/04_mid.jpg" big="../img/goodDetail/images/04.jpg"></a></div></li>'+
		'<li><div class="tb-pic tb-s40"><a href="#"><img src="../img/goodDetail/images/05_small.jpg" mid="../img/goodDetail/images/05_mid.jpg" big="../img/goodDetail/images/05.jpg"></a></div></li></ul>'
	
'</div>'
$(html).appendTo(".main");

	$(".jqzoom").imagezoom();
	
	$("#thumblist li a").click(function(){
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
	});


	})
})
