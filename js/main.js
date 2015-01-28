require.config({
	paths :{
		jquery: 'jquery'
	}
})
require(["jquery","window"],function($,w) {
	$("#a").click(function(){
//		new w.Window().alert("weclome!");
//		new w.Window().confirm();
//		new w.Window().prompt("red");
	})
});