$(function() {

//var dataFromDocument = location.hash.replace(/#/, "");
var dataFromDocument = "logo";

var jsonPath = "./json/" + dataFromDocument + ".json";

$(".sketch").
		WSP("loadSketch", {
			"data-url": jsonPath,
			"onReady": function(sketch, metadata) {
				sketch.sQuery('[label="Animate"]').press();
			}
    });
});
