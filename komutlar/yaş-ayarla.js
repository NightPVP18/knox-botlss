const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

  let yas = args.slice(0).join(" ");
  if (!yas)

return message.channel.send(
 "**Knox** \n\n ・**Lütfen yaş belirtin.** \n :・**Örnek:** **!yaş-ayarla** `(Yaş)` \n・`**Tüm komutlara erişmek için -> !yardım** \n\n**Knox**"
    );
db.set(`AsreaperYas_${message.author.id}`, yas)
return message.channel.send(
    " **Asreaper** \n**------------------------------------**\n**• Yaş başarıyla ayarlandı. ** \n**• Belirtilen Yaş ->** " +
      yas +
      "` \n`• !yardım` **Yazarak tüm komutlara erişebilirsiniz.** \n **------------------------------------**\n**Knox**"
      );
;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaş-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
