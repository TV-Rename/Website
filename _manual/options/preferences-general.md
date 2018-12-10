<!-- START PREFERENCES {THE GENERAL TAB] ----- -->
### The General Tab

![Preferences - the General tab]({{ site.baseurl }}/assets/images/options/preferences-general-01.png){:.pic-l}
"X" _days count as recent_ specifies how many recent days are listed for the for "Aired in the last N days" section of the _**[When to watch]({{ site.baseurl }}/manual/user#when-to-watch "Read about When to Watch")**_ tab.

_Default:_ _**7 days**_

*Download up to "X" shows simultaneously from [The&nbsp;TVDB](http://thetvdb.com "Visit TheTVDB.com")* sets the number of concurrent connections to TheTVDB API.

It can be set in the range to 1 to 8.

_Default:_ _**4**_

*Refresh entire series if "X" % of episodes are updated* sets the point at which TV&nbsp;Rename refreshes the entire series data from [The&nbsp;TVDB](http://thetvdb.com 'Visit thetvdb.com') rather than just the episode data. This speeds up local data updates if major changes are made to a show on [The&nbsp;TVDB](http://thetvdb.com 'Visit thetvdb.com').

_Default:_ _**20%**_

*Look for air date in filenames* if ticked, provides a second method of identifying show episodes by looking for a date (in a number of formats) in the shows filename and comparing that against the air-date.

The supported date formats are:

"yyyy-MM-dd", "dd-MM-yyyy", "MM-dd-yyyy", "yy-MM-dd", "dd-MM-yy" and "MM-dd-yy"

And the "date separators" can be any of: - / . , " " (a space)

_Default:_ _**Un-ticked**_

The _Preferred language:_ drop-down sets the language for returned data when requesting information from TheTVDB API. TV&nbsp;Rename will request "English" If the selected language is not available.

The _Mode:_ drop-down allows you to preview functionality that is being worked on but not yet ready for the mainstream releases. The options available are “Production” and “Beta”.

In "Production" mode the application looks and behaves as normal.

In "Beta" mode a new menu called Beta appears between Tools and Help which gives you access to preview upcoming additions and enhancements.

If you select "Beta", TV&nbsp;Rename will offer you "Beta" and "RC" updates as well as the "Production" updates. 

_Default:_ _**Production**_

At the top of the tab the "Scan Type" radio buttons tell TV&nbsp;Rename the type of scan to perform when searching for new shows.

| **Full** | A full scan of all shows and seasons.
| **Recent** | A Scan of all the shows that have aired recently. !
| **Quick** | Scan the shows that have aired recently and have a missing episode in the library. Also check the locations specified in _**Options>Preferences - Search Folders**_ for any matching media files. |

 Ticking "Scan on Startup" tells TV&nbsp;Rename to perform the selected scan when the program starts,  ticking "Scheduled scan..." will force a repeat scan every "X" hours and finally, ticking "Monitor folders for changes" will tell  TV&nbsp;Rename to "listen" for Windows "dropping" new files in the identified locations.

| *Defaults* | | |

|   | "Scan Type" | _**Full**_ |
|   | "Scan on Startup" | _**Un-ticked**_ |
|   | "Scheduled scan every" | _**Un-ticked - 1 hour**_ |
| Scan checks | Rename Check | _**Ticked**_ |
| and actions | Prevent move of flies | _**Un-ticked**_ | 
| | Missing Check | _**Ticked**_ |
| | Ignore Episodes Previously Seen | _**Un-ticked**_ |

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {THE GENERAL TAB] ------- -->
