<!-- START PREFERENCES {FILES & FOLDERS TAB] - -->
### The Files and Folders Tab

![Preferences - The Files and Folders tab]({{ site.baseurl }}/assets/images/options/preferences-files-folders-01.png){:.pic-l}
The Files and Folders tab is used to manipulate how TV&nbsp;Rename copies or moves files from the "[Search Folders]({{ site.baseurl }}/manual/options#the-search-folders-tab "Read about Search Folders")" to the "[Library Folders]({{ site.baseurl }}/manual/options#the-library-folders-tab "Read about Library Folders")".

The _Filename Replacements_ grid controls the replacement of illegal (Windows) characters in filenames.

If a filename contains a character that isn't supported in Windows  the grid is checked (row by row) to discover what to use instead of the problem character.

The grid can be edited using the `Add` and `Remove` buttons and case sensitivity can be turned off for specific rows using the _Case Ins._ check boxes.

_Video Extensions:_ tells TV&nbsp;Rename what to match when looking for video files. The entries should be semicolon delimited, not contain spaces and include the "." preceding the extension.

_Default: **.avi;.mpg;.mpeg;.mkv;.mp4;.wmv;.divx;.ogm;.qt;.rm**_

_Other Extensions:_ follows the same rules as _Video Extensions_ but the file extensions specified are for video related files rather than actual videos. Files with these extensions will be renamed when scanning through the library.

| _Defaults:_ |
| _**.srt**_ | Subtitles in text format.|
| _**.nfo**_ | An XML style file that contains information about the video, such as a title, summary, list of actors, year of production etc. This information is often used by media players to provide a more immersive viewing experience.|
| _**.txt**_ | Text files can be any text but quite often, if the base name of the text file is the same as that of the video file, they contain subtitles in text format. |
| _**.tbn**_ | A KODI/XBMC specific jpeg. 

This second list deals with files you'd like to copy/move when TV&nbsp;Rename finds a missing episode in the search folders. The extensions may be different from those used in the library list because (for example) you may not want .nfo files not to be copied from the search folders but created by your media centre. Once created then you'll want them to be renamed with the source file(s).

It is common practice for files related to a specific video to have the same base name.

For example: BigBuckBunny.avi, BigBuckBunny.sub and BigBuckBunny.nfo. This helps keep them organised.

TV Rename knows this, hence the _Copy/Move file with same base name as video_ tick-box which gives you the ability to turn this functionality on or off. 

_Default:_ _**Ticked**_

The _Do_ drop-down and text box underneath provide a degree of granularity to this function.

If _Do_ is set to **All** the extensions listed in the text box are ignored.

If _Do_ is set to **All but these** the extensions listed in the text box are treated as an exclude list.

If _Do_ is set to **Just** the extensions listed in the text box are treated as an include list.

| _Defaults_ | |
| _Do_ drop down | _**All**_ |
| Text box contents | _**.srt;.nfo;.txt;.tbn**_ |

_Ignore "sample" videos_ and _Make all filenames lower case_ tick boxes need no further explanation.

The _**Subtitles**_ section is used to tell TV&nbsp;Rename how to handle subtitle files in your collection.

The Retain Language Specific Subtitles tick box (when ticked) tells TV&nbsp;Rename to retain subtitle files containing two or three letter language codes. For example: -

Video S01E01.en.srt

Subtitles must be of the form \*.language.extension, where language is 2 or 3 characters.

_Default:_ _**ticked**_

Subtitle files come in a number of guises of which one of the most common is a .sub file. These are text files structured in a way that media players can establish the start time, finish time and content of a subtitle and display it. Quite often sources for these files give them a .txt extension, for example: BigBuckBunny.txt. Ticking the "Rename .txt to .sub" option will tell TV&nbsp;Rename to rename these files when copied or moved.

_Default:_ _**Un-ticked**_

The _Subtitle extensions:_ text box lists the commonly used subtitle extensions.

_Default:_ _**.srt;.sub;.sbv;.idx**_


{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {FILES & FOLDERS TAB] --- -->
