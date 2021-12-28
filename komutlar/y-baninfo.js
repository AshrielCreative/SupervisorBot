const { MessageEmbed, Discord } = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
exports.run = async (client, message, args) => {

  
if(![(client.config.banhammer)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author}, komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setFooter("Deasn was here!").setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));



  
  if(!args[0]) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, bir ID belirtmelisin.`).setFooter("Deasn was here!").setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  try {
    message.guild.fetchBan(args.slice(0).join(' '))
    .then(({ user, reason }) => message.channel.send(new MessageEmbed().setAuthor(user.tag, user.avatarURL()).setColor('0x348f36').addField('Banlanan kullanıcı', `**${user.tag}** \`(${user.id})\``).setDescription(`**Ban sebebi:** \`${reason}\``)))
  } catch(err) { message.channel.send(new MessageEmbed().setTimestamp().setFooter("Deasn was here!").setColor('0x800d0d').setDescription('Belirtilen ID`ye ait hiç bir veri bulunamadı!')) 
                               }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban-info', 'ban-geçmişi'],
  permLevel: 0
};

exports.help = {
  name: 'ban-bilgi',
  kategori: 'yetkili'
};
