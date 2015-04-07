$(function() {

$(".sketch").
		WSP("loadSketch", {
			"data-url": "./json/logo.json",
			"onReady": function(sketch, metadata) {
				sketch.sQuery('[label="Animate"]').press();
			}
    });
});
