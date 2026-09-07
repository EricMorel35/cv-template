<!--

keywords:
cv-template, cv, resume, curriculum-vitae, template, theme, generator, html, pdf, htmltopdf

-->

<h1 align="center">cv-template</h1>

<h5 align="center">Single page cv-template written in html and built with gulp.</h5>
<p align="center">
    <a href="https://frontant.github.io/demo-sites/cv-template/" target="_blank">HTML</a> |
    <a href="https://frontant.github.io/demo-sites/cv-template/resume-dark.pdf" target="_blank">PDF</a>
</p>

The objective of this project was to develope a good-looking single page curriculum vitae template with the automation tool <a href="https://gulpjs.com/" target="_blank">**gulp**</a> that automates painful or time-consuming tasks in a development workflow.

![resume](docs/images/resume.jpg)

## Installation

This template depends on:

- <a href="https://nodejs.org/download/release/v10.24.1/" target="_blank">**node 10.x**</a>
- <a href="https://gulpjs.com/" target="_blank">**gulp 3.9.1**</a>
- **Google Fonts** (<a href="https://fonts.google.com/specimen/Josefin+Sans" target="_blank">**Josefin-Sans**</a> and <a href="https://fonts.google.com/specimen/Raleway" target="_blank">**Raleway**</a>)

The project uses **phantomjs** to transform HTML to PDF. Unfortunately phantomjs can't handle custom fonts defined with @font-face property. To get phantomjs to render HTML files correctly you will need to install fonts on your system.

> ⚠️ **Node version matters.** This template is built on **gulp 3.9.1**, which was never updated for modern Node. Anything newer than **Node 10.x** crashes on startup with `ReferenceError: primordials is not defined` (an old `graceful-fs`/`natives` dependency poking at Node internals that no longer exist). Do **not** install the current Node LTS for this project.

### Installation (Windows)

1. Download and install <a href="https://nodejs.org/download/release/v10.24.1/" target="_blank">**Node 10.24.1**</a> (last release of the 10.x branch). If you already have a newer Node installed system-wide and don't want to replace it, just unzip the **node-v10.24.1-win-x64** archive into a local folder inside the project (e.g. `.node-local/`) and call that `node.exe` directly instead of the global one — see the [Build](#build) and [Live Preview](#live-preview) sections below.
2. Download and unzip the <a href="https://github.com/frontant/cv-template/archive/master.zip" target="_blank">**cv-template-master**</a>
3. Open the terminal (cmd.exe) and run commands:

```shell
 cd cv-template-master
 npm install
 npm install gulp-cli -g
```

