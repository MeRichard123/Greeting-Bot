const Discord = require("discord.js");
const bot = new Discord.Client();

const token = process.env.token;
const prefix = "?";

const greetings = [
  "Hello, sunshine!",
  "Howdy, partner!",
  "Hey, howdy, hi!",
  "What’s kickin’, little chicken?",
  "Peek-a-boo!",
  "Howdy-doody!",
  "Hey there, freshman!",
  "My name's Ralph, and I'm a bad guy.",
  "Hi, mister!",
  "I come in peace!",
  "Put that cookie down!",
  "Ahoy, matey!",
  "Hiya!",
  "Ello, gov'nor!",
  "Top of the mornin’ to ya!",
  "What’s crackin’?",
  "GOOOOOD MORNING, VIETNAM!",
  "‘Sup, homeslice?",
  "Howdy, howdy ,howdy!",
  "How does a lion greet the other animals in the field? A: Pleased to eat you.",
  "Hello, my name is Inigo Montoya.",
  "I'm Batman.",
  "At least, we meet for the first time for the last time!",
  "Hello, who's there, I'm talking.",
  "Here's Johnny!",
  "You know who this is",
  "Ghostbusters, whatya want?",
  "Yo!",
  "Whaddup."
];

bot.on("ready", () => {
  console.log("this bot is online");
});
bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(
    channel => channel.name === "welcome-to-the-server"
  );
  if (!channel) return;
  channel.send(
    `Welcome to the Pokecord Server ${member}! Head over to hellos-and-intros to get yourself started!`
  );
});

bot.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  // const channel = member.guild.channel.find(
  //   channel => channel.name === "ash-ketchum"
  // );
  // if (!channel) return;
  if (!message.content.startsWith(prefix)) return;

  if (command === "chat") {
    let choice = greetings[Math.floor(Math.random() * greetings.length)];
    message.reply(choice);
  }
  // if (command === "wipe") {
  //   if (message.member.roles.find(r => r.name === "Admins")) {
  //     // message.channel.bulkDelete(args[1]);
  //     message.channel.send(args[1]);
  //   }
  // }
});

bot.login(token);
