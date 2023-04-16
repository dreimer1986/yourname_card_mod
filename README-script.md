# Time for some HAXX

* [Foreword](#foreword)
* [Installing](#install)
* [Stuff you can do](#stuff)
* [Modify themes for videos](#themes)
* [Closing words](#closing_words)

## <a name="foreword"></a>Foreword

After Home Assistant 2023.04 went final many ppl found out that "Animated Lovelace Background" by Villhellm is not working anymore. As I used this addin for a while now, I had a lil tantrum in the 2023.04 beta time... I opened a report right on realization of the problems in Villhellm's repo. I hoped for someone else to fix it as we all know Villhellm has passed away and I never before did much JS coding... Soon there were the needed information made public in #beta what to do for fixing all kind of custom addons. In the end, with some useless sidesteps in JS Script form, I myself fixed it and it worked again. I even have a own fork with the fix included. Some obsolete section needed to be removed and the fix from #beta did the rest.

So... why did you make your own solution then you ask? I did quite some messed up things with the addin including the sidebar being transparent on my own theme (You are in it's repo btw ^^). This is not working anymore at all with the current way the addin injects the video into the website.

You can imagine the website as a tree. Down at the roots is "body" and from there you have different sections with different sub-sections etc. etc. creating the website you see. In the past the sidebar was a sub branch of the dashboard, now both are on the same level. Look wise not much of a difference, but a modified dashboard now cannot modify the look of the sidebar anymore. That was a feature I wanted so badly in the past and I did not fight for so long to get it working just to give up now.

I talked with a few people and just found out that this injection is not deep down enough to modify both parts altogether. So I did some experiments. My theme already had a fixing script from addin times that switched some mainly sidebar stuff to transparent background to be able to see the layer below. (Like the video background in that case). That script was my aim.

Playing a video on a website as background is no witchcraft and so I slowly extended the script to play the video instead of the addin. I decided to go down to the very beginning aka "body" with my injection to bypass as many possible future breakages as possible. Now I needed clear view to that layer...

Here my own theme came in handy. I had to modify a few global values and things looked fine. I even removed a few Card-Mod theme hacks and switched to a proper solution in the theme data itself. The result was... WONDERFUL! No flickering, no sometimes not playing video, no short periods showing up the original background image... ALL WAS JUST FINE!

Now I thought I should extend the script a bit. Like, make it more user friendly to modify for our yown needs and add a few neat features maybe. The randomizer was the first step, it got extended to not expect videos to be numbered 1.mp4-x.mp4 but use a random video regardless of the naming. Then I thought about adding the weather depeding background feature from Villhellm's addin, too.

And here we are now... A perfectly fine working alternative with not all, but most features the addin had, too.

## <a name="install"></a>Installing

Likely quite obvious, but... remove the Lovelace Animated Background Addon and all settings in Locelace RAW configuration. These you might wanna backup anyways. Some of them can be hand converted into the script.

1. styles.js and videoBackground.css must be in www/ folder
2. Go the the Dashboard Ressources Settings
3. Add a new JavaScript-Module and type in: /local/styles.js?v=1
4. Add a new Stylesheet and type in: /local/videoBackground.css

**Optional:**
5. If you plan to use own MP4 files, copy them to www/animated_backgrounds.

## <a name="stuff"></a>Stuff you can do

**What it can do is easy:**

It can playback videos as background. Randomized completely or randomized based on weather.

If you look at the script with a fitting editor you can see the starting section has a few settings you can tinker with. All of them are being explained now:

### const token_:

The long term token is needed to communicate with Home Assistant. Addins have funny helpers for this, scripts seem to be left out there. So we go the lil longer route. To create one, click on your username in Home Assistant and go all the way down to the bottom. There you see the list of long term tokens and can create your own, too. Do so, copy it and put it inside the script here.

### const weatherEntity_:

Needed if you want to use the weather depending backgrounds. I chose my default one here. "weather.home" The state of this entity controls the backgrounds that are being used.

### const videoPath_:

Path to your videos. I have my whole bunch on my HA hardware, but you can select a URL here, too. For convenience I put the correct one for the flixel.com hosted images used by Villhellm's addin here in commented out form there aswell. Remove the // and put them before the local folder instead. The flixel.com videos are already in the lists we talk about below.  

### const weatherControl_:

If a pure randomizer is needed, set it to false. For weather based randomizer, set it to true.

### const videoSwitchPeriod_:

After x seconds, the video will be diced again. This verifies the weather is still the same, too. Otherwise the dice will check the now correct file list.

### const filesWHATEVER:

Below that you can find 15 + 1 lists for video names.

First one is the one used by pure randomizer. In my case 62 videos numbered from 1.mp4 - 62.mp4. Edit to your needs.
ONLY used if weatherControl_: false;

Then there are 15 lists for specific weather types. You can differentiate them just by their names. Add the videos you want there, or leave it as it is to use flixel.com hosted ones. In this case it's Villhellm's list extended a bit to just need hail and exceptional condition videos before being complete. Rest is filled already. If you find nice videos on flixel, report them to me please!
ONLY used if weatherControl_: true; AND you removed the // in front of the flixel const videoPath_ above. In this case DON'T forget to comment out or competely remove the other const videoPath_ leading to a local folder!

### Sidenote

If you change anything on your settings after installation, go to the the Dashboard Ressources Settings again and edit the number on "/local/styles.js?v=" to something different than before. This will force a Cache reset on it and really activate your updates.

### WARNING!

The syntax is there for a reason. So if you see "" or '' and the stuff you wanna edit is between them, then edit to your needs and be 100% sure that they are STILL THERE. :D Same for [] or the , separating stuff. All needs to be the same way as it is right now. But of course you can increase/reduce the filelist entry number to your liking. Right now they all have different numbers of entries and you can add one with a , and '' or remove one by removing it and one ,.

## <a name="themes"></a>Modify themes for videos

Editing themes to be transparent enough is easy. Open the yaml and look for stuff with background in it's name. For example to get the original yourname theme working I edited these:

### lovelace-background:

The background image of the theme it is. Of course this is in the way if you wanna play a video there. So you set it to "transparent". 

### app-header-background-color:

This is the header background color. (The selection bar on the top of the screen). In the case here it was a funny HEX value. "#141A32" The header bar looks better if it's not 100% transparent, thus I converted it to rgb first by using a online converter: https://www.rapidtables.com/convert/color/hex-to-rgb.html
Now you get a nice CSS value like "rgb(20, 26, 50)". This needs editing for transparency now. Change rgb to rgba and extend the braces with ", 0,5" making it "rgba(20, 26, 50, 0.5)". This keeps the original coloring but with 50% look through effect.

### markdown-code-background-color:

Used by some sections as color for background. Here it was another HEX value I modified the same way as the one above. Likely not needed most of the time. So call this one optional.

### sidebar-background-color:

A interesting one. In my case it was set to "var(--primary-background-color)" meaning it is the same as "primary-background-color" aka black in many themes. I changed it to "var(--app-header-background-color)" to always follow the coloring of the header bar.

### app-header-edit-background-color:

This one was not even in the theme by default, but needs to be set to "var(--app-header-background-color)". This makes the edit mode header look like the normal header color wise.

If you use Card-Mod you can make other crazy things, too. Edit Mode for example has a too dark colored part when your theme got transparent. Why? Because there are two layers on top of each other causing it to look way too dark. This fixes that problem by making one layer transparent:

```
  card-mod-root: |
    paper-tabs {
      background-color: transparent !important;
    }
```

Or if you like the transparent sidebar, but prefer darker transparent buttons on it:

```
  card-mod-sidebar: |
    paper-icon-item[role=option], paper-icon-item[aria-role=option] {
      background: var(--ha-card-background) !important;
    }
```

### WARNING!

Editing the theme is nice and fine, but the updates will not be active before you restart Home Assistant OR you go to the Services tab under Developer Tools and once execute "Home Assistant Frontend: Reload themes".

## <a name="closing_words"></a>Closing words

All my stuff here is public domain. You can use it for whatever you see it fit. I take over the license from the original theme here. But if you use stuff from me, then at least mention my name. That's all I ask for. ^^
