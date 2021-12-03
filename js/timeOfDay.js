function getDayTime(hours) {
    if (hours > 20 || hours < 8)
        return "dark-theme";

    if (hours > 8)
        return "light-theme";
}

$(function() {
    document.body.className = getDayTime(new Date().getHours());
});