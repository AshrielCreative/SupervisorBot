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
if (!kullanıcı) return message.channel.send(new MessageEmbed().setDescription(`Bir kullanıcıyı sese çekmek istiyorsan o kullanıcıyı belirtmen gerekir.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, belirttiğin kullanıcı seste değil.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  
let log = new Discord.MessageEmbed()
.setColor("#7289D")
.setDescription(`${client.config.murphyTag} ${kullanıcı}, ${message.author} \`${message.member.voice.channel.name}\` odasına çekmek istiyor. Kabul ediyor musun?`)
  
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
.setDescription(`${client.config.murphyTag} ${kullanıcı} odaya çekilme teklifini onayladı!`)
message.channel.send(kabul)
kullanıcı.voice.setChannel(message.member.voice.channel.id)
} else {
let striga = new Discord.MessageEmbed()
.setColor("0x800d0d")
.setDescription(`${client.config.murphyTag} ${kullanıcı} odaya çekilme teklifini reddetti.`)
message.channel.send(striga)
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gel","çek"],
  permLevel: 0,
}

exports.help = {
  name: 'çek'
}