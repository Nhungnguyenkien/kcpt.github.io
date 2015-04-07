$(function() {

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(window.parent.document.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// window.parent.document doesn't make it past iframe access boundary.
// var jsonPath = "./json/" + getParameterByName("sketch") + ".json";
var jsonPath = "./json/" + "logo" + ".json";

$(".sketch").
		WSP("loadSketch", {
			"data-url": jsonPath,
			"onReady": function(sketch, metadata) {
				sketch.sQuery('[label="Animate"]').press();
			}
    });
});
