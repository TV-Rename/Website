<!-- START PREFERENCES {TORRENTS/NZB TAB] ---- -->
### The Torrents / NZB Tab

![Preferences - the Torrents / NZB tab]({{ site.baseurl }}/assets/images/options/preferences-torrent-nzb-01.png){:.pic-l}
Some of the contents of this tab are used in conjunction with the *[Scan Options](#the-scan-options-tab)* tab.

"The Torrent RSS URLs:" can be any suitable RSS-feeds provided by indexers or public RSS websites and are used to search for missing files.

`Add` and `Remove` allow you to add and remove feeds, and `Open` presents the highlighted feed in a web browser.

TV Rename can check µTorrent qBittorent and SABnzbd queues and uses the information on this tab to know where to look for more information.

Both the "Host Port" and "API Key" are required to use this functionality in SABnzbd.

If you use µTorrent, TV&nbsp;Rename needs to know the "Application" and "resume.dat" paths, (they can be found with the `Browse` buttons) so it can detect if files are queued or in the process of being downloaded.

TV&nbsp;Rename uses the qBittorrent web interface to interrogate its status so you must turn on the Web UI in qBittorrent and tell it to "Bypass authentication for clients on localhost" if you wish to use this client. In addition TV&nbsp;Rename needs to know the host name and port for the interface so it can communicate with the client (defaults shown).

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {TORRENTS/NZB TAB] ------ -->
