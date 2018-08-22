<!-- START TIPS FROM OUR USERS --------------- -->
## Tips from our users

* If your media library uses removable media to store files the assigned drive letter changing each time a usb device is plugged in can be a real pain.
  
  A small tweak in Windows settings will "fix" the drive letter for the device in question.
  
  There are numerous internet guides for doing this, "Google" is your friend...
  
  The following link will get you started:&nbsp;-
  
  **[Google "fix usb drive letter assignment"]( https://www.google.co.uk/search?q=fix+usb+drive+letter+assignment "perform Google search")**

  _**Andy B**_

* You can change the behavior of some earlier versions of Windows 10 regarding mapped drives. In the registry under:
  
  **HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System**
  
  Create a new **DWORD (32 Bit)** named **EnableLinkedConnections** and set the value to **"1"**.  
  
  Restart Windows after making the change. All applications should now see the same mappings regardless of being in User or Admin mode.
  
  _**Jürgen**_

  {:.toplink}
[Return to Top]()
<!-- END TIPS FROM OUR USERS ----------------- -->
