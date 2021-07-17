const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, msg, args) => {
  

  msg.reply(new Discord.MessageEmbed().setDescription("**Discord:** [:arrow_upper_right:](https://discord.gg/JfyJDaZnUc)**\n\n"));

        }


exports.conf = {
  aliases: []
};

exports.help = {
  name : "yardım"
};