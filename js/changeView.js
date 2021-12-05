$(document).ready(function($) {
    let ww = document.body.clientWidth;
    if (ww<992){
        $("#mainView").removeClass('vh-100')
    } else {
        $("#mainView").addClass('vh-100')
    }
});