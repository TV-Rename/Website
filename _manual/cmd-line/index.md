---
title: "The Command Line"
permalink: /manual/cmd-line/
excerpt: "All of the Command Line Options."
modified: 2018-01-22T15:54:02-04:00
sidebar:
  nav: "manual"
redirect_from:
  - /theme-setup/
---

{% include base_path %}

A number of TV&nbsp;Rename's functions can be accessed using the command line. If TV&nbsp;Rename is already running any CLI activity will be directed towards the running instance.

As with most programs run at the command line TV Rename will return further information when "**TVRename.exe /?**" is executed viz: -

```
/scan will Tell TV Rename to run a scan
/quickscan will scan shows most likely to need an update: http://www.tvrename.com/userguide#scan
/recentscan will scan recent shows: http://www.tvrename.com/userguide#scan
/doall Tell TV Rename execute all the actions it can.
/quit Tell a running TV Rename session to exit.

/hide will hide the UI
/unattended same as /hide

/recover will Recover will load a dialog box that enables the user to recover a prior TVDB.xml or TVRenameSettings.xml file
/userfilepath:BLAH  Sets a custom folder path for the settings files.
/createmissing will Create folders if they are missing.
/ignoremissing will Ignore missing folders.
/norenamecheck will Allows a request to an existing TV Rename session to scan without renaming.

Further information is available at http://www.tvrename.com/cmd-line
```

{:.toplink}
[Return to Top]()

{% include_relative main-options.md %}

{% include_relative hidden-behaviour.md %}

{% include_relative override-options.md %}

{% include_relative settings-files.md %}
