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

{:.toplink}
[Return to Top]()

### Main Options

{:.cli}
/scan

Tell TV&nbsp;Rename to run a scan.

{:.cli}
/doall

Tell TV&nbsp;Rename execute all the actions it can (including a scan).

{:.cli}
/quit

Tell a hidden TV&nbsp;Rename session to exit.

{:.toplink}
[Return to Top]()

### Hidden Behaviour

{:.cli}
/hide

Hides the User Interface and associated message boxes from view.<br />
Defaults to not add missing folders (providing "/createmissing" is not set).<br />
Exits once actions complete.

{:.cli}
/unattended

Depreciated - "/hide" has the same functionality.

{:.toplink}
[Return to Top]()

### Override Options

{:.cli}
/createmissing

Creates folders if they are missing.

{:.cli}
/ignoremissing

Ignore missing folders.

{:.cli}
/norenamecheck

Allows a request to an existing TV&nbsp;Rename session to scan without renaming.

{:.toplink}
[Return to Top]()

### Settings Files

{:.cli}
/recover

 Recover will load a dialog box that enables the user to recover a prior TVDB.xml or TVRenameSettings.xml file. (Normally this dialog would only appear if the current settings are corrupted.)

{:.cli}
/userfilepath:BLAH

Sets a custom folder path for the settings files.

{:.toplink}
[Return to Top]()