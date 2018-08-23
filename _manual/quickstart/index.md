---
title: "Quick-Start"
permalink: /manual/quickstart/
excerpt: "This guide will help you with the initial setup TV Rename."
modified: 2018-01-24T15:53:02-04:00
sidebar:
  nav: "quickstart"
redirect_from:
  - /theme-setup/
---

{% include base_path %}

The Quick-Start Guide will help you with the initial setup TV Rename.

To return to this page click `Quickstart Guide` in TV&nbsp;Rename's **Help**, or browse to [{{ site.url }}{{ site.baseurl }}/manual/quickstart]({{ site.baseurl }}/manual/quickstart "Browse the TV&nbsp;Rename Quick-Start Guide on-line").

In a nutshell TV&nbsp;Rename will identify, move and rename media files from one folder (or group of folders) to another folder, partially identified by the settings in TV&nbsp;Rename and partially identified from the file name.

Once TV&nbsp;Rename knows about these folders (more on this later) it will process media files and move them to the specified location.

for example:&nbsp;-

The file: 

**c:\users\me\downloads\the-outpost-s01e06-hdtv-x264.mkv**  

could be "renamed" to:

**m:\TV Series\The Outpost\Season 1\The Outpost - S01E06 - The Book of Names.mkv**


To do this TV&nbsp;Rename uses data acquired from [The&nbsp;TVDB](http://thetvdb.com 'Visit thetvdb.com').

The initial setup can be somewhat daunting as there are many options and settings that control the way TV&nbsp;Rename behaves. Luckily these have sensible defaults and its actually relatively easy to get up and running providing you don't get distracted by the settings.  

> _The guide assumes you already have the beginnings of a **Media Library** - a folder (or folders) somewhere on your PC or NAS or whatever, with a bunch of tv show files in it (them). TV&nbsp;Rename doesn't care how these folders are organised, however to us mere humans probably "one folder per show" or "one folder per show with one sub-folder per season" would make sense in terms of being able to (manually) find stuff later if you really need to._

> **Note:**{:style="color:red;"} TV&nbsp;Rename uses the underlying Windows infrastructure to manipulate files, so if you can see a path or file in Windows TV&nbsp;Rename can see it as well. Both drive letters and UNC paths are supported.<br />
For example, a mapped drive on a NAS device can be accessed as **m:\\** or **\\\\nas-1\media\\** (assuming *m:* is mapped to *\\nas-1\media* in Windows). Experience shows that UNC paths (if available) give better results, drive mappings can easily be broken or changed, and not using them removes an unnecessary step in generating the file or folder path.<br /><br />
If your Media Library uses removable media to store files the assigned drive letter changes can be a real pain. A small tweak in Windows settings will "fix" the drive letter for the device in question. There are numerous internet guides for doing this, "Google" is your friend...<br /><br />
The following "Google Search" link will get you started:&nbsp;-<br /><br />
**[Google - fix usb drive letter assignment]( https://www.google.co.uk/search?q=fix+usb+drive+letter+assignment "Perform Google search")**

{% include_relative 1-add-content.md %}

{% include_relative 2-set-search-folders.md %}

{% include_relative 2-set-preferences.md %}

{% include_relative 3-run-a-scan.md %}

{% include_relative 4-ongoing-monitoring.md %}

{% include_relative 5-sit-back-relax.md %}
