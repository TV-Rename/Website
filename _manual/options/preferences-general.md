<!-- START PREFERENCES {THE GENERAL TAB] ----- -->
### The General Tab

![Preferences - the General tab]({{ site.baseurl }}/assets/images/options/preferences-general-01.png){:.pic-l}

The General Tab controls TV&nbsp;Renames' Download and Scan behaviours.
 
_"X" days count as recent_ specifies how many days are listed for the "Aired in the last N days" section of the _**[When to watch]({{ site.baseurl }}/manual/user#when-to-watch "Read about When to Watch")**_ tab.

_Default: **7 days**_

_Download up to "X" shows simultaneously from [The&nbsp;TVDB](http://thetvdb.com "Visit TheTVDB.com")_ sets the number of concurrent connections to TheTVDB API.

It can be set in the range to 1 to 8.

_Default: **4**_

_Refresh entire series if "X" % of episodes are updated_ sets the point at which TV&nbsp;Rename refreshes the entire series data from [The&nbsp;TVDB](http://thetvdb.com 'Visit thetvdb.com') rather than just the episode data. This speeds up local data updates if major changes are made to a show on [The&nbsp;TVDB](http://thetvdb.com 'Visit thetvdb.com').

_Default: **20%**_

_Look for air date in filenames_, if ticked, provides a second method of identifying show episodes by looking for a date (in a number of formats) in the shows filename and comparing that against the air-date.

The supported date formats are:

"yyyy-MM-dd", "dd-MM-yyyy", "MM-dd-yyyy", "yy-MM-dd", "dd-MM-yy" and "MM-dd-yy"

And the "date separators" can be any of: - / . , and " " (a space)

_Default: **Un-ticked**_

The _Preferred language:_ drop-down sets the language for returned data when requesting information from TheTVDB API. TV&nbsp;Rename will request "English" If the selected language is not available.

The _Mode:_ drop-down can be set to "Production" or "Beta" and allows you to preview Beta functionality that is being worked on but not yet ready for the mainstream releases.

In "Production" mode the application looks and behaves as normal.

In "Beta" mode a new menu called Beta appears between Tools and Help in the menu bar  which gives you access to preview upcoming additions and enhancements.

If you select "Beta", TV&nbsp;Rename will offer you "Beta" and "RC" updates as well as the "Production" updates as and when they become available. 

_Default: **Production**_

Looking at the _Scan Options..._

The "Scan Type" radio buttons tell TV&nbsp;Rename the type of scan to perform when searching for new shows.

| **Full** | A full scan of all shows and seasons.
| **Recent** | A Scan of all the shows that have aired recently (as specified in _"X" days count as recent_ above). |
| **Quick** | Scan the shows that have aired recently and have a missing episode in the library.

The scans also check the locations specified in _**[Options>Preferences - Search Folders]({{ site.baseurl }}/manual/options#the-search-folders-tab)**_ for any matching media files. |

 Ticking _Scan on Startup_ tells TV&nbsp;Rename to perform the selected scan when the program starts. Ticking _Scheduled scan..._ will force a repeat scan every "X" hours. Ticking _Monitor folders for changes_ will tell  TV&nbsp;Rename to "listen" for Windows "dropping" new files in the identified locations. Ticking _Move Files within Library to Keep it Tidy_ will do just that, if files have been directly added to or misplaced in the library enabling this setting will tidy stuff to the correct names and places.

| _Defaults:_ | |
| Scan Type | _**Full**_ |
| Scan on Startup | _**Un-ticked**_ |
| Scheduled scan every | _**Un-ticked**_ - _**1 hour**_ |
| "Scan" checks and actions | |
| Rename Check | _**Ticked**_ |
| &emsp;&emsp;Prevent move of flies | _**Un-ticked**_ | 
| Missing Check | _**Ticked**_ |
| &emsp;&emsp;Ignore Episodes Previously Seen | _**Un-ticked**_ |
| Move Files within Library to Keep it Tidy | _**Ticked**_ |

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {THE GENERAL TAB] ------- -->
