const Discord = require("discord.js");
const bot = new Discord.Client();

const token = process.env.token;

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
bot.on("message", message => {
  if (message.isMemberMentioned(bot.user)) {
    let choice = greetings[Math.floor(Math.random() * greetings.length)];
    message.reply(choice);
  }
});

bot.login(token);
