/*=== Tooltip ===*/
(function( $ ){
    $.fn.simpleTooltip = function(options) {

        options = $.extend({
            class: 'tooltip'

        }, options);

        $(this).each(function (i) {
            $("body").stop(true, true).append("<div class='" + options.class + "' id='" + options.class + i + "'>" + $(this).attr('title') + "</div>");
            var tooltips = $("#" + options.class + i);
            if ($(this).attr("title") != "" && $(this).attr("title") != "undefined") {
                $(this).removeAttr("title").mouseover(function () {
                    tooltips.css({
                        opacity: 0.9,
                        display: "none"
                    }).stop(true, true).fadeIn(300);
                }).mousemove(function (kmouse) {
                    var bw = $("html,body").width();
                    if ((bw / 2) < kmouse.pageX) {
                        tooltips.css({
                            left: kmouse.pageX - 15 - tooltips.width(),
                            top: kmouse.pageY + 15
                        });
                    } else {
                        tooltips.css({
                            left: kmouse.pageX + 15,
                            top: kmouse.pageY + 15
                        });
                    }
                }).mouseout(function () {
                    tooltips.stop(true, true).fadeOut(100);
                });
            }
        });

    };
})(jQuery);