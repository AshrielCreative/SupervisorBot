const Discord = require('discord.js');
const db = require("quick.db")
exports.run = (client, message, args) => {
    if (!message.member.roles.cache.has(`${client.config.teyitci}`) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.MessageEmbed().setDescription('**Bu komutu kullanabilmek için Yetkili olmak gerek!**').setColor("Black"));
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir kullanıcı @Deasn/ID girmelisin').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  message.guild.members.cache.get(member.id).roles.cache.forEach(r => {
message.guild.members.cache.get(member.id).roles.remove(r)


})

  member.roles.add(client.config.kayıtsız)
  member.setNickname(`${client.config.tag2} İsim | Yaş`)
  message.react(client.config.onayemoji)

  let embed = new Discord.MessageEmbed()  
  .setDescription(`${client.config.murphyTag} ${kullanıcı} adlı üye ${message.author} tarafından **Kayıtsıza** atıldı. Yetkileri çekilip bütün rolleri alındı.`) 
  .setFooter(`Deasn was here!`)
  .setTimestamp()
  return message.channel.send(embed)



}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıtsız"],
    permLevel: 0,
    name: "kayıtsız"
  }
  
  exports.help = {
    name: "kayıtsız"
  };