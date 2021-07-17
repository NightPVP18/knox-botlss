const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.reply("Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor. (Eğer oy verdiyseniz bi kaç dakika bekleyin) \nOy vermek için: https://discordbotlist.com/bots/knox/upvote") 

        } else {
            message.channel.send("Destekçi rolün verildi.");
            message.member.addRole("850789894087245834")
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["upvote", "oyverdim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'oyverdim',
  category: 'kullanıcı',
  description: 'Destekçi rolü alırsın.',
  usage: 'oyverdim'
};