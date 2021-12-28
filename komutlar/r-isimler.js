const db = require('quick.db');
const { MessageEmbed } = require('discord.js')

    exports.run = async (client, message, args) => {

        
        if(![(`${client.config.teyitci}`)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
        return message.channel.send(new MessageEmbed().setDescription(` ${message.author}, komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(new MessageEmbed().setDescription(` ${message.author}, bir kullanıcı belirtmelisin.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
        let isimler = db.get(`isimler_${member.user.id}`);
        if (!isimler) return message.channel.send(new MessageEmbed().setDescription(` ${message.author}, bu kullanıcının daha önceki isimleri bulunmuyor.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

        const embed36 = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${client.config.murphyTag} Bu üyenin toplamda "**${isimler.length}**" isim kaydı bulundu. 
            \n ${isimler.map((data, i) => `${data}`).join("\n") }`)
            .setFooter((client.config.footer))
            .setTimestamp()
        message.channel.send(embed36)
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["isimler"],
        permLevel: 0,
        name: "isimler"
      }
      
      exports.help = {
        name: "isimler"
      };
      
      