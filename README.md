# gdcraftjs

# Status:
 * Prototyping
 * Unstable builds.

# Information:
  This is for godot 4.0 server, database, network and other testing.

  For handle server relay hosting server list information access.

  It will have multiple connections to handle the loads for main server query for register relay servers, chat rooms, login, request access. There will different connection to handle since limited to bandwidth or loads.

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

