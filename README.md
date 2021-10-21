# Your Name Card-Mod Edition.
Home Assistant theme - A dark, electric blue theme that reminds (me) the movie Your Name.   

* [Prerequisite](#prerequisite)
* [HACS installation](#hacs_installation)
* [Manual installation](#manual_installation)
* [Enable the theme](#enable_the_theme)
* [Bug](#bug)
* [Screenshots](#screenshots)

### <a name="prerequisite"></a>Prerequisite
Check if **configuration.yaml** allows themes loading from themes folder:   

<pre>
frontend:
  themes: !include_dir_merge_named themes
</pre>

And if the **themes** folder exists in **config** folder.   

Create when none exist.

### <a name="hacs_installation"></a>HACS installation
1. Open the Community Store (HACS)
2. Search for `Your Name. Card-Mod Edition`
3. Install it
4. Restart Home Assistant
5. Possible bug(?)

### <a name="manual_installation"></a>Manual installation
1. Copy the file `yourname_cardmod.yaml` into your Home Assistant themes folder
2. Copy (or create) the `backgrounds` folder inside `www/` and copy the background image `yourname.jpg` inside `backgrounds`
3. Restart Home Assistant

### <a name="enable_the_theme"></a>Enable the theme
- Open your **Profile** in Home Assistant and select the theme called **yourname**

### <a name="bug"></a>Bug (?)
- When installing with HACS the `backgrounds` folder is not created and with it also the background image is not copied. The theme is pointing to a non-existing location and after restarting Home Assistant you may not see the background image. If this happens, check the [Manual installation](#manual_installation) at step #2 and restart Home Assistant once again.

- Transparency set for cards has an undesired effect on others Home Assistant resources. I still haven't found a fix for the recent breaking changes (not that recent actually), but it was time to update the theme anyway because if you were using Button-card you may have notice that the transparency wasn't working properly.

### <a name="screenshots"></a>Screenshots
**Home overview**
<p align="center">
  <img src="https://raw.githubusercontent.com/dreimer1986/yourname_card_mod/master/images/home1.png">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/dreimer1986/yourname_card_mod/master/images/home2.png">
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
