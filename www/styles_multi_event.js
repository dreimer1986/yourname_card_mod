console.info(
    '%c  ANIMATED-BACKGROUNDS  %c  version 1.2 (Advanced)  %c  by dreimer1986 ',
             'color: orange; font-weight: bold; background: black',
             'color: white; font-weight: bold; background: dimgray',
             'color: white; font-weight: bold; background: rgb(71, 170, 238)',
);

// ==========================================
// CONFIGURATION
// ==========================================
const weatherEntity_ = "weather.forecast_home";
const localVideoPath_ = "/local/animated_backgrounds";
const flixelVideoPath_ = "https://cdn.flixel.com/flixel";

// Default settings (Used if Helpers are empty or unavailable)
let weatherControl_ = true;
let videoSwitchPeriod_ = 180;

// OPTIONAL: Home Assistant Helpers
// Leave empty ("") if you don't want to use them.
const weatherControlHelper_ = ""; // e.g. "input_boolean.background_weather_control"
const videoSwitchPeriodHelper_ = ""; // e.g. "input_number.background_switch_period"

// Settings for forcing specific devices into single frame static image mode
const slowDeviceUserAgent = "Kindle";
const lowPowerMode = false;

// ==========================================
// FILE LISTS
// ==========================================
const filesRandom = ['1.webm', '2.webm', '3.webm', '4.webm', '5.webm', '6.webm', '7.webm', '8.webm', '9.webm', '10.webm', '11.webm', '12.webm', '13.webm', '14.webm', '15.webm', '16.webm', '17.webm', '18.webm', '19.webm', '20.webm', '21.webm', '22.webm', '23.webm', '24.webm', '25.webm', '26.webm', '27.webm', '28.webm', '29.webm', '30.webm', '31.webm', '32.webm', '33.webm', '34.webm', '35.webm', '36.webm', '37.webm', '38.webm', '39.webm', '40.webm', '41.webm', '42.webm', '43.webm', '44.webm', '45.webm', '46.webm', '47.webm', '48.webm', '49.webm', '50.webm', '51.webm', '52.webm', '53.webm', '54.webm', '55.webm', '56.webm', '57.webm', '58.webm', '59.webm', '60.webm', '61.webm', '62.webm', '63.webm', '64.webm', '65.webm', '66.webm', '67.webm', '68.webm', '69.webm', '70.webm', '71.webm', '72.webm', '73.webm', '74.webm', '75.webm', '76.webm', '77.webm', '78.webm', '79.webm', '80.webm', '81.webm', '82.webm', '83.webm'];

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

// ==========================================
// PAGE SPECIFIC SETTINGS
// ==========================================
const _WallboxPageName = "wallbox";
const _CamPageName = "cam";
const _DevToolsPageName = "developer-tools";
const _SettingsPageName = "config";

const wallboxPage = ['ch1.webm', 'ch2.webm'];
const devtoolsPage = ['16500-273202599.webm'];
const settingsPage = ['136511-764417302.webm', '9846-221477041.webm', '32742-393990266.webm', '55389-500762756.webm', '16189-269541588.webm'];

// ==========================================
// RUNTIME VARIABLES
// ==========================================
let _WallboxPageNameBefore = window.location.pathname.includes(_WallboxPageName);
let _CamPageNameBefore = window.location.pathname.includes(_CamPageName);
let _DevToolsPageNameBefore = window.location.pathname.includes(_DevToolsPageName);
let _SettingsPageNameBefore = window.location.pathname.includes(_SettingsPageName);

let eventPage = false;
let currentIntervalId = null;
let currentSwitchPeriod = videoSwitchPeriod_;

const delay = ms => new Promise(res => setTimeout(res, ms));

// Create video element safely
const video = document.createElement('video');
video.id = "myAnimatedBackground";
video.loop = true;
video.muted = true;
video.playsInline = true;

// Helper to get Home Assistant DOM object
function getHass() {
    const ha = document.querySelector('home-assistant');
    if (ha && ha.hass) return ha.hass;
    const main = document.querySelector('home-assistant-main');
    if (main && main.hass) return main.hass;
    return null;
}

// Robust Weather Fetcher (Retries up to 5 times to bypass HA load lag)
async function fetchWeatherRobustly() {
    for (let i = 0; i < 5; i++) {
        const hass = getHass();
        if (hass && hass.states) {
            // Update Helpers if configured
            if (weatherControlHelper_ !== "" && hass.states[weatherControlHelper_]) {
                weatherControl_ = (hass.states[weatherControlHelper_].state === "on");
            }
            if (videoSwitchPeriodHelper_ !== "" && hass.states[videoSwitchPeriodHelper_]) {
                const val = parseInt(hass.states[videoSwitchPeriodHelper_].state);
                if (!isNaN(val) && val > 0) {
                    videoSwitchPeriod_ = val;
                }
            }

            // Fetch Weather
            if (hass.states[weatherEntity_]) {
                const state = hass.states[weatherEntity_].state;
                if (state !== "unknown" && state !== "unavailable") {
                    return state;
                }
            }
        }
        await delay(500); // Wait 500ms before checking again
    }
    return "unknown"; // Fallback after 2.5 seconds of failing
}

