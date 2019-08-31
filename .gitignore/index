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

// Authentification
client.login(process.env.TOKEN);
