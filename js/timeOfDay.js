function getDayTime(hours) {
    if (hours > 18 || hours < 8)
        return "dark-theme";
    else
        return "light-theme";
}

$(function() {
    let tod = getDayTime(new Date().getHours())
    document.body.className = tod;
    document.getElementById("HBO").src = "imgs/"+tod+"/HBO Max.png";
    document.getElementById("YouTubeTV").src = "imgs/"+tod+"/YouTubeTV.png";
    document.getElementById("Hulu").src = "imgs/"+tod+"/Hulu.png";
    document.getElementById("Netflix").src = "imgs/"+tod+"/Netflix.png";
    document.getElementById("Youtube").src = "imgs/"+tod+"/Youtube.png";
    document.getElementById("Disney+").src = "imgs/"+tod+"/Disney+.png";
    document.getElementById("Plex").src = "imgs/"+tod+"/Plex.png";
    document.getElementById("Twitch").src = "imgs/"+tod+"/Twitch.png";
});