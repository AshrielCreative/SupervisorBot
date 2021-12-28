const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')


exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("Ses kanalında olman lazım!");
}
const filter = (reaction, user) => {
return ["✅" , "❎"].includes(reaction.emoji.id) && user.id === kullanıcı.id;
};
  
let kullanıcı = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if (!kullanıcı) return message.channel.send(new MessageEmbed().setDescription(`Odasına gitmek istedğiniz kullanıcıyı belirtmeniz gerekir.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

let rol = message.mentions.roles.first();
let member = message.guild.member(kullanıcı);


if (!member.voice.channel) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, belirttiğin kullanıcı seste.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

  
let log = new Discord.MessageEmbed()
.setColor("#7289D")
.setDescription(`${kullanıcı}, ${message.author} \`${kullanıcı.voice.channel.name}\` odasına gelmek istiyor. Kabul ediyor musun?`)
  
let mesaj = await message.channel.send(log)
await mesaj.react((client.config.onayemoji))
await mesaj.react((client.config.redemoji))
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.id === "✅") {
let kabul = new Discord.MessageEmbed()
.setColor("0x348f36")
.setDescription(`${client.config.murphyTag} ${kullanıcı} odaya gelmeni onayladı. Odaya çekildin!`)
message.channel.send(kabul)
message.member.voice.setChannel(kullanıcı.voice.channel.id)
} else {
let striga = new Discord.MessageEmbed()
.setColor("0x800d0d")
.setDescription(`${client.config.murphyTag} ${kullanıcı} odaya gelmeni onaylamadı.`)
message.channel.send(striga)
}
})}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["git"],
  permLevel: 0,
}

exports.help = {
  name: "git"
};