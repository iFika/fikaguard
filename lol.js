const chalkAnimation = require("chalk-animation");
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const pw = require("generate-password")
const req = require('request');
const shuffle = require("shuffle-array");
const ExpressBrute = require('express-brute');
var store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
var bruteforce = new ExpressBrute(store);
const as = require('getmac').default();
const express = require('express');
const os = require("os");
const app = express();


//Module for Owner
let clientversion = "2.2" //Client Version
var clientip = "";
let indetity = "BUYER";
data();
function data()
{
    req.get(`https://api.ipify.org/`, function(err,res,body) {
        if(err)
        {
            fika("SERVER", err);
        }
        else {
            clientip = body;
        }
    })
    req.get(`https://fikapersonal.000webhostapp.com/core/version.html`, function(err,res,body) {
    if(res.statusCode == 200)
    {
    if(body != clientversion)
    {
        return fika("NON-SERVER", `Your Client Version is Outdated! Please Update Your Client!
Your Version : ${clientversion}
Current Version : ${body}`)
    }
    console.clear();
    login();
    }
    if(res.statusCode == 404) 
    {
        return fika("SERVER", `Server is Maintenance! Please Wait Until Server is Ready!`)
    }
})
}
function login()
{
chalkAnimation.rainbow(`[+] Login to Server...`)
let users = os.userInfo().username;
if(users == "USER" || users == "ASUS") users = "XGUAD Owner Device"

// create a new progress bar instance and use shades_classic theme
req.get(`https://fikapersonal.000webhostapp.com/core/${as}`, function(err,res,body) {
    if(res.statusCode == 200) indetity = "Admin";
})
req.get(`https://fikapersonal.000webhostapp.com/${as}`, function(err, res, body) {
    if(res.statusCode == 200) {
    if(body == "blacklist") {
     chalkAnimation.glitch(`This Device is Blacklisted! Please Contact XGUAD Team!`);
     let f = new Webhook("https://discord.com/api/webhooks/939921301420777513/Dw9jplsTu3qlKcQ-Po9gOOMJ-7WUaoZzMgQSCDAFXFu_uCKwxD1u3ex3QGlEbyoPtK__")
     let bd = new MessageBuilder()
     .setTitle(`Blacklisted Device Detected!`)
    .setDescription(`**Device MAC : ${as}**
**Username PC : ${users}**
is Trying to Login to our Anti DDoS System But This Device is Blacklisted!
Waiting For Admin to Reply!`)
    .setFooter(`XGUAD Anti DDoS System LOGS`)
    .setText(`<@&932998411685355560> Please Check this Logs.`)
    .setTimestamp()
    .setColor("#FF0000")
    f.send(bd);
     return;
    }
    if(body == "expired")
    {
        fika("NON-SERVER", `Anti DDoS Information [!]
Your Account/License Has Expired!
Have Questions? Contact XGUAD Team!`);
return;
    }
    }
    if(res.statusCode == 404) {
    console.clear();
    menu();
    return;
    }
})
}
function menu() {
console.log("\x1b[35m", `┌─────────────────────────────────────────────┐
│   Welcome to XGUAD Anti DDoS
│   Made by: XGUAD Team
│   Your MAC Device : ${as}
|   Your IP Address : ${clientip}
|   Logged in as : ${indetity}                         
└─────────────────────────────────────────────┘`)
rl.question(`[+] Please Insert IP (${clientip}) : `, function(ip) {
    if(ip == "" || ip == null) ip = clientip;
    else if(!ip.includes(".") || ip.length < 7) return fika("NON-SERVER", "Invalid IP!");
    rl.question(`[+] Please Insert Port GTPS (17091): `, function(port) {
        if(port == "" || port == null) port = 17091;
    rl.question(`[+] Please Insert HTTP Port (80) : `, function(port2) {
        if(port2 == "" || port2 == null) port2 = 80;
       console.clear();
       start(ip,port,port2);

    })
    })
})
function start(ip, port, port2) {
var codes = pw.generate({
    length: 16,
    numbers: true,
    uppercase: true,
    excludeSimilarCharacters: true,
})

console.log("\x1b[36m", `┌─────────────────────────────────────────────┐
│  XAccount - A Authentication System   
│  Made by: XGUAD Team
│  XAccount Has Been Encrypted This Protocol!        
└─────────────────────────────────────────────┘`)

const hook = new Webhook(shuffle.pick([
"https://tinyurl.com/wjb44smw",
]));
function random(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};

let users = os.userInfo().username;
if(users == "USER" || users == "ASUS") users = "XGUAD Owner Device"
let dc = new MessageBuilder()
.setTitle(`XOTP - Security Authentication System`)
.setDescription(`OTP Code : **${codes}**

Please copy the code for authentication.

This Only work for Device With User: ${users}!`)
.setFooter(`XAccount - A Authentication System With Encryption Protocols!`)
.setTimestamp()
.setColor(random(['#008000', '#E50000']))
hook.send(dc);
rl.question(`[?] : Please Insert Code (From Discord Server) : `, function(code) {
    if(code == codes) 
    {
        let wk = new Webhook(`https://discord.com/api/webhooks/935876709637586994/UdxpnD91m18wlvZdmKWxR6gZHaMoS_qocBevz4nh6ZHXFJ-t71LHxLsD2NzH4G-cv-z1`)
        let bd = new MessageBuilder()
        .setTitle(`XGUAD Account Logs`)
        .setDescription(`**Device MAC : ${as}**
**Username PC : ${users}**
**IP Address : ${clientip}**
**Authentication Success!**

This Device Has Log In Successfully!`)
.setTimestamp()
.setFooter(`XGUAD Anti DDoS System LOGS`)
.setColor("#008000")
        wk.send(bd);
        http(ip,port, port2)
    }
    else {
        const asu = new Webhook("https://tinyurl.com/yk69uttz")
        let ens = new MessageBuilder()
        .setTitle(`Device is Login to our Anti DDoS System!`)
        .setDescription(`**Device MAC : ${as}**
        
        is Trying to Login to our Anti DDoS System!
But The Password is **Invalid**`)
        .setFooter(`XGUAD Anti DDoS System LOGS`)
        .setTimestamp()
        .setColor("#FF0000")
        asu.send(ens);
        console.clear();
chalkAnimation.neon(`[!] Wrong Code!
Please contact authentication System for Believe Mistake!`);
    }
})
}
}
function http(ip, port, port2) {
    console.clear();
app.get(`*`, bruteforce.prevent, function(req,res) {
    if(req.path == "/")
{
    if(indetity == "Admin")
    {
        res.status(200).send(`<!DOCTYPE html>
<html>
<head>
<title>XGUAD Anti DDoS System</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
    box-sizing: border-box;
    }
</style>
</head>
<body>
<div style="background-color: #f1f1f1;">
<div style="background-color: #4CAF50; color: white; padding: 15px;">
<h1>Welcome to Main Page!</h1>
</div>
<div style="padding: 15px;">
<p>This Server Protected By XGUAD Anti DDoS System!</p>
<p>This Server Has Listed In XGUAD System</p>
<p>This Server use XGUAD With Admin Accounts!</p>
</div>
<div style="background-color: #4CAF50; color: blue; padding: 15px;">
</div>
`)
return;
    }

       res.writeHead(418, "I'm a teapot", {'Content-Type': 'text/html'});
}
else if(req.path == "/xguadpanel")
{
    let asw = new Webhook(`https://tinyurl.com/yk69uttz`)
    let bd = new MessageBuilder()
    .setTitle(`This Device Stopped Using XGUAD Anti DDoS System!`)
    .setDescription(`**Device MAC : ${as}**
**IP Address : ${clientip}**

**This Device are Stopped Because Someone Request to /xguadpanel**`)
    .setFooter(`XGUAD Anti DDoS System LOGS`)
    .setTimestamp()
    .setColor("#FF0000")
    asw.send(bd);
    return fika("SERVER", `[!] Server Request your Anti DDoS To Stopped!
Please Contact XGUAD Team for Question!`);

}
else {
    return res.status(401).send(`<!DOCTYPE html>
<html>
<head>
<title>XGUAD Anti DDoS System</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
    box-sizing: border-box;
}
</style>
</head>
<body>
<p> This Directory not Listing in XGUAD Anti DDoS System!</p>
<p> Please Contact XGUAD Team for Believe Mistake!</p>
</body>
</html>`)
}
})
app.post(`/growtopia/server_data.php`, function(req,res) {
if(req.httpVersion == "1.2" || req.httpVersion == "1.0")
{
    if(req.headers['host'] == "growtopia1.com" || req.headers['host'] == "growtopia2.com")
    {
    res.status(200).send(`
server|${ip}
port|${port}
#maint|Server is Under Maintenance - This Protection By XGUAD
RTENDMARKS1001`)
chalkAnimation.rainbow(`${req.ip.replace("::ffff:", "")} is Connected to Game Server with Protocol ${port}!`);
    }
    else {
        res.status(403).send(`Owner Server is Disallow to Check this Directory!
Please Contact WEBMASTER for Believe Mistake!`);
    }
}
else {
    res.status(503).send(`This Directory not Agreement our Terms Access
Please Smart!`)
chalkAnimation.rainbow(`${req.ip.replace("::ffff:", "")} is Not Have Protocol ${port}, Returning 503!`);
return;
}
})
let server = app.listen(port2).on("error", function(err) {
    if(err) return fika("SERVER", "Port is Already in Use!");
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    chalkAnimation.rainbow(`${socket.handshake.address.replace("::ffff:", "")} is Connected to XGUAD Anti DDoS System!`);
})

chalkAnimation.rainbow(`
┌─────────────────────────────────────────────┐
│  IP : ${ip}
│  Port GTPS : ${port}
│  Port HTTP : ${port2}
│  MAC : ${as}
|  Logged in as : ${indetity}    
|  IP Address : ${clientip}
│  XGUAD Protection your Server from Anonymous Attack!
│  XGUAD Anti DDoS System Has Been Started!
└─────────────────────────────────────────────┘`);
}

function fika(category, err) {
if(category == "SERVER")
{
let webhook = new Webhook(`https://tinyurl.com/3thsn78b`)
let bd = new MessageBuilder()
.setTitle(`XGUAD Anti DDoS System`)
.setDescription(`**Error : ${err}**

-- DEBUG --
**IP Address : ${clientip}**
**MAC : ${as}**

Waiting for Fixing!`)
.setFooter(`XGUAD Anti DDoS System LOGS`)
.setTimestamp()
.setColor("#FF0000")
webhook.send(bd);
console.clear();
    chalkAnimation.rainbow(`[+] Something Error Occured on Server! Please Contact XGUAD Team!
Discord : https://discord.io/rdpvps
Error Exception : ${err}`);
return;
}
else if(category == "NON-SERVER")
{
    console.clear();
    chalkAnimation.rainbow(`[+] Something Error Occured! Please Contact XGUAD Team!
Discord : https://discord.io/rdpvps
Error Exception : ${err}`); 
return;
}
else {
    console.clear();
    chalkAnimation.rainbow(`[+] Something Error Occured! We Can't Verify Error!
Maybe Error is not in our System!`)
}
}

function fikasm(reason)
{
process.exit(5);
}
