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


 const grindercommands = async (message) => {
   if (message.includes("!tps")) {
      await delay(1000);
      bot.chat("Current Tps Is: " + bot.getTps());
   }
  };

 bot.on("messagestr", async (message) => {
    var messagearr = message.split(" ");

    // Global commands
    const commandsspec = ["~Drac", "Pw_Drac.", "pretzulduck.", "DR4C0N14N", "DR4C0N14N.",  "Qxt0"];

    //Get Sender if island chat
    if (message.includes("[island] ")) {
      var sender = messagearr[1].split(":")[0];
      if (sender === bot.username) return;
      messagearr.shift();
      messagearr.shift();
      var mainmessage = messagearr.join(" ");

      console.log(
        `[${new Date().toLocaleTimeString("en-US", { timeZone: "Africa/Johannesburg" }).gray}]`,
        `[Island Chat]`.blue.bold,
        colors.brightBlue(sender + " : " + mainmessage)
      );

      if (commandsspec.includes(sender)) {
        grindercommands(mainmessage);
      }
    }

    //Get sender if message
    else if (message.includes("[Message] From ")) {
      var sender = messagearr[2];
      messagearr.shift();
      messagearr.shift();
      var mainmessage = messagearr.join(" ");

      console.log(
        `[${new Date().toLocaleTimeString("en-US", { timeZone: "Africa/Johannesburg" }).gray}]`,
        `[DM Chat]`.blue.bold,
        colors.brightBlue(sender + " : " + mainmessage)
      );

      if (commandsspec.includes(sender)) {
        grindercommands(mainmessage);
      }
    }

    //Get sender if global
    else {
      var sender = "";
      var ranks = ["[VIP]", "[VIP+]", "[VIP++]", "[MVP]", "[MVP+]", "[MVP++]", "[HERO]"];
      var tiers = ["[I]", "[II]", "[III]", "[IV]", "[V]"];
      if (ranks.includes(messagearr[0])) {
        sender = messagearr[1];
        messagearr.shift();
      } else sender = messagearr[0];
      messagearr.shift();
      if (tiers.includes(messagearr[0])) messagearr.shift();
      var mainmessage = messagearr.join(" ");
      if (sender === bot.username) return;
      if (commandsspec.includes(sender)) {
        grindercommands(mainmessage);
      }
          console.log(
            `[${new Date().toLocaleTimeString("en-US", { timeZone: "Africa/Johannesburg" }).gray}]`,
            `[Global Chat]`.blue.bold,
            colors.brightBlue(sender + " : " + mainmessage)
          );
        
        }
      }
    }
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
