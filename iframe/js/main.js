$(function() {

$(".sketch").
		WSP("loadSketch", {
			"data-url": "./iframe/json/Logo.json",
			"onReady": function(sketch, metadata) {
				sketch.sQuery('[label="Animate"]').press();
			}
    });
});
