<!-- START PREFERENCES {FILES & FOLDERS TAB] - -->
### The Files and Folders Tab

![Preferences - The Files and Folders tab]({{ site.baseurl }}/assets/images/options/preferences-files-folders-01.png){:.pic-l}
The "Filename Replacements" grid controls the replacement of illegal characters in filenames.

If the filename contains a character that isn't supported in a windows filename the grid is checked row by row to discover what to use instead of the problem character.

"Video Extensions:" tells TV&nbsp;Rename the extensions to match when looking for video files. The entries should be semicolon delimited, not contain spaces and include the "." preceding the extension.

"Other Extensions:" follows the same rules as "Video Extensions" but the file extensions specified are typically for video related files rather than video. The extensions listed by default are :-

| *.srt* | Subtitles in text format.|
| *.nfo* |An XML style file that contains information about the video, such as a title, summary, list of actors, year of production etc. This information is often used by media players to provide a more immersive viewing experience.|
| *.txt* |Text files can be any text but quite often, if the base name of the text file is the same as that of the video file, they contain subtitles in text format.
| *.tbn* |A KODI/XBMC specific jpeg.

It is common for files to have the same base name for example: BigBuckBunny.avi, BigBuckBunny.sub and BigBuckBunny.nfo. This helps keep them organised.

TV Rename knows this, hence the "Copy/Move file with same base name as video" tick-box. Which gives you the ability to turn this functionality on or off.

_Default:_ _**Ticked**_

The "Do" drop-down and text box underneath provide a degree of granularity to this function.



The next four items affect how TV&nbsp;Rename creates folders in your media library and recognises seasons when searching.

The "Leading 0 on Season Numbers" tick-box simply tells TV&nbsp;Rename to use "Season 01"  instead of "Season 1" etc. when creating new folders.

_Default:_ _**Un-ticked**_

The next three preferences will be of special interest to those of you who speak "English as a second language". You can now set the folder names used for "Seasons" and "Specials", and the text recognised as "Season" when searching.

The "Specials folder name:" text box allows you to modify the name used when creating a "Specials" folder for a show. 

It is common practice for specials to be labeled as part of "Season 0" so for example: special 3 of "Battlestar Galactica" would be labeled "Battlestar Galactica - S00E03 - The Story So Far"  and stored (by default) in the "Specials" folder.

_Default:_ _**Specials**_

Similarly, the "Season folder name:" text box allows you to customise the name used when creating a "Season" in your media library.

_Default_ _**Season**_

The "Season search terms:" text box provides TV&nbsp;Rename with a list of semicolon separated words that TV&nbsp;Rename will recognise as part of a season identifier when searching.

_Default_ _**Season;Series;Saison;Temporada;Seizoen**_

The rest of the options in this pane are straightforward and need no explanation.

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {FILES & FOLDERS TAB] --- -->
