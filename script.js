$(document).ready(function(){


    $("#red").click(function()
     {

    	var right_width = $("#right").width();
    	var right_height = $("#right").height();
      	$("#right").css({"width" : "" + (right_width - 10),"height" : "" + (right_height - 10)});



	});
//////////////////////////////////////
//////////////////////////////////////

  $('#red').draggable
  (
  {
    containment : '#left'
  }
  );

    $('#of').draggable
     (
       {
        
       }

      );

    $("#blue").click(function()
    {

    	var left_width = $("#left").width();
    	var left_height = $("#left").height();
    	$("#left").css({"width" : "" + (left_width - 10),"height" : "" + (left_height - 10)});

});

$('#blue').animate({
    'marginRight' : "-=100px"
});


});