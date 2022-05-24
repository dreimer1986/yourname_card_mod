# Your Name Card-Mod & Animated Background Edition.
Home Assistant theme - A dark, electric blue theme that reminds (me) of the movie Your Name.
WARNING! card-mod and for the real deal Lovelace Animated Background custom addins are mandatory!

* [Prerequisite](#prerequisite)
* [HACS installation](#hacs_installation)
* [Manual installation](#manual_installation)
* [Activate transparent Sidebar](#activate_transparent_sidebar)
* [Activate animated Backgrounds](#activate_animations)
* [Enable the theme](#enable_the_theme)
* [Bug](#bug)
* [Screenshots](#screenshots)

### <a name="prerequisite"></a>Prerequisite
Check if **configuration.yaml** allows themes loading from themes folder:   

<pre>
frontend:
  themes: !include_dir_merge_named themes
</pre>

Check if the **themes** folder exists in **config** folder.   

Create it when none exists yet.

### <a name="hacs_installation"></a>HACS installation

1. Open the Community Store (HACS)
2. Search for `Your Name. Card-Mod & Animated Background Edition`
3. Install it
4. Restart Home Assistant
5. Possible [Bug](#bug)

### <a name="manual_installation"></a>Manual installation

1. Copy the file `yourname_cardmod.yaml` into your Home Assistant themes folder
2. Copy (or create) the `backgrounds` folder inside `www/` and copy the background image `yourname.jpg` inside `backgrounds`
3. Restart Home Assistant

### <a name="activate_transparent_sidebar"></a>Activate transparent Sidebar

!! This section is needed regardless of the installation method used !!

1. styles.js must be in `www/` folder
2. Go the the Dashboard Ressources Settings
3. Add a new JavaScript-Module and type in: `/local/styles.js?v=1`

### <a name="activate_animations"></a>Activate animated Backgrounds

Put this on the very beginning of your Dashboard RAW configurator:

```
animated_background:
  enabled: true
  debug: true
  default_url:
    - /local/animated_backgrounds/1.mp4
    - /local/animated_backgrounds/2.mp4
    - /local/animated_backgrounds/3.mp4
    - /local/animated_backgrounds/4.mp4
```

I did not yet add animations in my repo, because I have no clue if that is legal, but you can do by yourself then.
Create the `animated_backgrounds` folder inside `www/` and copy the MP4 files you wanna have as background in there.
Name them 1.mp4, 2.mp4, 3.mp4 and 4.mp4.

### <a name="enable_the_theme"></a>Enable the theme
- Open your **Profile** in Home Assistant and select the theme called **yourname_cardmod**

### <a name="bug"></a>Bug (?)
- When installing with HACS the `backgrounds` folder is not created and with it also the background image is not copied. The theme is pointing to a non-existing location and after restarting Home Assistant you may not see the background image. If this happens, check the [Manual installation](#manual_installation) at step #2 and restart Home Assistant once again.

- Transparency set for cards can have an undesired effect on other Home Assistant resources. I haven't found a 100% fix for these minimal flaws.

- The transparent Sidebar CSS can not be installed by HACS, too. This part has to be done when using HACS or doing things manually, if you want the transparent Sidebar.

### <a name="screenshots"></a>Screenshots
**Home overview**
<p align="center">
  <img src="https://raw.githubusercontent.com/dreimer1986/yourname_card_mod/master/images/animation.webp">
</p>

**Dropdown menu black**
<p align="center">
  <img src="https://raw.githubusercontent.com/dreimer1986/yourname_card_mod/master/images/dropdown.png">
</p>

**Table**
<p align="center">
  <img src="https://raw.githubusercontent.com/dreimer1986/yourname_card_mod/master/images/table.png">
</p>

**Mobile**
<p align="center">
  <img src="https://raw.githubusercontent.com/dreimer1986/yourname_card_mod/master/images/mobile.png">
</p>
