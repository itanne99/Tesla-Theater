$(document).ready(function($) {
    let ww = document.body.clientWidth;
    if (ww<1111){
        $("#mainView").removeClass('vh-100')
    } else {
        $("#mainView").addClass('vh-100')
    }
});