# gdcraftjs

# Information:
  This is for godot 4.0 server, database, network and other testing.

  For handle server relay hosting server list information access.

  For example minecraft have two or three type of way to handle connections.

# Design:
 * chat server
 * game server
 * relay server
 * database
 * auth

# server:
  It will set up connection tmp connection. By tcp or websocket with low polling.

## Godot Game:
  * web socket / tcp (connect to main server for register and request access)
  * multiplayer peer server (main)


# Reason:
  * Due to ip address leaking to the small need some proxy auth accounts.
  * 

