---
title: "The Technical Guide"
permalink: /manual/technical/
excerpt: "How to quickly install and setup TV Rename."
modified: 2018-01-22T15:54:02-04:00
sidebar:
  nav: "manual"
redirect_from:
  - /theme-setup/
---

{% include base_path %}

## Configuration Files

By default, all the configuration information and locally cached data from [TheTVDB](http://thetvdb.com "Visit TheTVDB.com") is stored in a series of JSON  (JavaScript Object Notation) files under the users Application folder (unless overridden using the command line option <span class="cli">/userfilepath</span>).

On Windows XP this is: -

> \\Documents and Settings\\\<user-name\>\\Application Data\\TV Rename

And on Windows Vista and later: -

> \\Users\\\<user-name\>\\AppData\\Roaming\\TV Rename

In either case the 2.1 folder contains the same set of files.

**If you wish to make a backup of your TV&nbsp;Rename setup a copy of this folder is all you need!**

It contains: -

**layout.json** - TV&nbsp;Rename's window position and size as well as column widths.

**settings.json** - Everything else not mentioned is stored in here. All your shows, media library paths, folder structures and settings. As with TheTVDB.xml this is only overwritten when you choose **File>Save**.

**settings.json.0 - settings.xml.9** - backup copies of TV RenameSettings.xml (FIFO).

**statistics.json** - TV&nbsp;Rename's historical statistics.

**tvdb.json** - The locally cached tvdb.com show season and episode information for everything listed in the _**My Shows**_ tab.

**tvdb.json.0 - tvdb.json.9** - A maximum of ten backup copies of theTVDB.xml file. A new file gets created here every time you click **File>Save** on a first-in-first-out (FIFO) basis.


{:.toplink}
[Return to Top]()

## Log Files

The main log file (TVRename.log) can be found in: -
> \\Documents and Settings\\\<username\>\\AppData\\Roaming\\TV Rename\\log\\

on Windows XP or: -

> \\Users\\\<username\>\\AppData\\Roaming\\TV Rename\\log\\

On Windows Vista and later.

Log files are rotated into an "archive" folder (in the same location as TVRename.log) every time TV&nbsp;Rename is run or every 24 hours, whichever is sooner.

As with **tvdb.json** and **settings.json** a maximum of ten backup copies of the log file are kept (**TVRename00.log** - **TVRename09.log**) on a first-in-first-out (FIFO) basis.

Logging uses NLog. The configuration file ([NLog.config](https://github.com/TV-Rename/tvrename/blob/master/TVRename%23/NLog.config "Look at NLog.config in the TV-Rename Repo")) is stored in the TV&nbsp;Rename program folder.

You can read the [NLog Wiki](https://github.com/nlog/NLog/wiki/Configuration-file "Visit the NLog Wiki") for guidance on how to adjust the configuration file to collect more information.

When raising a bug please include a log file that illustrates the issue if you can, it will help us find a solution quickly.

{:.toplink}
[Return to Top]()

## The Registry

The only information TV&nbsp;Rename stores in the registry is installation information which is used by Windows "Apps and Features" to un-install the program. But hey, why would you want to do that?

{:.toplink}
[Return to Top]()

## Source Code

You can find TV&nbsp;Rename's source code (along with executables and this website) in [The TV&nbsp;Rename GitHub Repository](https://github.com/TV-Rename/tvrename "Visit The repository").

{:.toplink}
[Return to Top]()

## Development Links

 * You can find the Developers Wiki [here](https://github.com/TV-Rename/tvrename/wiki "Read the Wiki")...
 * For the longer term you can visit the "[Roadmap]( https://github.com/TV-Rename/tvrename/milestones?direction=asc&sort=due_date&state=open "Visit TV Rename's Roadmap")" which lists the proposed Milestones (a high level view of whats planned for when).
 * In addition there is a [Developers Forum in Google Groups](https://groups.google.com/forum/#!forum/tv-rename-development) which you can request access to.
 * The legacy forum can be [accessed](http://old.tvrename.com/bbold/) in read-only mode for background and history about the project

{:.toplink}
[Return to Top]()

## Framework

TV Rename uses the Microsoft .NET Framework. The installer will check for its presence and let you know if any action is needed. It's a free download from [Microsoft](https://www.microsoft.com/net/download/windows "Get .NET").

{:.toplink}
[Return to Top]()

## Credits

TV Rename pulls data from [TheTVDB.com](http://thetvdb.com/ "Visit TheTVDB.com") using their API. **Please visit their site, register, and help out by contributing information and artwork for TV Series and Episodes.**

It also uses: -
* [Json.NET](https://www.newtonsoft.com/json),
* [AlphaFS](http://alphafs.alphaleonis.com/) for advanced .NET file operations,
* [NLog](http://nlog-project.org/) open-source logging for .NET,
* [SourceGrid](https://sourcegrid.codeplex.com/),
* TVRename has seen significant speed improvements as a result of using: -
  * Red Gate's [ANTS Performance Profiler](https://www.red-gate.com/products/dotnet-development/ants-performance-profiler/ "Visit ANTS Performance Profiler pages")
  * JetBrains' [dotTrace](https://www.jetbrains.com/profiler  "Visit the Jetbrains Profiler pages")
  * JetBrains' [ReSharper](https://www.jetbrains.com/resharper "Visit the Jetbrains Resharper pages")

And thanks to:<br />
Vecteezy! Vector Art for our cool [Retro Television Logo](https://www.vecteezy.com/vector-art/73089-retro-television) - Vectors by [www.vecteezy.com](https://www.vecteezy.com).
