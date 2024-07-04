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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_37_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9NMnBrK2NiMnNEVHF1aitISjRvblZzdzV2dkRFZ25WLytRSmErZTZNTjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MTM3Mjc4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjk3RDNENDYxODkzMEFEQTU4OTZEMzcyNERGODExMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTE0NjM3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MTM3Mjc4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkNCRDc1NDM3QTJFQjNCMUYzNjQwNDBGOUI5MkFGRURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTE0NjM3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MTM3Mjc4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjVEMTRCNDg3RDQxRjlDMjhGODQ0RjlFM0RCM0M4ODNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTE0NjM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MTM3Mjc4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUU0MzhDMTkyNTc3RjVCNjhDRjIyNjIzM0Q0MTg5MENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTE0NjM5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdUT1JFMGNPVEhpMlAxY0hQZXd5QWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTYzMDA3OGItMDcyMC00NThhLThiYWUtMTE3ZGFmMjVmMmUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDMxLFxuICAgICAgMjI0LFxuICAgICAgMTAzLFxuICAgICAgMTQ5LFxuICAgICAgNDEsXG4gICAgICAxOTksXG4gICAgICAxOTAsXG4gICAgICAyNTAsXG4gICAgICAxNzQsXG4gICAgICA1MSxcbiAgICAgIDI2LFxuICAgICAgNjksXG4gICAgICAxNSxcbiAgICAgIDEzNSxcbiAgICAgIDE3LFxuICAgICAgMjAxLFxuICAgICAgMjcsXG4gICAgICAxMTgsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMzEsXG4gICAgICAyMzUsXG4gICAgICA4MyxcbiAgICAgIDMxLFxuICAgICAgMTk0LFxuICAgICAgMTg3LFxuICAgICAgMjEsXG4gICAgICA1NyxcbiAgICAgIDE2NCxcbiAgICAgIDIyLFxuICAgICAgNixcbiAgICAgIDcyLFxuICAgICAgMTEzLFxuICAgICAgMTU2LFxuICAgICAgMTczLFxuICAgICAgMTE3LFxuICAgICAgMjUzLFxuICAgICAgMTcxLFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1pZOExKUEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjEzNzI3ODA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdsZW5cIixcbiAgICBcImxpZFwiOiBcIjI3NjcyOTQ0MDY2NjE5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pIeEtRQ0VNaTdtN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWZVBpbUYyRFpTRjNsZlJQWCtDWnF3OXdBdmphOU9Jb3JMQ0FwTnllWWxzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkp6R2hSbXVBaENkR3hob2xJMVFkakVMb1Azd1QvN3pjOFpQNGpQQ004anZ4V2hPaHdVbXc1QnlFS1RtZTNERnZjTVN1VW93cXN0RzZlU0ZkZjMrckJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJuS0dYMU1LRy9xblRqWlB0WERzdDYrTEROMi9Td0l2NFRlell2NDlxZGVjUmQvWk5ka3F4VFg2YWh5WkdIamVkY21OWVBrVUtDVUI3cXlsbzZLcERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjEzNzI3ODA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMTQ2MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOaE9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5oTy5qc29uIjogIntcImtleURhdGFcIjpcIlAvRWkvKzVuNmdxVTFqMnFmZ3UxR2Mzb1k5cjVuc1NvTnhsb2ZtMUJMTFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjEzNDkxNjkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMTQ2MzY0MjdcIn0iCn0="


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-ho7djAX85egCHngNeRC3T3BlbkFJoRGfasQyJrktJZWdxu0c",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || " 382461a4a0b0e16cefda7ee92c59c87e";
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
