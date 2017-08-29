define(["jquery","cookie"],function($){
	$.ajax({
		type:"get",
		url:"/html/common/nav.html",
		success:function(data){
			$(data).appendTo(".nav0")
			$(".top").click(function(){
				var _top = $(".top").offset().top;
				$("html,body").animate({scrollTop:0},"slow")
			})
			$("p").eq(0).mouseenter(function(){
				$(".shoppingCart").show("slow")
			})
			$(".shoppingCart").mouseenter(function(){
				$(".shoppingCart").show()
			}).mouseleave(function(){
				$(".shoppingCart").hide("slow")
				
			})
			$("p").eq(1).mouseenter(function(){
				$(".customerService").show("slow")
			})
				$(".customerService").mouseenter(function(){
				$(".customerService").show("slow")
					
				}).mouseleave(function(){
				$(".customerService").hide("slow")
					
				})
			$("p").eq(2).mouseenter(function(){
				$(".signin").show("slow")
			})
				$(".signin").mouseenter(function(){
				$(".signin").show("slow")
				
				}).mouseleave(function(){
				$(".signin").hide("slow")
				
				})
			
			}
		})
	$.ajax({
		type:"get",
		url:"/html/common/header.html",
		async:true,
		success:function(data){
			$(data).appendTo(".header0");
			$(".fullProducts").mouseenter(function(){
				$(".sort_list").show("slow")
			})
			$(".sort_list").mouseenter(function(){
				$(".sort_list").show()
				
			}).mouseleave(function(){
				$(".sort_list").hide();
				$(".detail_big").hide()
				
			})
			if ($.cookie("username")) {
				$("#loginIn").html($.cookie("username").slice(1,12))
				$("#registIn").html("")
//				$("#loginIn0").html($.cookie("username").slice(1,12))
				$("#loginIn0").html("")
				$(".signin p").html($.cookie("username").slice(1,12));
				$(".sigin_1").hide()
				
			}

			$("#loginIn").click(function(){
				location.href="html/login0.html"
			})
			$("#registIn").click(function(){
				location.href = "html/regist0.html"
			})
			$(".sort_list li").mouseenter(function(){
				$(this).siblings().css({
					"background":"#0f5cb3",
					"color":"white"
				})
				$(this).css({
					"background":"white",
					"color":"#0f5cb3"
				})
				$(".detail_big").show("slow")
			})
			$(".detail_big").mouseenter(function(){
				$(".detail_big").show();
				$(".sort_list").show()
				
				
			}).mouseleave(function(){
				$(".sort_list").hide();
				
				$(".detail_big").hide()
				
			});
			
			}
	});
	$.ajax({
		type:"get",
		url:"/html/common/footer.html",
		async:true,
		success:function(data){
			$(data).appendTo(".footer");
			
		}
	});

});
