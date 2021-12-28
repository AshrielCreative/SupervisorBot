const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has((client.config.teyitci)) && !message.member.hasPermission("ADMINISTRATOR")) return;
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!member) return message.reply("Kayıt edilecek kullanıcıyı belirtip tekrar deneyin.")
  if(!args[1]) return message.reply("Kullanıcıya isim belirtmelisin.")
  if(!args[2]) return message.reply("Kullanıcıya yaş belirtmelisin.")
  let isim = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase()
  let yaş = args[2];
  let isimler = db.get(`isimler_${member.user.id}`);
 

//if (!member.user.username.includes(client.config.tag) && !member.roles.cache.has(client.config.booster) && !member.roles.cache.has(client.config.vip)) return message.channel.send(`Sunucumuz şuanda **taglı alımdadır** tagımızı alarak kayıt işlemini gerçekleştirebilirsiniz.`)


  member.setNickname(`${member.user.username.includes((client.config.tag)) ? (client.config.tag) : (client.config.tag2)} ${isim} | ${yaş}`)
  db.push(`isimler_${member.id}`, `\`${client.config.tag2} ${isim} | ${yaş}\` (<@&${client.config.erkek1}>)`);
 
        member.setNickname(`${member.user.username.includes((client.config.tag)) ? (client.config.tag) : (client.config.tag2)} ${isim} | ${yaş}`)

          const memeaç = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(`${client.config.murphyTag2} ${member}, kişisinin ismi başarıyla \`"${isim} | ${yaş}"\` olarak değiştirildi.\n\nKişinin önceki isimlerine \`!isimler @Deasn/ID\` komutuyla bakarak kayıt işlemini gerçekleştirmeniz önerilir.`)          .setFooter(`Deasn was here!`)
          .setColor("RANDOM")
          .setFooter("Deasn was here!")
          message.channel.send(memeaç)
          message.react((client.config.onayemoji))

          await message.guild.members.cache.get(member.id).roles.remove(client.config.kayıtsız)
          await message.guild.members.cache.get(member.id).roles.add(client.config.erkek1)
          await message.guild.members.cache.get(member.id).roles.add(client.config.erkek2) 


          const embed31 = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(`${client.config.murphyTag2} ${member} kullanıcısı aramıza \`"${isim} | ${yaş}"\` olarak katıldı. Hoş geldin!`)      
          .setColor("RANDOM")
          .setFooter("Deasn was here!")    
          client.channels.cache.get(client.config.chat).send(embed31);
      
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e"],
  permLevel: 0,
  name: "erkek"
}

exports.help = {
  name: "erkek"
};

