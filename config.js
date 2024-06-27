const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://caesar:OLUSUNLE@cluster0.lmzgxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Gymo52/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Outlaw²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348078112891";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078112891";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_03_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjYzNkpKeGxCRk42ODRlbC9EOEowam1WN2xmQ0haM2V2eWxKNGxQN1puYTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAyMjIzNTA5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E3REZENjk4QTIyMjAyNEYzRkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTgwMjI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBuV0NETFlnUWNHc2NycVh6X2wzblFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTQ2ZTIzMWItNTIyNy00MzIyLTliMDEtYmZhMWU1YzE3OWE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgNjMsXG4gICAgICA2NSxcbiAgICAgIDE3OCxcbiAgICAgIDE5MSxcbiAgICAgIDM0LFxuICAgICAgMjQ5LFxuICAgICAgMTMwLFxuICAgICAgMTc3LFxuICAgICAgMTA2LFxuICAgICAgNzAsXG4gICAgICAxODMsXG4gICAgICAxODgsXG4gICAgICAzNCxcbiAgICAgIDExNCxcbiAgICAgIDI1LFxuICAgICAgNjcsXG4gICAgICAxODYsXG4gICAgICAxMjQsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMzEsXG4gICAgICA2OCxcbiAgICAgIDIxOCxcbiAgICAgIDIzNyxcbiAgICAgIDIzOCxcbiAgICAgIDE0LFxuICAgICAgNixcbiAgICAgIDE0MSxcbiAgICAgIDkyLFxuICAgICAgMjI2LFxuICAgICAgMTUsXG4gICAgICAxNTUsXG4gICAgICAxMDksXG4gICAgICAxMzksXG4gICAgICA1LFxuICAgICAgMTE0LFxuICAgICAgMjEsXG4gICAgICAxNjAsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV0ZoZXNIRUw2MzRyTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVrbkpaY2pSUjhvQUFvNTIvZlVOeXZaT2NYUzhTR2VKYjJiRno3R0o2Z2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUNCQ0J4R0c1bnQzc0ZyaThLUy95VGxuS2d5R2dJakdmS3RWTHlWUHErOGtLSUpXVkpKSk9xelRzN2x1Um5Pd1Y5YWNUUzZBRE1UU29IamlGVEREZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMU8reWFMREduY2luaFNaNmlnZE9VTWxtK2Y1V1BTNlJPUGxoVFh3MHFmT1crR0dlN0pCcFhnMVJxcGhDb3JuaFU1VjAvOW53aTJSRUF2eW5sQ2J3QXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDIyMjM1MDkxOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTQ5NzY1MDEzODMzNDE6NDZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ2Flc2FyXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDIyMjM1MDkxOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTgwMjI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVBSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNUFIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqQW5rSFpEbU9jS2Y5SEdnamE4VHB1RnJpeGVhMStlbWJOOXlHcFd1Z3FzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDM1MjYwMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE3NzE3NjY1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Outlaw²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Outlaw-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Caesar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-e20aljveXK3imt9IgaQhT3BlbkFJMphyLKWOubU5rhmKUlKx",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || " 3e57046161ccf9ac1f4b9e03828a5fe9";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
