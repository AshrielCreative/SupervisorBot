const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const yetkilog = message.guild.channels.cache.find(c => c.id === (client.config.yetkilog)); 
    let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#009dff').setTimestamp().setThumbnail(message.author.avatarURL).setFooter(client.config.footer);
        let embed2 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#009dff').setTimestamp().setThumbnail(message.author.avatarURL).setFooter((client.config.footer));

        if(!["924553013350260784"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
        return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author}, komutu kullanmak için yetkin yok.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
          
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(embed.setDescription("Bir kullanıcı @Deasn/ID belirtmelisin."))
      
        await message.guild.members.cache.get(member.id).roles.add(client.config.teyitsorumlusu)
        message.react((client.config.onayemoji))

        yetkilog.send(new Discord.MessageEmbed().setAuthor(message.member.displayName,message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("Deasn was here!")   
            .setDescription( 
              `${client.config.murphyTag} Teyit sorumlusu olan kullanıcı: ${member.user}`` \n ${client.config.murphyTag} Yetki veren yetkili: <@${message.author.id}>`
            )
        );
      }
    ;


exports.conf = {
    enabled: true, 
    guildOnly: true,
    aliases: ["teyitsorumlusu","teyitsorumlusu-yap"],
    permLevel: 0,
    name: "teyitsorumlusu"
  }
  
  exports.help = {
    name: "teyitsorumlusu-ver"
  };
  
  