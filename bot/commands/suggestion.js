const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
let sender = message.author;
let suggestion = args.slice(0).join(" ");
if(!suggestion) return message.channel.send("You didn't give any suggestion... Mistake?");
if(!args[2]) return message.channel.send("That suggestion is a bit short, isn't it? Try making it a little longer");

let bugEmbed = new Discord.RichEmbed()
.setTitle("**A suggestion was made!**")
.setDescription(`This suggestion was made by ${sender}`)
.setTimestamp()
.setAuthor(sender.tag)
.addField("**The suggestion is**", suggestion)
.addField("Also want to give a suggestion?", "Use the !suggestion command, aliases: suggest")
.setColor("#FFF000");
let suggestionChannel = message.guild.channels.find(c => c.name === "suggestions");

suggestionChannel.send(bugEmbed).then(message => {
	message.react("👍") 
	message.react("👎")
});
message.channel.send("The suggestion was made, our developer team will look into it soon!").then(message => message.delete(100000));
}
module.exports.help = {
	name: "suggestion",
	aliases: ['suggest']
}