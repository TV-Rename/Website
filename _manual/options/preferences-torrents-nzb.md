<!-- START PREFERENCES {TORRENTS/NZB TAB] ---- -->
### The Torrents / NZB Tab

![Preferences - the Torrents / NZB tab]({{ site.baseurl }}/assets/images/options/preferences-torrent-nzb-01.png){:.pic-l}

TV Rename can check SABnzbd µTorrent and qBittorent queues and uses the information on this tab to know where to look for more information.

**NOTE:**{:style="color:red;"} to activate this tab the _Missing Check_ box on the _**General**_ tab **MUST** be ticked.

Both the "Host Port" and "API Key" are required to use this functionality in SABnzbd.

If you use µTorrent, TV&nbsp;Rename needs to know the "Application" and "resume.dat" paths, (they can be found with the `Browse` buttons) so it can detect if files are queued or in the process of being downloaded.

TV&nbsp;Rename uses the qBittorrent web interface to interrogate its status so you must turn on the Web UI in qBittorrent and tell it to "Bypass authentication for clients on localhost" if you wish to use this client. In addition TV&nbsp;Rename needs to know the host name and port for the interface so it can communicate with the client (defaults shown).

| _Defaults_ | | |
| | Check SABnzdb queue | _**Un-ticked**_ |
| | Check µTorrent queue | _**Un-ticked**_ |
| | Check qBittorrent queue | _**Un-ticked**_ |

{:.toplink}
[Return to Top]()
<!-- END PREFERENCES {TORRENTS/NZB TAB] ------ -->
