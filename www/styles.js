console.info(
  `%c  ANIMATED-BACKGROUNDS  %c  version 1.0  %c  by dreimer1986  `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
  'color: white; font-weight: bold; background: rgb(71, 170, 238)',
);

// Stuff you must set up for your own setup
const token_ = "YOURAPIKEY";
const weatherEntity_ = "weather.home";
const videoPath_ = "/local/animated_backgrounds";
// const videoPath_ = "https://cdn.flixel.com/flixel";
const weatherControl_ = false;
const videoSwitchPeriod_ = 180;

const filesRandom = ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4', '7.mp4', '8.mp4', '9.mp4', '10.mp4', '11.mp4', '12.mp4', '13.mp4', '14.mp4', '15.mp4', '16.mp4', '17.mp4', '18.mp4', '19.mp4', '20.mp4', '21.mp4', '22.mp4', '23.mp4', '24.mp4', '25.mp4', '26.mp4', '27.mp4', '28.mp4', '29.mp4', '30.mp4', '31.mp4', '32.mp4', '33.mp4', '34.mp4', '35.mp4', '36.mp4', '37.mp4', '38.mp4', '39.mp4', '40.mp4', '41.mp4', '42.mp4', '43.mp4', '44.mp4', '45.mp4', '46.mp4', '47.mp4', '48.mp4', '49.mp4', '50.mp4', '51.mp4', '52.mp4', '53.mp4', '54.mp4', '55.mp4', '56.mp4', '57.mp4', '58.mp4', '59.mp4', '60.mp4', '61.mp4', '62.mp4'];

const filesClearnight = ['x9dr8caygivq5secll7i.hd.mp4', 'v26zyfd6yf0r33s46vpe.hd.mp4', 'ypy8bw9fgw1zv2b4htp2.hd.mp4', 'rosz2gi676xhkiw1ut6i.hd.mp4', 'x5rxll400y2um2xe677c.hd.mp4'];
const filesCloudy = ['e95h5cqyvhnrk4ytqt4q.hd.mp4', 'l2bjw34wnusyf5q2qq3p.hd.mp4', 'rrgta099ulami3zb9fd2.hd.mp4'];
const filesFog = ['vwqzlk4turo2449be9uf.hd.mp4', '5363uhabodwwrzgnq6vx.hd.mp4', '4dbfz329lqn0gzxft14l.hd.mp4', 'surn8g651ok6j0hx43sy.hd.mp4', '1xgcgyb68b15ysz30gw9.hd.mp4', 'vabb5tnx2psqf1221ue9.hd.mp4'];
const filesHail = ['Hail1.mp4', 'Hail2.mp4', 'Hail3.mp4'];
const filesLightning = ['sbk5sc03j7vay52r3e4o.hd.mp4', 'chrgj6raf5q3s6y2so7z.hd.mp4'];
const filesLightningRainy = ['sbk5sc03j7vay52r3e4o.hd.mp4', 'chrgj6raf5q3s6y2so7z.hd.mp4'];
const filesPartlyCloudy = ['13e0s6coh6ayapvdyqnv.hd.mp4', 'aorl3skmssy7udwopk22.hd.mp4', 'qed6wvf2igukiioykg3r.hd.mp4', '3rd72eezaj6d23ahlo7y.hd.mp4', '9m11gd43m6qn3y93ntzp.hd.mp4', 'hrkw2m8eofib9sk7t1v2.hd.mp4'];
const filesPouring = ['qti3s5st0srowd9krhcw.hd.mp4', 'f0w23bd0enxur5ff0bxz.hd.mp4', '2qmg1xgcswq79lxu09rl.hd.mp4', 'guwb10mfddctfvwioaex.hd.mp4', '5y73ml3xqz6drbuzja1e.hd.mp4'];
const filesRainy = ['qti3s5st0srowd9krhcw.hd.mp4', 'f0w23bd0enxur5ff0bxz.hd.mp4', '2qmg1xgcswq79lxu09rl.hd.mp4', 'guwb10mfddctfvwioaex.hd.mp4', '5y73ml3xqz6drbuzja1e.hd.mp4'];
const filesSnowy = ['on3ysblo5hzdmrhv1kwh.hd.mp4', 'psi1hhbsshcus8eumtr7.hd.mp4', 'ndza6yswd0k6vlboxyhk.hd.mp4'];
const filesSnowyRainy = ['on3ysblo5hzdmrhv1kwh.hd.mp4', 'psi1hhbsshcus8eumtr7.hd.mp4', 'ndza6yswd0k6vlboxyhk.hd.mp4'];
const filesSunny = ['hlhff0h8md4ev0kju5be.hd.mp4', 'zjqsoc6ecqhntpl5vacs.hd.mp4', 'jvw1avupguhfbo11betq.hd.mp4', '8cmeusxf3pkanai43djs.hd.mp4', 'guwb10mfddctfvwioaex.hd.mp4'];
const filesWindy = ['2qmg1xgcswq79lxu09rl.hd.mp4', 'guwb10mfddctfvwioaex.hd.mp4', '5y73ml3xqz6drbuzja1e.hd.mp4'];
const filesWindyVariant = ['2qmg1xgcswq79lxu09rl.hd.mp4', 'guwb10mfddctfvwioaex.hd.mp4', '5y73ml3xqz6drbuzja1e.hd.mp4'];
const filesExceptional = ['Exception1.mp4', 'Exception2.mp4', 'Exception3.mp4'];

