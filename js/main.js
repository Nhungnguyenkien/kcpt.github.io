$(function() {

$('#videoModal').on('show.bs.modal', function (event) {
 var button = $(event.relatedTarget) 
 var src = button.data("video-src");
	
 $(this).find("video").attr("src", src);

});


$('#videoModal').on('hide.bs.modal', function (event) { 
 $(this).find("video").each(function() { this.pause(); });

});

})

