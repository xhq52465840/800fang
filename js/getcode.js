(function($) {
	var methods = {
		init: function(options) {},
		show: function() {},
		hide: function() {},
		update: function() {}
	};
	$.fn.getcode = function(setting) {
		var defaults = {
			time: 60,
			before: null,
			after: null
		};
		var config = $.extend(defaults, setting || {});
		var time = config.time;
		obj = $(this);
		obj.each(function() {
			$(this).bind('click', function(event) {
				if(typeof config.before == 'function') {
					config.before.call(this)
				}
				if($(this).hasClass('disabled')) {
					return false
				}
				$(this).addClass('disabled');
				var ths = $(this);
				var val = $(event.target)[0].tagName == 'INPUT' ? ths.val() : ths.html();
				var isinput = $(event.target)[0].tagName == 'INPUT' ? true : false;
				if(isinput) {
					ths.val(time + '秒后可重发')
				} else {
					ths.html(time + '秒后可重发')
				}
				_timeRun = setInterval(function() {
					if(time == 1) {
						ths.css('cursor', 'pointer');
						if(isinput) {
							ths.val(val)
						} else {
							ths.html(val)
						}
						clearInterval(_timeRun);
						ths.removeClass('disabled');
						if(typeof config.after == 'function') {
							config.after.call(this)
						}
					}
					if(time > 1) {
						time--;
						ths.css('cursor', 'default');
						if(isinput) {
							ths.val(time + '秒后可重发')
						} else {
							ths.html(time + '秒后可重发')
						}
					}
				}, 1000);
				return false
			})
		})
	}
})(jQuery);