4. Now setup fonts. Change to the folder **cv-template-master/app/assets/fonts/**. Open the folder **Raleway**. **Select all fonts** in there and click on the selection with the **right mouse button**, than choose **install**. Do the same with **Josefin_Sans**.

#### Install fonts without a logoff (Windows)

The right-click **install** above needs admin rights and only takes effect for the current user at the **next logon** — annoying if you just want to build now. To skip both restrictions, install per-user and load the fonts into the running session in one go with PowerShell:

```powershell
# copy the fonts to the per-user font folder and register them (no admin needed)
$fontsDest = "$env:LOCALAPPDATA\Microsoft\Windows\Fonts"
New-Item -ItemType Directory -Force -Path $fontsDest | Out-Null
$regKey = "HKCU:\Software\Microsoft\Windows NT\CurrentVersion\Fonts"
Get-ChildItem "app\assets\fonts\Raleway\*.ttf", "app\assets\fonts\Josefin_Sans\*.ttf" | ForEach-Object {
    Copy-Item $_.FullName "$fontsDest\$($_.Name)" -Force
    Set-ItemProperty -Path $regKey -Name "$($_.BaseName -replace '-', ' ') (TrueType)" -Value $_.Name -Force
}

# load them into the current session right away, no logoff/restart required
Add-Type -TypeDefinition @'
using System;
using System.Runtime.InteropServices;
public class FontApi {
  [DllImport("gdi32.dll")] public static extern int AddFontResourceW(string lpFileName);
  [DllImport("user32.dll")] public static extern int SendMessageTimeout(IntPtr hWnd, int Msg, IntPtr wParam, string lParam, int fuFlags, int uTimeout, out IntPtr res);
}
'@
Get-ChildItem "$fontsDest\*.ttf" | ForEach-Object { [FontApi]::AddFontResourceW($_.FullName) } | Out-Null
$res = [IntPtr]::Zero
[FontApi]::SendMessageTimeout([IntPtr]0xffff, 0x1D, [IntPtr]::Zero, $null, 0, 1000, [ref]$res) | Out-Null
```

The `SendMessageTimeout` broadcast (`WM_FONTCHANGE`) is the pirouette that tells every running app to re-read the font list immediately, so gulp/phantomjs picks the fonts up without you having to log off and back on.

### Installation (Linux)

##### Install Node

The easiest way to install **node** is via the <a href="https://nodejs.org/en/download/package-manager/" target="_blank">**package manager**</a>:

If you use Ubuntu/Debian run:

```shell
 curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
 sudo apt-get install nodejs
```

##### Install CV-Template, Node Modules and Gulp

Download the <a href="https://github.com/frontant/cv-template/archive/master.zip" target="_blank">**cv-template-master**</a>, unpack the zip file and run:

```shell
 cd ~/Downloads/cv-template-master
 npm install
 sudo npm install gulp-cli -g
```

##### Install Fonts

```shell
 cp -r ~/Downloads/cv-template-master/app/assets/fonts ~/.fonts
```

## Build

```shell
 cd ~/Downloads/cv-template-master
 gulp
```

You can view generated files in the folder **~/Downloads/cv-template-master/app/build/**

## Customize

```shell
# after you make any changes to the template you have to run gulp to rebuild PDF files
 gulp
```

### Edit Content

The content of the **cv-template** is stored in **~/Downloads/cv-template-master/app/contents/index.html.js**.

### Change Photo

To change the profile photo replace **profile-photo.jpg** and **profile-photo-light.jpg** by your own images in the folder **~/Downloads/cv-template-master/app/assets/images/**.

### Change Icons

You can change or add custom icons in the _"INTERESTS"_ section by putting your own graphics (svg, png, jpg) to the folder **~/Downloads/cv-template-master/app/assets/images/icons/**. Finally you will need to edit the file **~/Downloads/cv-template-master/app/contents/index.html.js** and change the value of the **icon** attribute by entering **"icon--"** and **"file name"** without extension.

```js
    interests: {
        title: 'Interests',
        item1: {
            icon: 'icon--terminal',
            caption: 'Coding'
        },
        item2: {
            icon: 'icon--game-controller',
            caption: 'Games'
        },
        item3: {
            icon: 'icon--compass',
            caption: 'Hiking'
        },
        item4: {
            icon: 'icon--saddle',
            caption: 'Cycling'
        }
    }
```

### Page Options

Page Options are placed in the file **~/Downloads/cv-template-master/app/assets/styles/base/\_variables.css**.

```scss
/* page options */
$pageZoom: 1; /* scales page */
$pageZoomOnWindows: 1.333; /* scales page on Windows */
$pageBorder: 0px; /* sets the border size of the page */
```

#### Adjust Page Zoom

I've noticed that **phantomjs** renders HTML pages differently depending on the operating systems it runs on. If PDF files are not correctly rendered on your OS you can fix it by adjusting the variable **\$pageZoom** or **\$pageZoomOnWindows** (on Windows OS).

#### Adjust Page Border

By default the page border is set to 0px. If your printer cuts off the page content you can fix it by increasing the value of the variable **\$pageBorder**.

![page border](docs/images/resume-page-border.jpg)

## Live Preview

The _Live Preview_ is very usefull if you want to view template changes in your browser on the fly, without runnig **gulp** every time. This will only work if you make changes to **index.html**, **index.html.js** files and CSS files in **~/Downloads/cv-template-master/app/assets/styles/** directory. If you make changes to other files you still need to run **gulp**. You can run **gulp** in a separate terminal without stopping the _Live Preview_.

### Run Live Preview

Run with:

```shell
 gulp watch
```

... and stop it by pressing **ctrl + c**.

Now copy the local url that you see in the terminal output to the address bar in your browser. In my case it is **http://localhost:3000**. Here is my output:

```
[12:13:42] Starting 'watch'...
[12:13:42] Finished 'watch' after 69 ms
[Browsersync] Access URLs:
 ----------------------------
 Local: http://localhost:3000
 ----------------------------
    UI: http://localhost:3001
 ----------------------------
[Browsersync] Serving files from: app/build
```

## License

MIT
