const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();


let config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
client.config = config;

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let time = (`[${hour}:${minute}:${second}] | `);

client.on('ready', () => {

    console.log(time + `\x1b[32m%s\x1b[0m`, '[ OK ]', '\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
    console.log(time + `\x1b[36m%s\x1b[0m`, '[INFO]', '\x1b[0m', 'Connecté sur ' + client.user.username + '#' + client.user.discriminator);

    client.user.setActivity("Discord-RoleRainbow", {
     type: "PLAYING",
    });

    if (config.speed < 60000) {
     console.log(time +`\x1b[33m%s\x1b[0m`, '[WARNING]', '\x1b[0m', 'The minimum speed is 60.000, if this gets abused your bot might get IP-banned !');
 }
// setInterval(changeColor, config.speed);
 //changeColor();

});

client.on('message', message => {

    
})

client.login(config.token);