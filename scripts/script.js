$(function() {

      $(".play").on("click", function(){
      	$(".titlebottom").addClass("hinge")
      	$(".fadescreen").delay(3000).fadeOut(3000)
      });

      $( "a.play" ).on("mouseover", function() {
      	 $( ".circle" ).addClass("deployCircle");
      });

      $(".story").on("click", function(){
      	$(this).fadeOut(1500)
      });

 });