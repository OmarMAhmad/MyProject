$(function () {
    
    "use strict";

    // Adjust Header Height

    var mySlider = $('.bxslider');

    // Adjust Bxslider List Item Center

    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });

    // Trigger The Bx Slider

    mySlider.bxSlider({
        pager: false
    });

});