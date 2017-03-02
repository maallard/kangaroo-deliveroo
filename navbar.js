$(document).ready(function() {

    $(document).scroll(function() {
        if ($(window).scrollTop() > 150) {
            $('#navbar').addClass('inversed-colors');
        } else {
            $('#navbar').removeClass('inversed-colors');
        }
    });

});
