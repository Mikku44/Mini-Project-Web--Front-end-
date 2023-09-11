{var video = document.getElementById("playback");
var btn = document.getElementById("btn");
function myFunction() {
    if (video.paused) {
        video.play();
        document.getElementById("imgbtn").src = "picture/motion_photos_paused_white_24dp.svg";
    } else {
        video.pause();
        document.getElementById("imgbtn").src = "picture/play_circle_black_24dp.svg";
    }
}}
window.addEventListener("load", function () {

    if (screen.width <= 700 || window.height <= 700) {
        document.getElementById('home').innerHTML = "<img src='picture/home_black_24dp.svg'>";
        document.getElementById('sys').innerHTML = "<img src='picture/dns_black_24dp.svg'>";
        document.getElementById('con').innerHTML = "<img src='picture/alternate_email_black_24dp.svg'>";
        document.getElementById('over').innerHTML = "<img src='picture/pageview_black_24dp.svg'>";
        document.getElementById('about').innerHTML = "<img src='picture/badge_black_24dp.svg'>";
        document.getElementById('services').innerHTML = "<img src='picture/support_agent_black_24dp.svg'>";
    }
});
