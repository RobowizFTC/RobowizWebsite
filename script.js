// $(window).load(function(){$(function() {
//     // Stick the #nav to the top of the window
//     var nav = $('#nav');
//     var navHomeY = top;
//     var isFixed = false;
//     var $w = $(window);
//     $w.scroll(function() {
//         var scrollTop = $w.scrollTop();
//         var shouldBeFixed = scrollTop > navHomeY;
//         if (shouldBeFixed && !isFixed) {
//             nav.css({
//                 position: 'fixed',
//                 top: 0,
//                 left: nav.offset().left,
//                 width: nav.width()
//             });
//             isFixed = true;
//         }
//         else if (!shouldBeFixed && isFixed)
//         {
//             nav.css({
//                 position: 'static'
//             });
//             isFixed = false;
//         }
//     });
// });
// });  


function scrollToId(id, speed, callback) {
    scrollToNumber($(id).offset().top, speed, callback);
}

function scrollToNumber(number, speed, callback) {
    $("html, body").animate({
        scrollTop: number
    }, speed, function() {
        if(callback !== undefined) {
            callback();
        }
    });
}

$('body').height($(window).height());
        
$(document).ready(function() {
    var scrollingSpeed = 600;

    // $(window).bind('resize', set_thing_height);
    // set_height();

    // SiteHeaderNav Links
    $("#nav a").click(function(e) {
        e.preventDefault();
        scrollToId($(this).attr("href"), scrollingSpeed);
    });

    $("#main-carousel").slick();

    $(".members > li > div").click(function() {
        var that = this;
        $(".more-info > div").slideUp(200);
        setTimeout(function() {
            $(".more-info > div[data-name=" + $(that).attr("id") + "]").slideDown(200);
        }, 200);
    });

    $(".more-info .x").click(function() {
        $(".more-info > div").slideUp(200);
    });
});