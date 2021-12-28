exports.run = async(client, message, args) => {
    const Discord = require("discord.js")
    message.channel.send(new Discord.MessageEmbed().setTitle("Sunucunun sayısal istatistikleri").setColor("#36393f").setDescription(`

    ${client.config.murphyTag} Toplam üye:  **${message.guild.memberCount}**
    ${client.config.murphyTag} Son 1 saatte giren üyeler: **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}**,
    ${client.config.murphyTag} Son 1 günde giren üyeler: **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}**,
    ${client.config.murphyTag} Son 1 haftada giren üyeler: **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}**,
    ${client.config.murphyTag} Son 1 ayda giren üyeler: **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}**`)
    .setThumbnail(message.guild.iconURL)
    .setFooter(message.guild.name, message.guild.iconURL)
    .setTimestamp())
  };
  
  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "sunucu"
  };
  
  module.exports.help = {
    name: "istatistik",
    description: "istatistik",
    usage: "istatistik"
  };