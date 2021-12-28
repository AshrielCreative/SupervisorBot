const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has("924553013341876238") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField((client.config.sunucuadı) , `${client.config.murphyTag} Bir @Deasn/ID belirtmelisin.`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
 
  member.roles.add(`${client.config.vip}`); //rol
 message.react(`${client.config.onayemoji}`)
   
   


   const kanal = message.guild.channels.cache.find(c => c.id == (client.config.rollog));
   const embed1 = new Discord.MessageEmbed()
    .setDescription(`${client.config.murphyTag} **VIP verilen üye:** ${member.user} \n **Rol veren yetkili:** ${message.author}`)
    .setColor("BLACK")
    .setFooter("Deasn was here!")
    .setTimestamp();
    kanal.send(embed1)

  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${client.config.murphyTag} ${member.user} **adlı üyeye <@&${client.config.vip}> rolü verildi.**`)
    .setFooter("Deasn was here!")
    .setTimestamp();
   message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vip"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "vip",
  description: "Sunucuya ne dersin ?",
  usage: "vip "
};
