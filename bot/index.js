const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require('./botconfig.json');
client.on('ready') = async => {
	console.log('test');
}
client.login(botconfig.token);

