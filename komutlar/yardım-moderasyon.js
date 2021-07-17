const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
<:personel:862347074805039165> ${prefix}mod-log #kanal: \n **Mod-log ayarlar.**
<:personel:862347074805039165> ${prefix}mod-log sıfırla: \n **Mod-log sıfırlar.**
<:personel:862347074805039165> ${prefix}bansay: \n **Sunucuda kaç banlanan üye olduğunu gösterir.**
<:personel:862347074805039165> ${prefix}ban @kullanıcı: \n **Etiketlediğiniz kullanıcıyı banlar.**
<:personel:862347074805039165> ${prefix}küfürengel: \n **Küfür engel açar/kapatır.**
<:personel:862347074805039165> ${prefix}küfürlog #kanal: \n **Küfür-log ayarlar.**
<:personel:862347074805039165> ${prefix}reklamengel: \n **Reklam engel açar/kapatır.**
<:personel:862347074805039165> ${prefix}reklamlog #kanal: \n **Reklam-log ayarlar.**
<:personel:862347074805039165> ${prefix}sa-as aç: \n **SA-AS sistemini açar.**
<:personel:862347074805039165> ${prefix}sa-as kapat: \n **SA-AS sistemini kapatır.**
<:personel:862347074805039165> ${prefix}sil: \n **Yazdığınız miktar kadar mesaj siler.**
<:personel:862347074805039165> ${prefix}say: \n **Sunucu bilgilerini gösterir.**
<:personel:862347074805039165> ${prefix}oylama: \n **Oylama yapar.**
<:personel:862347074805039165> ${prefix}otorol-ayarla @rol #kanal: \n **Otorol ayarlar.**
<:personel:862347074805039165> ${prefix}otorol-sıfırla: \n **Otorol sıfırlar.**
<:personel:862347074805039165> ${prefix}otorol-mesaj-ayarla: \n **Otorol mesajı ayarlar.**
<:personel:862347074805039165> ${prefix}otorol-mesaj-sıfırla: \n **Otorol mesajı sıfırlar.**
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};