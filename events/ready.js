const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"https://discord.gg/r4vSJ8V4Xj",
"www.knoxbot.tk",
    "k!yardım 🔥"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://discord.gg/r4vSJ8V4Xj' })
}, 5000);
    console.log(`Bot Hazır | youtube.com/asreaper`);
}