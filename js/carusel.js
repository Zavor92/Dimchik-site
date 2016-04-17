$(document).ready(function(){

      $(document).on('click', ".index-right",function(){ 
         var carusel = $(this).parents('.index-slider');
         right_carusel(carusel);
         return false;
      });

      $(document).on('click',".index-left", function(){ 
      	var carusel = $(this).parents('.index-slider');
      	left_carusel(carusel);
      	return false;
      });

      function left_carusel(carusel){
         var block_width = $(carusel).find('.index-slider-item').outerWidth();
         $(carusel).find(".index-slider-items .index-slider-item").eq(-1).clone().prependTo($(carusel).find(".index-slider-items")); 
         $(carusel).find(".index-slider-items").css({"left":"-"+block_width+"px"});
         $(carusel).find(".index-slider-items .index-slider-item").eq(-1).remove();    
         $(carusel).find(".index-slider-items").animate({left: "0px"}, 500); 
      }

      function right_carusel(carusel){
         var block_width = $(carusel).find('.index-slider-item').outerWidth();
         $(carusel).find(".index-slider-items").animate({left: "-"+ block_width +"px"}, 540, function(){
      	  $(carusel).find(".index-slider-items .index-slider-item").eq(0).clone().appendTo($(carusel).find(".index-slider-items")); 
            $(carusel).find(".index-slider-items .index-slider-item").eq(0).remove(); 
            $(carusel).find(".index-slider-items").css({"left":"0px"}); 
         }); 
      }



       $(document).on('click', ".place-arrow-right",function(){ 
         var carusel = $(this).parents('.place-slider');
         right_carusel_about(carusel);
         return false;
      });

      $(document).on('click',".place-arrow-left", function(){ 
         var carusel = $(this).parents('.place-slider');
         left_carusel_about(carusel);
         return false;
      });

      function left_carusel_about(carusel){
         var block_width = $(carusel).find('.place-slider-item').outerWidth();
         $(carusel).find(".place-slider-items .place-slider-item").eq(-1).clone().prependTo($(carusel).find(".place-slider-items")); 
         $(carusel).find(".place-slider-items").css({"left":"-"+block_width+"px"});
         $(carusel).find(".place-slider-items .place-slider-item").eq(-1).remove();    
         $(carusel).find(".place-slider-items").animate({left: "0px"}, 500); 
      }

      function right_carusel_about(carusel){
         var block_width = $(carusel).find('.place-slider-item').outerWidth();
         $(carusel).find(".place-slider-items").animate({left: "-"+ block_width +"px"}, 540, function(){
           $(carusel).find(".place-slider-items .place-slider-item").eq(0).clone().appendTo($(carusel).find(".place-slider-items")); 
            $(carusel).find(".place-slider-items .place-slider-item").eq(0).remove(); 
            $(carusel).find(".place-slider-items").css({"left":"0px"}); 
         }); 
      }
})
