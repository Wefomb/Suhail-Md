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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_13_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9HWGFyRnJWQzd1YVpnOUhxNHJEMFViZVp5OVowTHpnenBFNHdWRWtiTFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EzQzA0MDc5RjRCRjc3NzRCQThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzAyODI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5ODlGMUIyRDY2RDVBNjI2Q0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzAyODMzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklGQXJNRmpiU1N5V2xiSkhGaXdVT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTMxOThlYWQtYWEwMi00NWZhLTg5YzEtMDcyNmY4YWM3OGUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgODMsXG4gICAgICAyMTcsXG4gICAgICAxODQsXG4gICAgICAxODUsXG4gICAgICA2NyxcbiAgICAgIDIyNSxcbiAgICAgIDY5LFxuICAgICAgMTE5LFxuICAgICAgOSxcbiAgICAgIDk1LFxuICAgICAgMTI3LFxuICAgICAgMjcsXG4gICAgICAyMzUsXG4gICAgICAzOCxcbiAgICAgIDE5OSxcbiAgICAgIDgxLFxuICAgICAgNzcsXG4gICAgICAxNTEsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDI1MCxcbiAgICAgIDE1NyxcbiAgICAgIDIxNyxcbiAgICAgIDEzMSxcbiAgICAgIDIzNCxcbiAgICAgIDE0NyxcbiAgICAgIDE1OSxcbiAgICAgIDcxLFxuICAgICAgMTY2LFxuICAgICAgNTcsXG4gICAgICAyOSxcbiAgICAgIDEyMyxcbiAgICAgIDIyNyxcbiAgICAgIDg0LFxuICAgICAgMjIwLFxuICAgICAgMTgsXG4gICAgICAxMjIsXG4gICAgICAyMDUsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZXZnUGNORUtlcWdyUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1MeGsyOGlkWHVyTEs1ZUJnRTQ2SS9PZXFTUjdmOVdRZ1hnMjRudGEwRFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYTRqQ2pWbXRObTJnVFkwQWxNOCtqcmxiZ2VCeU8xb0t5WWt0UlFJZVZCa1A0TGhwcHJ2NWRQeCtUMVE3UjExRkFCMHdhU2NJamtsbVhKMmVrM29wQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmNNajduWWlCbWNXY1JlWlRIeVg4aGRWMlExREZqd3pxMDdGOXZWZnFMMjVFQlhpdWhVWThZV3E5aWVJcHRtend0N25YbUlYUG1mK1pWcEpURForQWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc4MTEyODkxOjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2Flc2FyXCIsXG4gICAgXCJsaWRcIjogXCI4ODE1MDQxMjE1MjkyMTo0NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzgxMTI4OTE6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3MDI4MjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMTTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNMC5qc29uIjogIntcImtleURhdGFcIjpcInJSVllkU3h6c1JYNHoxNHpUcTdhRkUzSXltVmZDSUJEU2ZQUlR3NkZQdDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk1MzQ1MDg2MzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3UkpZQ1lCVi9JakNad3FoS2tTc0FyTWNxekVTOEozRUd2VWNpVkQ2aTdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUzNDUwOTk2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNMy5qc29uIjogIntcImtleURhdGFcIjpcIisvUzJsaVRyNUVMYy9nQ3E2Z2txLzhxcXgzM2FVU0ZrMnp1a0ttTUg1Y0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCw1LDRdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTcwMjcwMjMyMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNNC5qc29uIjogIntcImtleURhdGFcIjpcIjVDWTJHYkdvVUdLckhBTlpOUGJCYkcvR3dKUTdWS0tXTlIwaElXeGxLUEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MDI3MDM5MTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFSm9jdXJKcEFHOTdMTURJKyttVEhkNkVOUzZodDY4ZDFsdlpLdVBJaDRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzAyNzIyNzk4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE03Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZnY0WmNySVN6LzBnZUt1enY3VElsOUhuU2lLeGRwTWxpK2lFdFlYWWJqbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzM5MjI4MTUxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbNSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MDI3MjU0NjJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwQkJYM0NaN0xac0xPZEVidjd0Wno1ZC9QOVpOemhUL0ovM3ZZeUROYjgwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTQ4Mjg4NzI1M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNeC5qc29uIjogIntcImtleURhdGFcIjpcIkN3ZHpCdVZOYmlva3ZlZXFjZlZoOHpoVWptZHFTemlpaWt1cUpvK3VWQW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk1MzM3ODA0ODhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkYjFFWUNvcklJUzg5aURyK0N2aEFKMkxvbkdYeHVoV1J3NW9Nem1FNVFrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUzMzc4MTc0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
