const Discord = require('discord.js');
const botconfig = require('../botconfig.json')
module.exports.run = async(client,message,args) => {

resetBot(message.channel);
            function resetBot(channel) {
                message.channel.send('Restarted!')
                    .then(message => process.exit());
}

}
module.exports.help = {
	name: "restart",
	aliases: []
}