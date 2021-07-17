const Discord = require('discord.js');
exports.run = (client, message, args) => {

const yetki = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Bunun için sahibim olman gerekiyor.`);
    if (message.author.id !== "799289295067152434")
      return message.channel.send(yetki);  



if (!message.guild) {
  
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Göndereceğim yazıyı yazman gerekiyor.');
  if (message.mentions.users.size < 1) return message.reply('Mesajı kime atıcağımı yazman gerekiyor.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`**Bir Mesajın Var**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 2,
  cooldown: 3,
  kategori: 'Sunucu'
};

exports.help = {
  name: 'mesaj',
  description: 'Bir üyeye dm üzerinden mesaj yollar.',
  usage: 'mesaj'
};