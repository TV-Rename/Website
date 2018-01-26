---
title: "TV Rename Command Line Interface"
permalink: /manual/cmd-line/
excerpt: "How to quickly install and setup TV Rename."
modified: 2018-01-22T15:54:02-04:00
sidebar:
  nav: "docs"
redirect_from:
  - /theme-setup/
---


#### Command Line Interface

### These are the options you need to know!

If TV&nbsp;Rename is already running any CLI activity will be directed towards the running instance.

## Main Options

 {:.cli}
/scan

Tell TV&nbsp;Rename to run a scan.

{:.cli}
/doall

Tell TV&nbsp;Rename execute all the actions it can (including a scan).

{:.cli}
/quit

Tell a hidden TV&nbsp;Rename session to exit.

## Hidden Behaviour

{:.cli}
/hide

Hides the User Interface and associated message boxes from view.<br />
Defaults to not add missing folders (providing "/createmissing" is not set).<br />
Exits once actions complete.

{:.cli}
/unattended

Depreciated - "/hide" has the same functionality.

## Override Options

{:.cli}
/createmissing

Creates folders if they are missing.

{:.cli}
/ignoremissing

Ignore missing folders.

{:.cli}
/norenamecheck

Allows a request to an existing TV&nbsp;Rename session to scan without renaming.

## Settings Files

{:.cli}
/recover

 Recover will load a dialog box that enables the user to recover a prior TVDB.xml or TVRenameSettings.xml file. (Normally this dialog would only appear if the current settings are corrupted.)

{:.cli}
/userfilepath:BLAH

Sets a custom folder path for the settings files.
