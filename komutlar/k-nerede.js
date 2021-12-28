const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {

  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let selfM = uye.voice.selfMute ? "🔇" : "🔊";
  let selfD = uye.voice.selfDeaf ? "🔇" : "🔊";
 
   if(!uye) return message.channel.send(new Discord.MessageEmbed().setDescription('Doğru kullanımı: ```!nerede @Deasn/ID```'));
   if(!uye.voice.channel) return message.react(client.config.redemoji)
   const guild = message.member.guild
 let executor = message.member
 let channel = uye.voice.channel; 
let number = channel.members.size;  
 let murphyembed = new Discord.MessageEmbed()
     .setAuthor(guild.name, guild.iconURL({dynamic: true}))
     .setFooter("Deasn was here!")
     .setTimestamp()
     var a;
   if(channel.members.array().length > 1) a = `Onunla birlikle olanlar [${number}] : `+channel.members.map((user) => { if (user === channel.member) return; return user; })
     message.channel.send(murphyembed.setFooter("Deasn was here!").setDescription(`**${uye} \`${message.guild.channels.cache.get(uye.voice.channelID).name}\` adlı ses kanalında mikrofonu ${selfM}, kulaklığı ${selfD} \n ${a || `Odada sadece ${uye} bulunmaktadır.`} **`))
 }

 exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["nerede","hangiseste"],
    permLevel: 0,
    name: "nerede"
  }
  
  exports.help = {
    name: "nerede"
  };
  
