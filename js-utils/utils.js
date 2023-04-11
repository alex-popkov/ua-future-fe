function copyToClipboard(id) {
    let $temp = $('<input>');
    let element = document.getElementById(id);
    $('body').append($temp);
    $temp.val($(element).text()).select();
    document.execCommand('copy');
    $temp.remove();
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//teammate scrolling
$(document).ready(function() {
    var scrolled = 0;
    var duration = 500;
    var teammates = $("#teammates");
    var scrollNav = $("#ua-scroll-nav");
    var teammatesOffsetWidth = teammates.width();
    var teammatesScrollWidth = teammates[0].scrollWidth;
    var buffer = teammatesScrollWidth - teammatesOffsetWidth;

    var changeScrollNavVisibilityState = function (widthBuffer, navElement){
        if (widthBuffer === 0) {
            navElement.hide();
        } else {
            navElement.show();
        }
    }

    changeScrollNavVisibilityState(buffer, scrollNav);

    $(window).resize(function() {
        teammatesOffsetWidth = teammates.width();
        teammatesScrollWidth = teammates[0].scrollWidth;
        buffer = teammatesScrollWidth - teammatesOffsetWidth;
        changeScrollNavVisibilityState(buffer, scrollNav);
    });

    $("#ua-scroll-next").click(function() {
        if (scrolled <= buffer) {
            scrolled = scrolled + 138;
            teammates.animate({
                scrollLeft: scrolled
            }, duration);
        }
    });
    $("#ua-scroll-prev").click(function() {
        if (scrolled > 0) {
            scrolled = scrolled - 138;
            teammates.animate({
                scrollLeft: scrolled
            }, duration);
        }
    });
});

