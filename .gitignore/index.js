const Discord = require("discord.js");

// Client instance
var client = new Discord.Client();

// Config
var prefix = "/";

// Discord Status
client.on("ready", function() {
    client.user.setActivity('Discord', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
    console.log("Is online !");
});

// Welcome message
client.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#000099")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("Salut "+ user + "! Bienvenue dans la communauté de **France Multigaming** 🎉🤗 ! Afin de voir __***les salons de jeux***__ te correspondant, merci de te reporter dans <#584335406917746689> . Je t'invite aussi à prendre connaissance des <#584335354031636481> et <#584326401935671299> ainsi que les règles pour les jeux auxquels tu pourrais participer :innocent:. Bon jeu!")
        .setFooter("France Multigaming");
    user.guild.channels.get("584055404955303936").send(joinEmbed);
});

//Comands
client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**__Liste des commandes :__**\n\n ***__Utilisateur__***\n\n**/ping** Savoir si le Bot est en ligne et obtenir sa latence.\n\n**/stats** Obtenir les statistiques d'un utilisateur.\n\n ***__Admin__***\n\n**/kick** Expulser utilisateur via le Bot\n\n**/ban** Bannir utilisateur via le bot")
            .setFooter("France Multigaming");
        message.channel.sendEmbed(embed);
    }
});

// Authentification
client.login(process.env.TOKEN);
