const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


if(![""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author}, komutu kullanmak için yetkin bulunmamakta.`).setFooter("Deasn was here!").setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

  
  
  let murp2 = ` <@&${client.config.teyitci}> rolüne sahip olup seste olmayan yetkililer:\n`;
  message.guild.roles.cache.get(message.guild.roles.cache.get(`${client.config.teyitci}`).members.map(r => {
    murp2 += !r.voice.channel ? "<@" + r.user.id + "> \n" : "";
  }));

 
  message.channel.send("" + murp2 + "").then(s => s.s);
};
module.exports.conf = {
  aliases: ["yetkilisay"]
};

module.exports.help = {
  name: "sesyt"
};
