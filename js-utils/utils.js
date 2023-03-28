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
