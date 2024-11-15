'use strict'

/**
 * Slider
 * Pagina usada: https://bxslider.com/examples/image-slideshow-captions
 */
$(document).ready(function(){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        responsive: true,
        pager:true
      });
});