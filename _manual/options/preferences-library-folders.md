<!-- START PREFERENCES {LIBRARY FOLDERS TAB] -- -->
### The Search Folders Tab

![Preferences - the Library Folders tab]({{ site.baseurl }}/assets/images/options/preferences-library-folders-02.png){:.pic-l}
The _**Library Folders**_ tab is used to tell TV&nbsp;Rename where to look for TV show episode files AFTER they are processed.


| *Defaults* | | |
| Additional Scan Actions | Update files and folders with air date | _**Un-ticked**_ |
| | Automatically create merge rules for merged library episodes | _**Un-ticked**_ |
| Folder Creation | Automatically create missing folders | _**Un-ticked**_ |
| | Do Bulk Add as part of scan | _**Un-ticked**_ |

**NOTE:**{:style="color:red;"} If you use a NAS device as your media library and it is Linux based it has an epoch date of 01/01/1970&nbsp;00:00. Files cannot have a date/time-stamp earlier than this. If you have any TV Show episodes whose original release date was earlier than this and you have the _"Update files and folders with air date"_ box ticked they will be set to 01/01/1970&nbsp;00:00 to prevent repeated detection and attempts to change during scans.

Looking at the *Bulk Add:* section, two options are available and they both work as "junk filters".

Firstly, *Only Include Folders containing Video Files* if ticked restricts the "Bulk Add" scan to only include folders with video files.

_Default:_ _**Un-ticked**_

And Secondly, *Ignore Recycle Bin* tells the "Bulk Add" scan to exclude the (Windows) Recycle Bin even if it contains video files.

_Default:_ _**Un-ticked**_

And Finally, *Force to Use Season Words from Settings only* tells the "Bulk Add" scan to just use the words entered in the preferences when it is scanning to decide whether the series has a flat structure or a 'folder by season' structure.

_Default:_ _**Un-ticked**_


The next two preferences allow you to set the text for the Specials and Season folders - useful if you speak "English as a second language".

The "Specials folder name:" text box allows you to modify the name used when creating a "Specials" folder for a show.

It is common practice for specials to be labeled as part of "Season 0" so for example: special 3 of "Battlestar Galactica" would be labeled "Battlestar Galactica - S00E03 - The Story So Far"  and stored (by default) in the "Specials" folder.

_Default:_ _**Specials**_

Similarly, the "Season folder format:" text box allows you to customise the name used when creating a "Season" in your media library.

_Default_ _**Season \{Season\}**_

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {LIBRARY FOLDERS TAB] ---- -->
