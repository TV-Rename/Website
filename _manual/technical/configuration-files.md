<!-- START CONFIGURATION FILES --------------- -->
## Configuration Files

By default, all the configuration information and locally cached data from [TheTVDB](http://thetvdb.com "Visit TheTVDB.com") is stored in a series of XML files under the users Application folder (unless overridden using the command line option <span class="cli">/userfilepath</span>).

This is: -

> \\Users\\\<user-name\>\\AppData\\Roaming\\TV Rename

In either case the 2.1 folder contains the same set of files.

**If you wish to make a backup of your TV&nbsp;Rename setup a copy of this folder is all you need!**

It contains: -

| **layout.xml** | TV&nbsp;Rename's window position and size as well as column widths. |
| **settings.xml** | Everything else not mentioned is stored in here. All your shows, media library paths, folder structures and settings. As with TheTVDB.xml this is only overwritten when you choose **File>Save**. |
| **settings.xml.0&emsp;<br />-settings.xml.9** | backup copies of TV Rename settings.json (FIFO). |
| **statistics.xml** | TV&nbsp;Rename's historical statistics. |
| **tvdb.xml** | The locally cached tvdb.com show season and episode information for everything listed in the _**My Shows**_ tab. |
| **tvdb.xml.0<br />-tvdb.xml.9** | A maximum of ten backup copies of theTVDB.xml file. A new file gets created here every time you click **File>Save** on a first-in-first-out (FIFO) basis. |

{:.toplink}
[Return to Top]()
<!-- END  CONFIGURATION FILES ---------------- -->
