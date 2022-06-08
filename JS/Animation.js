$( ".bodyCard" ).toggle({ effect: "scale", persent: 25 });



$('.bodyCard').mouseover(function(){
    $(this).stop().animate({width: (current_w * 3), height: (current_h * 3)}, 200,'easeInQuint');
  }).mouseout(function(){ 
    $(this).stop().animate({"width": "30%","left":"0px"}, 200,'easeInQuint');
  });
