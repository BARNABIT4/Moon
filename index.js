const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "NTc3MTU0NzE2NzYxNDU2NjUw.XNhJMA.-YBva4JCP_7w5NK73ZN9sDMv1ww";
const prefix = ("-");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});
      
    }
});

bot.login(token); //a garder en version heroku
