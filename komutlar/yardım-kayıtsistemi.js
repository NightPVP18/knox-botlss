const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(`:notepad_spiral: ${prefix}alınacak-rol @rol: \n **Kayıt edilen kişiden alınacak rolü ayarlar.**
:notepad_spiral: ${prefix}alınacak-rol sıfırla: \n **Kayıt edilen kişiden alınacak rolü sıfırlar.**
:notepad_spiral: ${prefix}kayıt-kanal #kanal: \n **Kayıtın yapılacağı kanalı belirlersiniz.**
:notepad_spiral: ${prefix}kayıt-kanal sıfırla: \n **Kayıtın yapılacağı kanalı sıfırlarsınız.**
:notepad_spiral: ${prefix}kayıt-hg #kanal: \n **Kayıt hoş geldin kanalını ayarlarsınız.**
:notepad_spiral: ${prefix}kayıt-hg sıfırla: \n **Kayıt hoş geldin kanalını sıfırlarsınız.**
:notepad_spiral: ${prefix}kayıt-yetkili @rol: \n **Kayıt edebilecek yetkiyi ayarlar.**
:notepad_spiral: ${prefix}kayıt-yetkili sıfırla: \n **Kayıt edebilecek yetkiyi sıfırlar.**
:notepad_spiral: ${prefix}erkek-rol @rol: \n **Kayıt edilince verilecek erkek rolü ayarlar.**
:notepad_spiral: ${prefix}erkek-rol sıfırla: \n **Kayıt edilince verilecek erkek rolünü sıfırlar.**
:notepad_spiral: ${prefix}kız-rol @rol: \n **Kayıt edilince verilecek kız rolü ayarlar.**
:notepad_spiral: ${prefix}kız-rol sıfırla: \n **Kayıt edilince verilecek kız rolünü sıfırlar.**
:notepad_spiral: ${prefix}erkek @kullanıcı isim yaş: \n **Erkekleri kayıt etmeye yarar.**
:notepad_spiral: ${prefix}kız @kullanıcı isim yaş: \n **Kızları kayıt etmeye yarar.**
`)
 .setTimestamp()
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
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};