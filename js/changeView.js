$(document).ready(function($) {
    let ww = document.body.clientWidth;
    if (ww<1201){
        $("#mainView").removeClass('vh-100')
    } else {
        $("#mainView").addClass('vh-100')
    }
});