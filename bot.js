const mineflayer = require("mineflayer");
const { Client, IntentsBitField } = require('discord.js');

var settings = {
    username: "pw_pretz",
    host: "herobrine.org",
};
var tpsPlugin = require('mineflayer-tps')(mineflayer)

const bot = mineflayer.createBot(settings);
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
      ],
})
const antiafk = require("mineflayer-antiafk");

bot.loadPlugin(tpsPlugin)
bot.loadPlugin(antiafk);


bot.once("spawn", ()=>{
    bot.chat("/game hera");
    console.log("spawned")
    setTimeout(() => {
        bot.chat("/m pretzulduck. Online!");
        bot.chat("/is warp nidalzfar2.")
        bot.afk.setOptions({ fishing: false , breaking: false , placing: false }); 
        bot.afk.start();
    }, 5000);
});


bot.on('chat', (message) => {
    if (message.slice(" ")[0] === "pretzulduck."){
      bot.chat(ok)
    }
  })
  client.on('messageCreate', (message) => {
    if (message.channel.id == "1138480232479850588") {
        if (message.author.bot) {

        } else {
            bot.chat(message.author.username + " : " + message.content)
        }
    }})
