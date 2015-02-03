define(['jquery'],function($){
	
	function Window(){
		this.cfg = {
			width: 500,
			height: 500,
			content: '',
			handler: null
		}
	}
	
	Window.prototype = {
		alert:function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var boundingBox = $('<div class="window_boundingBox"></div>');
			    boundingBox.appendTo('body');
			    boundingBox.html(CFG.content);
			var btn = $('<input type="button" value="确定">');
				btn.appendTo(boundingBox);
				btn.click(function(){
					CFG.handler && CFG.handler();
					boundingBox.remove();
				})
				
				boundingBox.css({
					width: CFG.width+"px",
					height: CFG.height+"px",
					left: (CFG.x || (Window.innerWidth-CFG.width)/2)+"px",
					top: (CFG.y || (Window.innerHeight-CFG.height/2))+"px"
				})
		},
		confirm:function(){
		},
		prompt:function(){}
	}
	
	return{
		Window : Window
	}
})
