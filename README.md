# PA-Diag

Produce a report on loaded mods for support and debugging.

Activates by keybinding, which defaults to ctrl+shift+alt+d You need to be in the lobby (new_game) or game (live_game) to capture active server mods.

## Sample

{
  "date": "2014-11-28T02:00:00.187Z",
  "build_version": "75539",
  "os": "osx",
  "has_steam_client": false,
  "is_steam_client_online": false,
  "locale": "en-us",
  "screen": {
    "availWidth": 1920,
    "availHeight": 1035,
    "availTop": 0,
    "availLeft": 0,
    "pixelDepth": 24,
    "colorDepth": 24,
    "width": 1920,
    "height": 1035
  },
  "location": "coui://ui/main/game/new_game/new_game.html",
  "client_mods": [
    {
      "author": "pamm-atom",
      "version": "1.0.0",
      "context": "client",
      "description": " ",
      "dependencies": [],
      "signature": "not yet implemented",
      "display_name": "PA Mod Manager",
      "identifier": "com.pa.deathbydenim.dpamm"
    },
    {
      "author": "wondible",
      "version": "0.1.0",
      "context": "client",
      "description": "Produce a report on loaded mods for support and debugging.",
      "dependencies": [],
      "signature": "not yet implemented",
      "display_name": "PA-Diag",
      "identifier": "com.wondible.pa.padiag"
    }
  ],
  "server_mods": [],
  "scene_mod_list": {
    "armory": [],
    "building_planets": [],
    "connect_to_game": [],
    "game_over": [],
    "icon_atlas": [],
    "live_game": [],
    "live_game_econ": [],
    "live_game_hover": [],
    "load_planet": [],
    "lobby": [],
    "matchmaking": [],
    "new_game": [],
    "replay_browser": [],
    "server_browser": [],
    "settings": [],
    "social": [],
    "special_icon_atlas": [],
    "start": [],
    "system_editor": [],
    "transit": []
  },
  "global_mod_list": [
    "coui://ui/mods/padiag/padiag.js"
  ]
}

## Possible Extensions

- selected server
- dialog to select export options
- settings (sanitize)
- local storage (sanitize)
- session storage (sanitize)
- target files (to check shadowing results)
- Challenge mode: checksum validate any game files likely to be shadowed (could the uberlauncher update apis be used for this?) and return the modified files
- logs???
- debugger console output???
