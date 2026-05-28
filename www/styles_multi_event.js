console.info(
    '%c  ANIMATED-BACKGROUNDS  %c  version 1.1  %c  by dreimer1986 (Optimized) ',
             'color: orange; font-weight: bold; background: black',
             'color: white; font-weight: bold; background: dimgray',
             'color: white; font-weight: bold; background: rgb(71, 170, 238)',
);

// Stuff you must set up for your own setup
const weatherEntity_ = "weather.forecast_home";
const videoPath_ = "/local/animated_backgrounds";
// const videoPath_ = "https://cdn.flixel.com/flixel"; // Warning!! Below change the video.type back to "video/mp4"
const weatherControl_ = false;
const videoSwitchPeriod_ = 180;

// Video file names inside the folder above that will be randomly used as backgrounds
const filesRandom = ['1.webm', '2.webm', '3.webm', '4.webm', '5.webm', '6.webm', '7.webm', '8.webm', '9.webm', '10.webm', '11.webm', '12.webm', '13.webm', '14.webm', '15.webm', '16.webm', '17.webm', '18.webm', '19.webm', '20.webm', '21.webm', '22.webm', '23.webm', '24.webm', '25.webm', '26.webm', '27.webm', '28.webm', '29.webm', '30.webm', '31.webm', '32.webm', '33.webm', '34.webm', '35.webm', '36.webm', '37.webm', '38.webm', '39.webm', '40.webm', '41.webm', '42.webm', '43.webm', '44.webm', '45.webm', '46.webm', '47.webm', '48.webm', '49.webm', '50.webm', '51.webm', '52.webm', '53.webm', '54.webm', '55.webm', '56.webm', '57.webm', '58.webm', '59.webm', '60.webm', '61.webm', '62.webm', '63.webm', '64.webm', '65.webm', '66.webm', '67.webm', '68.webm', '69.webm', '70.webm', '71.webm', '72.webm', '73.webm', '74.webm', '75.webm', '76.webm', '77.webm', '78.webm', '79.webm', '80.webm', '81.webm', '82.webm', '83.webm'];

// Video file names used from flixel just like Villhellm's addin did
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

// Settings for forcing specific devices into single frame static image mode
const slowDeviceUserAgent = "Kindle";
const lowPowerMode = false;

// Settings for forcing specific backgrounds on specific pages
const _WallboxPageName = "wallbox";
const _CamPageName = "cam";
const _DevToolsPageName = "developer-tools";
const _SettingsPageName = "config";
const wallboxPage = ['ch1.webm', 'ch2.webm'];
const devtoolsPage = ['16500-273202599.webm'];
const settingsPage = ['136511-764417302.webm', '9846-221477041.webm', '32742-393990266.webm', '55389-500762756.webm', '16189-269541588.webm'];

let _WallboxPageNameBefore = window.location.pathname.includes(_WallboxPageName);
let _CamPageNameBefore = window.location.pathname.includes(_CamPageName);
let _DevToolsPageNameBefore = window.location.pathname.includes(_DevToolsPageName);
let _SettingsPageNameBefore = window.location.pathname.includes(_SettingsPageName);
let eventPage = false;
let weather_ = "unknown";

// Create video element safely
const video = document.createElement('video');
video.id = "myAnimatedBackground";
video.loop = true;
video.muted = true;
video.playsInline = true;
video.type = "video/webm";

// --- GANZ WICHTIG: Wetter direkt aus dem Frontend laden, kein API Token nötig! ---
function getWeatherState() {
    const ha = document.querySelector('home-assistant');
    if (ha && ha.hass && ha.hass.states[weatherEntity_]) {
        return ha.hass.states[weatherEntity_].state;
    }
    return "unknown"; // Fallback, falls HA noch nicht ganz geladen ist
}

