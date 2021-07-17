const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Ekonomi Sistemi Yardım Menüsü`)
 .setDescription(`
:dollar: ${Prefix}bilgiler: \n **Hesap Bilgisini Gösterir**
:dollar: ${Prefix}bakiye: \n **Bakiyeyi Gösterir**
:dollar: ${Prefix}günlükpara: \n  **Günlük Para Ödülü Alırsın**
:dollar: ${Prefix}hesap-oluştur: \n  **Hesap Oluşturursun**
:dollar: ${Prefix}hesap-sil: \n  **Hesap Silersin**
:dollar: ${Prefix}kasa-aç: \n  **Kasa Açarsın**
 :dollar: ${Prefix}kasa-bilgi: \n  **Kasalar Hakkında Bilgi Alırsın**
:dollar: ${Prefix}transfer: \n  **Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin**


`)
 .setFooter(`Knox`)
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
  name: 'ekonomisistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};