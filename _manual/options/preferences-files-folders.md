<!-- START PREFERENCES {FILES & FOLDERS TAB] - -->
### The Files and Folders Tab

![Preferences - The Files and Folders tab]({{ site.baseurl }}/assets/images/options/preferences-files-folders-01.png){:.pic-l}
The "Filename Replacements" grid controls the replacement of illegal characters in filenames.

If the filename contains a character that isn't supported in a windows filename the grid is checked row by row to discover what to use instead of the problem character.

"Video Extensions:" tells TV&nbsp;Rename the extensions to match when looking for video files. The entries should be semicolon delimited, not contain spaces and include the "." preceding the extension.

"Other Extensions:" follows the same rules as "Video Extensions" but the file extensions specified are typically for video related files rather than video. These are the extensions that TV Rename will look at when scanning through the library. The extensions listed by default are :-

| *.srt* | Subtitles in text format.|
| *.nfo* |An XML style file that contains information about the video, such as a title, summary, list of actors, year of production etc. This information is often used by media players to provide a more immersive viewing experience.|
| *.txt* |Text files can be any text but quite often, if the base name of the text file is the same as that of the video file, they contain subtitles in text format.
| *.tbn* |A KODI/XBMC specific jpeg.

It is common for files to have the same base name for example: BigBuckBunny.avi, BigBuckBunny.sub and BigBuckBunny.nfo. This helps keep them organised.

TV Rename knows this, hence the "Copy/Move file with same base name as video" tick-box. Which gives you the ability to turn this functionality on or off. This second list of extensions deals with the extensions you'd like to copied across when TV rename finds the missing episode in the search folders.

_Default:_ _**Ticked**_

The "Do" drop-down and text box underneath provide a degree of granularity to this function.

The _Ignore "sample" videos_ and _Make all filenames lower case_ tick boxes need no further explanation.

The _**Subtitles**_ tab is used to tell TV&nbsp;Rename how to handle subtitle files in your collection.

The Retain Language Specific Subtitles tick box (when ticked) tells TV&nbsp;Rename to retain subtitle files containing two or three letter language codes. For example: -

Video S01E01.en.srt

Subtitles must be of the form \*.language.extension, where language is 2 or 3 characters.

_Default:_ _**ticked**_

Subtitle files come in a number of guises of which one of the most common is a .sub file. These are text files structured in a way that media players can establish the start time, finish time and content of a subtitle and display it. Quite often sources for these files give them a .txt extension, for example: BigBuckBunny.txt. Ticking the "Rename .txt to .sub" option will tell TV&nbsp;Rename to rename these files when copied or moved.

_Default:_ _**Un-ticked**_
{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {FILES & FOLDERS TAB] --- -->
