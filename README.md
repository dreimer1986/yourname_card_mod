# Your Name. - Card-Mod & Animated Background Edition.
Home Assistant theme - A dark, electric blue theme that reminds (me) of the movie Your Name.
WARNING! card-mod custom addin is strongly recommended!

* [Prerequisite](#prerequisite)
* [HACS installation](#hacs_installation)
* [Manual installation](#manual_installation)
* [Activate transparent Sidebar and animated background support](#activate_transparent_sidebar)
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
1. Create a folder `yourname_cardmod`  in your Home Assistant themes folder.
2. Copy the file `yourname_cardmod.yaml` into the identical named themes folder.
3. Restart Home Assistant

### <a name="activate_transparent_sidebar"></a>Activate transparent Sidebar and animated Background support
!! This section is needed regardless of the installation method used !!

1. styles.js and videoBackground.css must be in `www/` folder
2. Go the the Dashboard Ressources Settings
3. Add a new JavaScript-Module and type in: `/local/styles.js?v=1`
4. Add a new Stylesheet and type in: `/local/videoBackground.css`

### <a name="activate_animations"></a>Activate animated Backgrounds
!! This section is needed regardless of the installation method used !!

I did not yet add animations in my repo, because I have no clue if that is legal, but you can do by yourself then.
Create the `animated_backgrounds` folder inside `www/` and copy the MP4 files you wanna have as background in there.
Open your styles.js and be sure that under filesRandom all your filenames are in the list. Be 100% sure to keep the format. ['file1.mp4', 'file2.mp4', 'file3.mp4']

### <a name="enable_the_theme"></a>Enable the theme
- Open your **Profile** in Home Assistant and select the theme called **yourname_cardmod**

### <a name="bug"></a>Bug (?)
- Transparency set for cards can have an undesired effect on other Home Assistant resources. I haven't found a 100% fix for these minimal flaws.

- The needed CSS can not be installed by HACS. Same goes for the Animation activation JS Script! These parts have to be done when using HACS or doing things manually, if you want the transparent Sidebar and animated backgrounds.

- The JS Script has some nice other features, too. I tried to get the most important stuff from Villhelm's (RIP) Animated background working. More informatin and how to use it on your own themes will slowly grow up here: https://github.com/dreimer1986/yourname_card_mod/blob/master/README-script.md

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
