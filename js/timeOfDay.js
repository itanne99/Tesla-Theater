function getDayTime(times) {
    if (new Date().getHours() > times.sunset.getHours() || new Date().getHours() < times.sunrise.getHours())
        return "dark-theme";
    else
        return "light-theme";
}

$(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let times = SunCalc.getTimes(new Date(), lat, long)
        let tod = getDayTime(times)
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
});