// Determine Path, Type and Array cleanly based on conditions
function getVideoConfig(weatherState) {
    let config = {
        path: localVideoPath_,
        type: "video/webm",
        files: filesRandom,
        autoplay: true
    };
    eventPage = false;

    // 1. Page Specific Overrides (Highest Priority)
    if (window.location.pathname.includes(_CamPageName)) {
        config.autoplay = false;
        eventPage = true;
        return config;
    } else if (window.location.pathname.includes(_WallboxPageName)) {
        config.files = wallboxPage;
        return config;
    } else if (window.location.pathname.includes(_DevToolsPageName)) {
        config.files = devtoolsPage;
        return config;
    } else if (window.location.pathname.includes(_SettingsPageName)) {
        config.files = settingsPage;
        return config;
    }

    // 2. Weather Logic
    if (weatherControl_ === true) {
        config.path = flixelVideoPath_;
        config.type = "video/mp4";

        switch(weatherState) {
            case "clear-night": config.files = filesClearnight; break;
            case "cloudy": config.files = filesCloudy; break;
            case "fog": config.files = filesFog; break;
            case "hail": config.files = filesHail; break;
            case "lightning": config.files = filesLightning; break;
            case "lightning-rainy": config.files = filesLightningRainy; break;
            case "partlycloudy": config.files = filesPartlyCloudy; break;
            case "pouring": config.files = filesPouring; break;
            case "rainy": config.files = filesRainy; break;
            case "snowy": config.files = filesSnowy; break;
            case "snowy-rainy": config.files = filesSnowyRainy; break;
            case "sunny": config.files = filesSunny; break;
            case "windy": config.files = filesWindy; break;
            case "windy-variant": config.files = filesWindyVariant; break;
            case "exceptional": config.files = filesExceptional; break;
            default:
                // FALLBACK: If weather is unknown, revert completely to local random!
                config.path = localVideoPath_;
                config.type = "video/webm";
                config.files = filesRandom;
        }
    }

    return config;
}

// Helper function to check if the page has changed
function checkPageChange() {
    const currentWallbox = window.location.pathname.includes(_WallboxPageName);
    const currentCam = window.location.pathname.includes(_CamPageName);
    const currentDevTools = window.location.pathname.includes(_DevToolsPageName);
    const currentSettings = window.location.pathname.includes(_SettingsPageName);

    if (currentWallbox !== _WallboxPageNameBefore ||
        currentCam !== _CamPageNameBefore ||
        currentDevTools !== _DevToolsPageNameBefore ||
        currentSettings !== _SettingsPageNameBefore) {

        _WallboxPageNameBefore = currentWallbox;
    _CamPageNameBefore = currentCam;
    _DevToolsPageNameBefore = currentDevTools;
    _SettingsPageNameBefore = currentSettings;
    return true;
        }
        return false;
}

// Setup the Timer dynamically
function updateIntervalTimer() {
    if (currentIntervalId) clearInterval(currentIntervalId);
    currentSwitchPeriod = videoSwitchPeriod_;

    currentIntervalId = setInterval(() => {
        updateVideoSource();
        checkPageChange(); // Update page states silently on interval
    }, currentSwitchPeriod * 1000);
}

// Update the video source and handle playback
async function updateVideoSource() {
    const weatherState = await fetchWeatherRobustly();
    const config = getVideoConfig(weatherState);

    const i = Math.floor(Math.random() * config.files.length);
    const newSrc = config.path + "/" + config.files[i];

    if (video.type !== config.type) {
        video.type = config.type;
    }
    if (!video.src.endsWith(newSrc)) {
        video.src = newSrc;
    }

    if ((navigator.userAgent).includes(slowDeviceUserAgent) || (lowPowerMode === true && eventPage === true) || !config.autoplay) {
        video.autoplay = false;
        video.pause();
    } else {
        video.autoplay = true;
        video.play().catch(e => console.warn("Background Video Autoplay blocked:", e));
    }

    if (currentSwitchPeriod !== videoSwitchPeriod_) {
        updateIntervalTimer();
    }
}

// Secure Initialization
function init() {
    document.body.insertBefore(video, document.body.firstChild);
    updateVideoSource();
    updateIntervalTimer();

    // Event handler for page routing changes
    window.setInterval(function() {
        if (checkPageChange()) {
            console.log("Page Event triggered");
            updateVideoSource();
        }
    }, 1000);

    // Safe CSS Injection
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
    #myAnimatedBackground { position: fixed; right: 0; bottom: 0; width: 100vw; height: 100vh; object-fit: cover; z-index: -1; pointer-events: none; }
    .content { position: fixed; bottom: 0; background: rgba(0, 0, 0, 0.5); color: #f1f1f1; width: 100%; padding: 20px; }
    `);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
