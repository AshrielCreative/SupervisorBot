const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has(`${client.config.teyitci}`) && !message.member.hasPermission("ADMINISTRATOR")) return;
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let isim = args[1];
  let yaş = args[2];
  if(!member) return message.reply("İsmini değiştirmek istediğiniz kullanıcıyı belirtip tekrar deneyin.")
  if(!args[1]) return message.reply("Değiştirmek istediğiniz kullanıcı adında isim belirtmelisin.")
  if(!args[2]) return message.reply("Değiştirmek istediğiniz kullanıcı adında yaş belirtmelisin.")
  
  let isimler = db.get(`isimler_${member.user.id}`);

 
  member.setNickname(`${client.config.tag2} ${isim} | ${yaş}`)
 


      const memeaç57 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`${client.config.murphyTag2} ${member} kişisinin ismi başarıyla \`"${isim} | ${yaş}"\` olarak değiştirildi ve Erkek rolleri verildi.\n\nKişinin önceki isimlerine \`!isimler @Deasn/ID\` komutuyla bakarak kayıt işlemini gerçekleştirmeniz önerilir.`)
    .setFooter(`Deasn was here!`)
    .setColor("RANDOM")
    message.channel.send(memeaç57);
    message.react(`${client.config.onayemoji}`);
      
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["i"],
  permLevel: 0,
  name: "isim"
}

exports.help = {
  name: "isim"
};

