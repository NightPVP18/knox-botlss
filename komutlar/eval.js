const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   
  const yetki = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Bunun için bana layık olmalısın.`);
      if (message.author.id !== "799289295067152434")
      return message.channel.send(yetki)
  
    
  const embed = new Discord.MessageEmbed()
  .setTitle("Bill Cipher")
  .setColor("#2ECC71")
  .setDescription("<a:666:861907227627749396> ||**AXOLOTL MY TIME HAS COME THE BURN. I ENVOKE THE ANCIENT POWER THAT I MAY RETURN!**|| <a:666:861907227627749396>")
  .setThumbnail("https://cdn.discordapp.com/emojis/861907227627749396.gif?v=1")
  .setImage("https://img.webme.com/pic/t/turkiyeesrarengizkasaba/Bill.gif")
  message.channel.send(embed)

  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'abrakadabra'
}