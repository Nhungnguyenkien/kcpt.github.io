$(function() {

$('#videoModal').on('show.bs.modal', function (event) {
 var button = $(event.relatedTarget) 
 var src = button.data("video-src");
 var title = button.find(".video-title").html();
	
 $(this).find("video").attr("src", src);
 $(this).find(".modal-title").html(title);
});


$('#videoModal').on('hide.bs.modal', function (event) { 
 $(this).find("video").each(function() { this.pause(); });

});

})

