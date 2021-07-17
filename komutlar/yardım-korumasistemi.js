const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
let gif = ``

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
<:moderator:862346164044431370> ${prefix}ban-koruma #kanal: \n **Ban koruma sistemini açar.**
<:moderator:862346164044431370> ${prefix}ban-koruma-sıfırla: \n **Ban koruma sistemini sıfırlar.**
<:moderator:862346164044431370> ${prefix}kanal-koruma #kanal: \n **Kanal koruma sistemini açar.**
<:moderator:862346164044431370> ${prefix}kanal-koruma-sıfırla: \n **Kanal koruma sistemini sıfırlar.**
<:moderator:862346164044431370> ${prefix}rol-koruma #kanal: \n **Rol koruma sistemini açar.**
<:moderator:862346164044431370> ${prefix}rol-koruma-sıfırla: \n **Rol koruma sistemini sıfırlar.**
<:moderator:862346164044431370> ${prefix}spam-koruma: \n **Spam koruma sistemini açar.**
<:moderator:862346164044431370> ${prefix}spam-koruma-kapat: \n **Spam koruma sistemini kapatır.**`)
 .setFooter(`Knox`)
 .setTimestamp()
 .setImage(gif)
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'korumasistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};