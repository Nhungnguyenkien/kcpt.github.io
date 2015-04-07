$(function() {

function getParameterByName(name) {
   name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
   var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
       results = regex.exec(window.location.search);
   return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var sketchFile = getParameterByName("sketch") || "logo";

var jsonPath = "./json/" + sketchFile + ".json";

$(".sketch").
		WSP("loadSketch", {
			"data-url": jsonPath,
			"onReady": function(sketch, metadata) {
				sketch.sQuery('[label="Animate"]').press();
			}
    });
});