// Which file list will it be?
function giveRightFiles() {
    if (weatherControl_ === true) {
        video.autoplay = true;
        eventPage = false;
        if (weather_ === "clear-night") return filesClearnight;
        else if (weather_ === "cloudy") return filesCloudy;
        else if (weather_ === "fog") return filesFog;
        else if (weather_ === "hail") return filesHail;
        else if (weather_ === "lightning") return filesLightning;
        else if (weather_ === "lightning-rainy") return filesLightningRainy;
        else if (weather_ === "partlycloudy") return filesPartlyCloudy;
        else if (weather_ === "pouring") return filesPouring;
        else if (weather_ === "rainy") return filesRainy;
        else if (weather_ === "snowy") return filesSnowy;
        else if (weather_ === "snowy-rainy") return filesSnowyRainy;
        else if (weather_ === "sunny") return filesSunny;
        else if (weather_ === "windy") return filesWindy;
        else if (weather_ === "windy-variant") return filesWindyVariant;
        else if (weather_ === "exceptional") return filesExceptional;
        else return filesRandom;
    } else if (window.location.pathname.includes(_CamPageName)) {
        video.autoplay = false;
        eventPage = true;
        return filesRandom;
    } else if (window.location.pathname.includes(_WallboxPageName)) {
        video.autoplay = true;
        eventPage = false;
        return wallboxPage;
    } else if (window.location.pathname.includes(_DevToolsPageName)) {
        video.autoplay = true;
        eventPage = false;
        return devtoolsPage;
    } else if (window.location.pathname.includes(_SettingsPageName)) {
        video.autoplay = true;
        eventPage = false;
        return settingsPage;
    } else {
        video.autoplay = true;
        eventPage = false;
        return filesRandom;
    }
}

// Update-Funktion ausgelagert
function updateVideoSource() {
    weather_ = getWeatherState();
    const fileList_ = giveRightFiles();
    const i = Math.floor(Math.random() * fileList_.length);

    // Verhindert Flackern, falls das Video gleich bleibt
    const newSrc = videoPath_ + "/" + fileList_[i];
    if (!video.src.endsWith(newSrc)) {
        video.src = newSrc;
    }

    if ((navigator.userAgent).includes(slowDeviceUserAgent) || (lowPowerMode === true && eventPage === true)) {
        video.autoplay = false;
        video.pause();
    } else {
        video.autoplay = true;
        video.play().catch(e => console.warn("Background Video Autoplay blocked:", e));
    }
}

// Sichere Initialisierung
function init() {
    updateVideoSource();
    // Video ganz unten in den Body einhängen
    document.body.insertBefore(video, document.body.firstChild);

    // Timer für Video-Wechsel
    setInterval(() => {
        updateVideoSource();
        _WallboxPageNameBefore = window.location.pathname.includes(_WallboxPageName);
        _CamPageNameBefore = window.location.pathname.includes(_CamPageName);
        _DevToolsPageNameBefore = window.location.pathname.includes(_DevToolsPageName);
        _SettingsPageNameBefore = window.location.pathname.includes(_SettingsPageName);
    }, videoSwitchPeriod_ * 1000);

    // Event handler für Seitenwechsel
    window.setInterval(function() {
        if (
            window.location.pathname.includes(_WallboxPageName) !== _WallboxPageNameBefore ||
            window.location.pathname.includes(_CamPageName) !== _CamPageNameBefore ||
            window.location.pathname.includes(_DevToolsPageName) !== _DevToolsPageNameBefore ||
            window.location.pathname.includes(_SettingsPageName) !== _SettingsPageNameBefore
        ) {
            updateVideoSource();
            _WallboxPageNameBefore = window.location.pathname.includes(_WallboxPageName);
            _CamPageNameBefore = window.location.pathname.includes(_CamPageName);
            _DevToolsPageNameBefore = window.location.pathname.includes(_DevToolsPageName);
            _SettingsPageNameBefore = window.location.pathname.includes(_SettingsPageName);
        }
    }, 1000);

    // Sichere CSS Injektion per Array-Spread
    const sheet = new CSSStyleSheet();
    // Wichtig: z-index: -1 und pointer-events: none hinzugefügt
    sheet.replaceSync(`
    #myAnimatedBackground {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    pointer-events: none;
    }
    .content {
        position: fixed;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        color: #f1f1f1;
        width: 100%;
        padding: 20px;
    }
    `);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}

// Ausführen, wenn das Skript geladen wird
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
