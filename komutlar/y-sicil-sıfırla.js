const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const kdb = new data.table("kullanici");
exports.run = async (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  if(![(client.config.banhammer) , (client.config.jailhammer)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author}, komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\
  
  
let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir @Deasn/ID girmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

if (!member) {
let sicil = kdb.delete(`kullanici.${member.id}.sicil`) || [];
message.channel.send(new MessageEmbed().setColor('0x348f36').setFooter("Deasn was here!").setTimestamp().setDescription(`${client.config.onayemoji} ${message.author} sana ait sicil verilerini sildim!`))
}
  
if(member) {
let sicil = kdb.delete(`kullanici.${member.id}.sicil`) || [];
message.channel.send(new MessageEmbed().setColor('0x348f36').setFooter("Deasn was here!").setTimestamp().setDescription(`${client.config.onayemoji} ${member} kullanıcısına ait sicil verilerini sildim!`))

};
  
}
  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sicil-sıfırla"],
  PermLevel: 0
};

 

exports.help = {
  name: "sicil-sıfırla",
  description: "",
  usage: ""
};