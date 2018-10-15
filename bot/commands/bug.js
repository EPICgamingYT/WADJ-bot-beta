const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
let sender = message.author;
let bug = args.slice(0).join(" ");
if(!bug) return message.channel.send("You didn't report any problem... Mistake?");
if(!args[2]) return message.channel.send("That problem is a bit short, isn't it? Try making it a little longer");

let bugEmbed = new Discord.RichEmbed()
.setTitle("**A bug was reported!**")
.setDescription(`This bug was reported by ${sender}`)
.setTimestamp()
.setAuthor(sender.tag)
.addField("**The bug is**", bug)
.addField("Also want to report a bug?", "Use the !bug command, aliases: report, problem")
.setColor("#FFF000");
let bugChannel = message.guild.channels.find(c => c.name === "problems-bugs");

bugChannel.send(bugEmbed);
message.channel.send("The bug was reported, our developer team will look into it soon!").then(message => message.delete(100000));
}
module.exports.help = {
	name: "bug",
	aliases: ['report, problem']
}