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

The next two preferences allow you to set the text for the Specials and Season folders - useful if you speak "English as a second language".

The "Specials folder name:" text box allows you to modify the name used when creating a "Specials" folder for a show.

It is common practice for specials to be labeled as part of "Season 0" so for example: special 3 of "Battlestar Galactica" would be labeled "Battlestar Galactica - S00E03 - The Story So Far"  and stored (by default) in the "Specials" folder.

_Default:_ _**Specials**_

Similarly, the "Season folder format:" text box allows you to customise the name used when creating a "Season" in your media library.

_Default_ _**Season \{Season\}**_

The _Ignore "sample" videos_ and _Make all filenames lower case_ tick boxes need no further explanation.

The final two options help TV&nbsp;Rename when replacing videos that already exist in the library.

The "Priority override terms:" text box defines the "hints" used to determine if a video has been improved at source.

_Default:_ _**PROPER;REPACK;RERIP**_ (Note the semicolon delimiter).

"Consider a file better if it is **X%** higher resolution/longer tells TV&nbsp;Rename to replace an existing library file if the newly found version is higher resolution and/or longer.

_Default:_ _**10**_% 

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {FILES & FOLDERS TAB] --- -->
