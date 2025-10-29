var world = "player_world"
var worldName = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + world + "%")
var region = "worldguard_region_name"
var regionName = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + region + "%");

function hasKit(){

  if (worldName == "spawn") {
    if (regionName == "shop") {
      return "&6ᴀʙɪɢᴀɪʟ'ꜱ ꜱʜᴏᴘ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "guild") {
      return "&#DAA520ᴀᴅᴠᴇɴᴛᴜʀᴇʀ'ꜱ ɢᴜɪʟᴅ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "workerquarter") {
      return "&#954535ᴡᴏʀᴋᴇʀꜱ' Qᴜᴀʀᴛᴇʀ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "blacksmith") {
      return "&#AA4A44ʙʟᴀᴄᴋꜱᴍɪᴛʜ'ꜱ ʜᴏᴜꜱᴇ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "prize_corner") {
      return "&eᴘʀɪᴢᴇ ᴄᴏʀɴᴇʀ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "dungeon_portal") {
      return "&#915F6Dᴅᴜɴɢᴇᴏɴ ᴘᴏʀᴛᴀʟ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "ah") {
      return "&6ᴀᴜᴄᴛɪᴏɴ ʜᴏᴜꜱᴇ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "library") {
      return "&#5885AFʟɪʙʀᴀʀʏ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "hall_of_fame") {
      return "&6ʜᴀʟʟ ᴏꜰ ꜰᴀᴍᴇ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "jeweler") {
      return "&#89CFF0ᴊᴇᴡᴇʟᴇʀ'ꜱ ʜᴏᴜꜱᴇ"
    }
  }

  if (worldName == "spawn") {
    if (regionName == "alchemy_room") {
      return "&#ffb2aeᴀʟᴄʜᴇᴍʏ ʀᴏᴏᴍ"
    }
  }

  if (worldName == "spawn") {
    return "&#d1d1d1ᴅʀᴀꜰᴏʀᴅ ᴋɪɴɢᴅᴏᴍ"
  }

  if (worldName == "world_nether") {
    return "&#EE4B2Bᴛʜᴇ ɴᴇᴛʜᴇʀ"
  }

  if (worldName == "world") {
    return "&#50C878ᴛʜᴇ ᴏᴠᴇʀᴡᴏʀʟᴅ"
  }

  if (worldName == "world_the_end") {
    return "&#753a97ᴛʜᴇ ᴇɴᴅ"
  }

  if (worldName.startsWith("veil_")) {
    return "&#753a97ᴛʜᴇ ᴠᴇɪʟ"
  }

  if (worldName.startsWith("cveil_")) {
    return "&#6b1529&lᴄᴏʀʀᴜᴘᴛᴇᴅ &#853a4cᴛʜᴇ ᴠᴇɪʟ"
  }

  return "&8 ʟᴏᴄᴀᴛɪɴɢ...";
}

hasKit();