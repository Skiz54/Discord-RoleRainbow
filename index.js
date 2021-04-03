const Discord = require("discord.js");
const client = new Discord.Client();


let config = require("./config.json");
client.config = config;

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let time = (`[${hour}:${minute}:${second}] | `);

client.on('ready', () => {

    console.log(time + `\x1b[32m%s\x1b[0m`, '[ OK ]', '\x1b[0m', 'Connection to the Discord.js API ');
    console.log(time + `\x1b[36m%s\x1b[0m`, '[INFO]', '\x1b[0m', 'Connected to ' + client.user.username + '#' + client.user.discriminator);

    client.user.setActivity("Discord-RoleRainbow", {type: "PLAYING"});

    if (config.speed < 60000) {
     console.log(time +`\x1b[33m%s\x1b[0m`, '[WARNING]', '\x1b[0m', 'The recommended speed is 60.000, if you abuse this speed, your robot can be banned from the IP!');
    }
    
    var color = config.color
    var i = 0;
    setInterval(function() {
      client.guilds.cache.get(config.server_ID).roles.cache.get(config.role_ID).setColor(color[parseInt(i, 10)]);
      if (color[parseInt(i + 1)]) {
        i++;
      } else {
        i = 0;
      }
    }, config.speed);

});

client.login(config.token);