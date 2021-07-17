const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor('RANDOM')
  AsreaperEmbed.setDescription(` Knox Botun web sitesine gitmek için [buraya](https://www.knoxbot.tk/) tıkla!`)
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
  name: 'site',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'website'
};