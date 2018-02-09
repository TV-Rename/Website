<!-- START TORRENT MATCH -------------------- -->
## Torrent Match

The "Torrent Match" tab lets you rename files, so their names match what is in a .torrent file. This is done using the torrent hashes, so it will work on any type of file, as long as it is big enough for a partial hash to be completed.

Choose the .torrent file, and folder of files to rename. If you choose a "Copy To" location, the files will be copied to their new names, leaving the originals intact. If it is off, then they will be renamed in place. 

Currently, TVRename can only process single file torrents, and multi-file torrents without sub folders in them.

After clicking "Go", the torrent file will be processed. This can take a while if the torrent file has a lot of items in it, or there are a lot of potential matches in the "Folder" you have selected.

If processing is successful, you will be taken to the rename or finding and organising tab, to see the suggested operations. Your files will only be modified if you click "Rename" or "Move/Copy" from there.

It's not possible to rename the files in (a multiple file) torrent, to match what you have on disk. Changing the names affects the hash, which makes it a different torrent from the tracker's point of view. Because of this, TVRename renames the files on disk instead.

{:.toplink}
[Return to Top]()
<!-- END TORRENT MATCH ---------------------- -->
