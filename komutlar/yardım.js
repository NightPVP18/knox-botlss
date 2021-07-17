const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Knox Yardım Menüsü`, client.user.avatarURL())
  .setColor("orange")
  .setThumbnail(client.user.avatarURL())
  .setDescription("<a:ayarlar:862344131657203742> Knox Arkadaşlık Grubu")
  .addField(" <:robot:862340176210952192> Klasik Kategoriler:", `> <:kalp:862348182750625792>  k!kullanıcı: **Kullanıcı yardım menüsünü gösterir.**\n > <:personel:862347074805039165>  k!moderasyon: **Moderasyon yardım menüsünü gösterir.**\n > :notepad_spiral:  k!kayıtsistemi: ** Kayıt sistemi yardım menüsünü gösterir.**\n > <:moderator:862346164044431370>  k!korumasistemi** Koruma sistemi yardım menüsünü gösterir.**\n > <:party:862345365066612756>  k!logosistemi: ** Logo sistemi yardım menüsünü gösterir.**\n > :tada:  k!çekiliş: ** Çekiliş sistemi yardım menüsünü gösterir.**\n > :dollar:  k!ekonomisistemi: ** Ekonomi sistemi yardım menüsünü gösterir.**`)
  .addField(" <a:hype:849662355930480710>  Özel Kategoriler:", `> :tv:  k!izle: **Sesli odada youtube ile video izleyebilirsiniz. (Sadece belli zamanlarda aktif olur.)** \n > <:test:862342644768178186>  k!akinator: **Akinator oyununu başlatır.** \n > <:discordetkinlik:862343231769018392>  k!etkinlik: **Aktif etkinlikleri gösterir.** \n > <:site:864063274215276545>  k!site: **Web sitemi gösterir.**`)
  .setImage("https://share.creavite.co/gq9a2sgsHojrzK2l.gif")
.setFooter("Knox", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}