const Discord = require ("discord.js");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const AsreaperEMBED = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" **Knox**")
.setDescription(`

** Profil Sistemi | Komut Listesi**
**-------------------------------------------------**
**• k!bayrak-ayarla :**   Profil bayrağı belirtir.  
**• k!cinsiyet-ayarla :** Profil cinsiyet belirtir. 
**• k!isim-ayarla :** Profil ismini belirtir.       
**• k!soyisim-ayarla :**  Profil soy ismi belirtir. 
**• k!yaş-ayarla :** Profil yaşı belirtir.          
**• k!profil :**  Kişinin profilini gösterir.          
**-------------------------------------------------**
`)

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(AsreaperEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'profilsistemi', 
    description: 'yardım',
    usage: 'yardım'
};