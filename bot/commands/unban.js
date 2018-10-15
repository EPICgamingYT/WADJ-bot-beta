const Discord = require("discord.js");
const date = new Date();
module.exports.run = async(client, message, args) => {
	const reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    const user = args[0];
    const modlog = message.guild.channels.find(c => c.name === "logs");
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
    message.guild.unban(user);
    message.channel.send(`Successfuly unbanned <@${user}>, please check ${modlog} for more information!`);

    let unbanEmbed = new Discord.RichEmbed()
    .setTitle("**Someone was unbanned**")
	.setDescription("In the message below can be found complete information!")
	.setTimestamp()
	.setColor("#FF00FF")
	.addField("Unbanned user", `<@${user}>`)
	.addField("Unbanned by", `${message.author}`)
	.addField("Unbanned because", `${reason}`)
	.addField("Unbanned at", `${date}`);

	modlog.send(unbanEmbed);
 }

module.exports.help = {
	name: "unban",
	aliases: ["unb"]
}
