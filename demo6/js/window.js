define(['jquery'],function($){
	
	function Window(){
		this.cfg = {
			width: 500,
			height: 500,
			content: '',
			handler: null,
			title: '提示'
		}
	}
	
	Window.prototype = {
		alert:function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var boundingBox = $(
				'<div class="window_boundingBox">'+
					'<div class="window_header">'+CFG.title+'</div>'+
					'<div class="window_body">'+CFG.content+'</div>'+
					'<div class="window_footer"><input type="button" value="确定"></div>'+
				'</div>'
				);
				btn = boundingBox.find(".window_footer input");
			    boundingBox.appendTo('body');
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
