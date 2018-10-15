const Discord = require("discord.js");
const date = new Date();
module.exports.run = async(client, message, args) => {
	if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have enough permission to do that!");
	let kickedUser = message.guild.member(message.mentions.users.first());
	if(!kickedUser) return message.channel.send("You didn't mention someone you want to kick! Please make sure you do so.");
	if(kickedUser.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't kick someone that has kick permission!");
	let kReason = args.slice(1).join(" ");
	if(!kReason) return message.channel.send("Please give up a reason why you kicked this person.");
	let kickEmbed = new Discord.RichEmbed()
	.setTitle("**Someone was kicked**")
	.setDescription("In the message below can be found complete information!")
	.setTimestamp()
	.setColor("#FF00FF")
	.addField("Kicked user", `${kickedUser}`)
	.addField("Kicked by", `${message.author}`)
	.addField("Kicked because", `${kReason}`)
	.addField("Kicked at", `${date}`);
	message.guild.member(kickedUser).kick(kReason);
	let kickChannel = message.guild.channels.find(c => c.name === "logs");
	kickChannel.send(kickEmbed);
}

module.exports.help = {
	name: "kick",
	aliases: ["k"]
}