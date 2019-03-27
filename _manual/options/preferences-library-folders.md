<!-- START PREFERENCES {LIBRARY FOLDERS TAB] - -->
### The Library Folders Tab

![Preferences - the Library Folders tab]({{ site.baseurl }}/assets/images/options/preferences-library-folders-01.png){:.pic-l}
The Library Folders tab is used to tell TV&nbsp;Rename about the location(s) of your Media Library - viz where to look for TV Show episode files **AFTER** they have been processed.

To tell TV&nbsp;Rename about your library simply use the `Add` button to browse to a folder that is a "Base" folder of your Media Library. and click `OK`.

You can also highlight a path in the list and use the `Remove` button to remove it, and highlight a path in the list and use `Open` to check its contents in a File Explorer window.

"Base" folder refers to a path on your system that corresponds to the location of your media files.
```
  D:\                                      nas-1
  └─ media                                 └─ media
     └─ Video                                 └─ Video
        └─ TV Shows                              └─ TV Shows
           ├─ Show A                                ├─ Show C
           │  ├─ Season 1                           │  ├─ Season 1
           │  │  ├─ Episode 1                       │  │  ├─ Episode 1
           │  │  └─ Episode 2                       │  │  └─ Episode 2
           │  └─ Season 2                           │  └─ Season 2
           │     ├─ Episode 1                       │     ├─ Episode 1
           │     └─ Episode 2                       │     └─ Episode 2
           └─ Show B                                └─ Show D
              ├─ Season 1                              ├─ Season 1
              │  ├─ Episode 1                          │  ├─ Episode 1
              │  └─ Episode 2                          │  └─ Episode 2
              └─ Season 2                              └─ Season 2
                 ├─ Episode 1                             ├─ Episode 1
                 └─ Episode 2                             └─ Episode 2
```

For the folder structure illustrated (above left) the base folder would be "D:\media\Video\TV&nbsp;Shows".

This could also be a UNC path (above right) to a device for example: "\\\nas-1\media\Video\TV Shows".

_Additional Scan Options_ allow manipulation of the Medial Library contents. 

_Update files and folders with air date_, if ticked, will modify the time stamp of files and folders in the Media Library to match the original air date of the episode being copied or moved.

_Default: **Un-ticked**_

**NOTE:**{:style="color:red;"} If you use a NAS device as your media library and it is Linux based it has an epoch date of 01/01/1970&nbsp;00:00. Files cannot have a date/time-stamp earlier than this. If you have any TV Show episodes whose original release date was earlier and you have the _Update files and folders with air date_ box ticked they will be set to 01/01/1970&nbsp;00:00.

_Automatically create merge rules for merged library episodes_ simply looks at the filename. If it matches one of the multi-episode regexes (see **[Options>Filename Processors]({{ site.baseurl }}/manual/options#filename-processors "Read about Filename Processors")**) it will create the appropriate merge rule.

If your library contains:
```
  ├─ My Favourite Show
  │   ├─ Season 1
  │   │  ├─ My Favourite Show - S01E01 - A Great Episode
  │   │  ├─ My Favourite Show - S01E02E03 - A Great Double Episode
  │   │  ├─ My Favourite Show - S01E05 - Another Great Episode
  │   │  ├─...
```

If disabled, E03 and E04 would be shown as "missing" (and E02E03 would be renamed as E02)

If enabled a new merge rule for S01E02E03 would be created and and only episode S01E04 would be shown as missing
 
_Default: **Un-ticked**_

_Automatically create missing folders_ simply gives TV&nbsp;Rename permission to create missing folders in the library without prompting.

_Default: **Un-ticked**_

_Bulk Add_ can be run from the TV&nbsp;Rename menu (see **[Tools>Bulk Add Shows]({{ site.baseurl }}/manual/tools#bulk-add-shows "Read about Bulk Add Shows")**) or as part of each scan.

The _Do Bulk Add as part of scan_ tick box enables or disables this option.

_Default: **Un-ticked**_

Looking at the _Bulk Add Shows from Library Folders_ section, three options are available.

The first two work as "junk filters".

_Only Include Folders containing Video Files_ if ticked restricts the "Bulk Add" scan to only include folders with video files.

_Default:_ _**Un-ticked**_

_Ignore Recycle Bin_ tells the "Bulk Add" scan to exclude the (Windows) Recycle Bin even if it contains video files.

_Default:_ _**Un-ticked**_

Finally, _Force to Use Season Words from Settings only_ tells the "Bulk Add" scan to just use the words entered in the associated text box when scanning to decide whether the series has a flat structure or a 'folder by season' structure.

| _Defaults:_ |
| _Force to Use Season Words from Settings only_ | _**Un-ticked**_ |
| _Season Search Terms_ | _**Season;Series;Saison;Temporada;Seizoen**_ |

The Last two preferences allow you to set the text for the "Specials" and "Season" folders - useful if you speak "English as a second language".

The _Specials folder name:_ text box allows you to modify the name used when creating a "Specials" folder for a show.

It is common practice for specials to be labeled as part of "Season 0" so for example: special 3 of "Battlestar Galactica" would be labeled "Battlestar Galactica - S00E03 - The Story So Far"  and stored (by default) in the "Specials" folder.

_Default:_ _**Specials**_

Similarly, the _Season folder format:_ text box allows you to customise the name used when creating a "Season" in your media library. (\{Season\} is replaced by the season number.)
 
_Default:_ _**Season \{Season\}**_

An entry of "Season {Season:2}" here will result in seasons using 2 digit numbers -

_Season 01, Season 02 etc._

The `Tags` button will pop up a list of the tags that TV&nbsp;Rename will recognise in the _Season folder format:_ text box.

An entry of "Season {Season:2}" here will result in seasons using 2 digit numbers -

_Season 01, Season 02 etc._ 

The `Tags` button will pop up a list of the tags that TV&nbsp;Rename will recognise in the _Season folder format:_ text box.

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {LIBRARY FOLDERS TAB] --- -->
