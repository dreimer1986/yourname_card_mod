//Transparent background of Main-Section
document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("#view > hui-view").style.setProperty("background", "transparent");

const max = 62;
const min = 1;

const counter = Math.floor(Math.random() * (max - min + 1) + min);

const video = document.createElement('video');
video.autoplay = true;
video.loop = true;
video.muted = true;
video.id = "myVideo";
video.innerHTML = `<source src="/local/animated_backgrounds/`+counter+`.mp4" type="video/mp4">`;

document.querySelector("body").insertBefore(video, document.querySelector("body").firstChild);
