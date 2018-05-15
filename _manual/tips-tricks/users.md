<!-- START TIPS FROM OUR USERS --------------- -->
## Tips from our users

* You can change the behavior of some earlier versions of Windows 10 regarding mapped drives. In the registry under:
  
  **HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System**
  
  Create a new **DWORD (32 Bit)** named **EnableLinkedConnections** and set the value to **"1"**.  
  
  Restart Windows after making the change. All applications should now see the same mappings regardless of being in User or Admin mode.
  
  _**Jürgen**_

  {:.toplink}
[Return to Top]()
<!-- END TIPS FROM OUR USERS ----------------- -->

Current mode is: {{ jekyll.environment }}
