<!-- START FINDING --------------------------- -->
## Finding

### Functionality

Once a scan is complete, TV Rename will identify files to move/copy/rename and additional files to download/create. For episodes that are still missing, TV Rename will try and find them for you. 

### Types

There are 6 places it could search:

* _File System_ – If found it will remove the episode from the missing list and move the file into the correct place.

* _RSS Feed for torrent links_, _JSON Webpage for torrent links_ – If found then it will download the torrent file. (via uTorrent or qBittorrent) See [**The RSS/JSON tab**](manual/options/#the-rss-json-tab "The RSS/JSON Tab") for more information about configuration.

* _SABnzbd_, _uTorrent_, _qBittorrent_ – If found it will mark it as downloading so you know not to try and find the item again. See  [**The Torrents/NZB Tab**](/manual/options/#the-torrents--nzb-tab "The Torrents/NZBV Tab") for more informaiton.

### How to write a Regex for TV Rename

Firstly, get acquainted with what a regular expression is - these sites will help:

* [**regexone.com**](https://regexone.com/)

* [**www.regular-expressions.info**](https://www.regular-expressions.info/)

* [**regexr.com**](https://regexr.com/)

* [**regex101.com**](https://regex101.com/)

* [**www.rexegg.com**](http://www.rexegg.com/regex-quickstart.html)

Once you understand Regular Expressions and [**‘Named Groups’**](https://www.regular-expressions.info/named.html "Read about Named Groups") in particular then all you need to know is that TV Rename looks for 3 named groups:

* _S_ – The number series the file relates to.

* _E_ – The Episode number the file relates to.

* _F_ – (optional) If specified and if it matches then this is the max episode number that the file matches. It is used for instances when a file matches multiple episodes.

For Example: ‘S01E01-03’ would indicate that the file represents Series 1 and is episodes 1-3. In this case S=1, E=1 and F=3.

### Finding Rules

Note that if a file matches multiple missing files, or multiple files match one missing episode no action is taken. TV Rename will raise a warning in the log files and allow the user to manually link the file to the missing episode.

## Further Information

Further information can be found [**here**](/manual/options/#filename-processors) and [**here**](/manual/options/#the-%C2%B5torrent--nzb-tab).

## Future Ideas

There is a related "Feature Suggestion" on our Idea Wall [**here**](http://ideas.theideawall.com/TVRename/Forum/TopicDetails/e6663947-906a-4a91-95ae-e45a91c6efb0).

{:.toplink}
[Return to Top]()
<!-- END FINDING      ------------------------ -->
