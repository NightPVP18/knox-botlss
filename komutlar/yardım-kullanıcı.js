const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 <:kalp:862348182750625792> k!davet: \n **Botu davet edersiniz.**
 <:kalp:862348182750625792> k!shardbilgi: \n **Botun shard bilgilerini gösterir.**
 <:kalp:862348182750625792> k!pp: \n **Etiketlediğiniz kişinin avatarını gösterir.**
 <:kalp:862348182750625792> k!randompp: \n **Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.**
 <:kalp:862348182750625792> k!istatistik: \n **Botun istatistiğini gösterir.**
 <:kalp:862348182750625792> k!sonmesaj: \n **Yazdığınız son mesajı gösterir.**
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};