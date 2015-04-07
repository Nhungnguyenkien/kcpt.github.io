$(function() {

$(".sketch").
		WSP("loadSketch", {
			"data-url": "./json/Logo.json",
			"onReady": function(sketch, metadata) {
				sketch.sQuery('[label="Animate"]').press();
			}
    });
});
