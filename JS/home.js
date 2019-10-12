$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
})

var touchSensitivity = 5;
$(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > touchSensitivity) {
            $(this).carousel('next');
        } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});

(function ($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function () {
        $('.carousel').carousel('next');
        return false;
    });
    $('.prev').click(function () {
        $('.carousel').carousel('prev');
        return false;
    });

})(jQuery);

function mySubmit() {
    alert("Thank you for your feedback! We're always improving.");
}