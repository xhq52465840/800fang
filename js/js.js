define(["jquery","tool"],function($){
	$(function(){
	var lis =$("li",$("#container")), // 查找所有轮播图片的li盒子
			len = lis.length, // 所有轮播图片的张数
			currentIndex = 0, // 当前显示图片的索引
			nextIndex = 1, // 即将显示图片的索引
			circles = $("div", $("#pages")), // 所有小圆点
			timer = null; // 计时器id

		// 轮播切换的函数
		function move(){
			// 当前图片淡出
			fadeOut(lis[currentIndex], 600);
			// 即将显示的图片淡入
			fadeIn(lis[nextIndex], 600);
			// 切换小圆点背景效果
			// circles[currentIndex].className = "";
			// circles[nextIndex].className = "current";
			removeClass(circles[currentIndex], "current");
			addClass(circles[nextIndex], "current");

			// 修改索引
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >= len) 
				nextIndex = 0;
		}

		// 自动淡入淡出轮播
		timer = setInterval(move, 3000);

		// 鼠标移入/移出轮播图范围，停止/重启计时器
		$("#container").onmouseenter = function(){
			clearInterval(timer);
		}
		$("#container").onmouseleave = function(){
			timer = setInterval(move, 3000);
		}

		// 点击向上/下翻页
		$("#prev").onclick = function(){
			// 设置即将显示图片的索引
			nextIndex = currentIndex - 1;
			if (nextIndex < 0)
				nextIndex = len - 1;
			// 切换
			move();
		};
		$("#next").onclick = move;

		// 点击小圆点切换
		for (let i = 0, len = circles.length; i < len; i++) {
			circles[i].onclick = function(){
				if (i === currentIndex) // 当前点击的索引和显示图片索引一致
					return;
				// 将即将显示图片的索引修改为点击的小圆点索引
				nextIndex = i;
				// 切换
				move();
			}
		}
});
})