// Stuff you must set up for your own setup
const token_ = "CENSORED";
const haURL_ = "https://CENSORED.de";
const weatherEntity_ = "weather.home";
const videoPath_ = "/local/animated_backgrounds";
const weatherControl_ = false;

const filesRandom = ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4', '7.mp4', '8.mp4', '9.mp4', '10.mp4', '11.mp4', '12.mp4', '13.mp4', '14.mp4', '15.mp4', '16.mp4', '17.mp4', '18.mp4', '19.mp4', '20.mp4', '21.mp4', '22.mp4', '23.mp4', '24.mp4', '25.mp4', '26.mp4', '27.mp4', '28.mp4', '29.mp4', '30.mp4', '31.mp4', '32.mp4', '33.mp4', '34.mp4', '35.mp4', '36.mp4', '37.mp4', '38.mp4', '39.mp4', '40.mp4', '41.mp4', '42.mp4', '43.mp4', '44.mp4', '45.mp4', '46.mp4', '47.mp4', '48.mp4', '49.mp4', '50.mp4', '51.mp4', '52.mp4', '53.mp4', '54.mp4', '55.mp4', '56.mp4', '57.mp4', '58.mp4', '59.mp4', '60.mp4', '61.mp4', '62.mp4'];

const filesClearnight = ['Clearnight1.mp4', 'Clearnight2.mp4', 'Clearnight3.mp4'];
const filesCloudy = ['Cloudy1.mp4', 'Cloudy2.mp4', 'Cloudy3.mp4'];
const filesFog = ['Fog1.mp4', 'Fog2.mp4', 'Fog3.mp4'];
const filesHail = ['Hail1.mp4', 'Hail2.mp4', 'Hail3.mp4'];
const filesLightning = ['Lightning1.mp4', 'Lightning2.mp4', 'Lightning3.mp4'];
const filesLightningRainy = ['LRainy1.mp4', 'LRainy2.mp4', 'LRainy3.mp4'];
const filesPartlyCloudy = ['PCloudy1.mp4', 'PCloudy2.mp4', 'PCloudy3.mp4'];
const filesPouring = ['Pouring1.mp4', 'Pouring2.mp4', 'Pouring3.mp4'];
const filesRainy = ['Rainy1.mp4', 'Rainy2.mp4', 'Rainy3.mp4'];
const filesSnowy = ['Snowy1.mp4', 'Snowy2.mp4', 'Snowy3.mp4'];
const filesSnowyRainy = ['SRainy1.mp4', 'SRainy2.mp4', 'SRainy3.mp4'];
const filesSunny = ['Sunny1.mp4', 'Sunny2.mp4', 'Sunny3.mp4'];
const filesWindy = ['Windy1.mp4', 'Windy2.mp4', 'Windy3.mp4'];
const filesWindyVariant = ['Variant1.mp4', 'Variant2.mp4', 'Variant3.mp4'];
const filesExceptional = ['Exception1.mp4', 'Exception2.mp4', 'Exception3.mp4'];

// Get entity state off HA for some tinkerin'
async function callWebApi() {
    const headers = new Headers({Authorization: "Bearer " + token_});
    const result = await fetch(haURL_+"/api/states/"+weatherEntity_, {method: "GET", headers: headers});
    return result.json();
}

const weather_ = await callWebApi();
console.log(weather_.state);

// Which file list will it be?
function giveRightFiles() {
    if (weatherControl_ == true) {
        if (weather_.state == "clearnight") return filesClearnight;
        else if (weather_.state == "cloudy") return filesCloudy;
        else if (weather_.state == "fog") return filesFog;
        else if (weather_.state == "hail") return filesHail;
        else if (weather_.state == "lightning") return filesLightning;
        else if (weather_.state == "lightningrainy") return filesLightningRainy;
        else if (weather_.state == "partlycloudy") return filesPartlyCloudy;
        else if (weather_.state == "pouring") return filesPouring;
        else if (weather_.state == "rainy") return filesRainy;
        else if (weather_.state == "snowy") return filesSnowy;
        else if (weather_.state == "snowyrainy") return filesSnowyRainy;
        else if (weather_.state == "sunny") return filesSunny;
        else if (weather_.state == "windy") return filesWindy;
        else if (weather_.state == "windyvariant") return filesWindyVariant;
        else if (weather_.state == "exceptional") return filesExceptional;
    } else {
        return filesRandom;
    }
}

const fileList_ = giveRightFiles();
console.log(fileList_);

// Transparent Sidebar fix by Bram Kragten
document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer").shadowRoot.querySelector(".mdc-drawer").style.setProperty("--mdc-theme-surface", "transparent");

// Randomizer
const i = Math.floor(Math.random()*fileList_.length);

//Create video element
const video = document.createElement('video');
video.autoplay = true;
video.loop = true;
video.muted = true;
video.id = "myVideo";
video.src = videoPath_+"/"+fileList_[i];
video.type = "video/mp4";

// Insert video background
document.querySelector("body").insertBefore(video, document.querySelector("body").firstChild);
