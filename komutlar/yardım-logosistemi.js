const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
<:party:862345365066612756> ${prefix}arrow: \n **Ok şeklinde logo yapar.**
<:party:862345365066612756> ${prefix}gold: \n **Altın şeklinde logo yapar.**
<:party:862345365066612756> ${prefix}green: \n **Yeşil şeklinde logo yapar.**
<:party:862345365066612756> ${prefix}grafiti: \n **Graffiti şeklinde logo yapar.**
`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};