const filesWallbox = ['ch1.mp4', 'ch2.mp4'];

var sitenameBefore = window.location.pathname.includes("wallbox");

// Get entity state off HA for some tinkerin'
async function callWebApi() {
    const headers = new Headers({Authorization: "Bearer " + token_});
    const result = await fetch(window.location.origin+"/api/states/"+weatherEntity_, {method: "GET", headers: headers});
    return result.json();
}

var weather_ = (await callWebApi()).state;
// console.log(weather_);

// Which file list will it be?
function giveRightFiles() {
    if (weatherControl_ == true) {
        if (weather_ == "clear-night") return filesClearnight;
        else if (weather_ == "cloudy") return filesCloudy;
        else if (weather_ == "fog") return filesFog;
        else if (weather_ == "hail") return filesHail;
        else if (weather_ == "lightning") return filesLightning;
        else if (weather_ == "lightning-rainy") return filesLightningRainy;
        else if (weather_ == "partlycloudy") return filesPartlyCloudy;
        else if (weather_ == "pouring") return filesPouring;
        else if (weather_ == "rainy") return filesRainy;
        else if (weather_ == "snowy") return filesSnowy;
        else if (weather_ == "snowy-rainy") return filesSnowyRainy;
        else if (weather_ == "sunny") return filesSunny;
        else if (weather_ == "windy") return filesWindy;
        else if (weather_ == "windy-variant") return filesWindyVariant;
        else if (weather_ == "exceptional") return filesExceptional;
    } else if (window.location.pathname.includes("wallbox")) {
        //video.autoplay = false;
        return filesWallbox;
    } else {
        return filesRandom;
    }
}

var fileList_ = giveRightFiles();
// console.log(fileList_);

// Transparent Sidebar fix by Bram Kragten
document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer").shadowRoot.querySelector(".mdc-drawer").style.setProperty("--mdc-theme-surface", "transparent");

// Randomizer
const i = Math.floor(Math.random()*fileList_.length);

// Create video element
const video = document.createElement('video');
video.autoplay = true;
video.id = "myVideo";
video.loop = true;
video.muted = true;
video.playsInline = true;
video.src = videoPath_+"/"+fileList_[i];
video.type = "video/mp4";

// Insert video background
document.querySelector("body").insertBefore(video, document.querySelector("body").firstChild);

// After a specific time has passed, change the video. Check the weather sensor, too.
async function videoUpdateXSec() {
    weather_ = (await callWebApi()).state;
    fileList_ = giveRightFiles();
    const i = Math.floor(Math.random()*fileList_.length);
    video.src = videoPath_+"/"+fileList_[i];
    sitenameBefore = window.location.pathname.includes("wallbox");
}
setInterval(videoUpdateXSec, videoSwitchPeriod_*1000);

window.setInterval(function() {
    if (window.location.pathname.includes("wallbox") != sitenameBefore) {
        console.log("Page Event triggered");
        //video.autoplay = false;
        videoUpdateXSec();
        sitenameBefore = window.location.pathname.includes("wallbox");
    }
}, 1000);
