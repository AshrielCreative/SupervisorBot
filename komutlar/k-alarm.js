const Discord = require('discord.js');
const ms = require('ms')

exports.run = async(client , message , args) => {
  
  let süre = args [0] 
  
  if(!süre) return message.channel.send(`!alarm <1h,1m,1s> <hatırlatacağım isim>`)
  
  let alarm = args.slice(1).join(' ')
  
  if(!alarm) return message.channel.send(`!alarm <1h,1m,1s> <hatırlatacağım şey>`)
  
  message.channel.send(`Belirttiğin alarmı kurdum **${süre}** sonra sizi etiketleyeceğim.`)
  
  setTimeout(() => {
  
  message.channel.send(`<@${message.author.id}>, hatırlatmamı istediğin şeyin zamanı geldi!\n**${alarm}**`);
  
  }, ms(süre));

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["alarm","alarms"],
  permLevel: 0,
  name: "alarm"
}

exports.help = {
  name: "alarm"
};

