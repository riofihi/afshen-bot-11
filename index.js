const Discord = require("discord.js"); 
const bot = new Discord.Client();

bot.on("ready", async () => {
	console.log('Aku siap!'); // untuk memberitahu bahwa bot sudah siap
});

bot.on("message", async (message) => {
	if (message.content.startsWith('ping!')) {
		message.channel.send("Pong!"); // untuk mengetes apakah bot merespon atau tidak
	}
	if (message.content.startsWith('love you')) {
		message.channel.send("Love you too wkwk"); // untuk mengetes apakah bot merespon atau tidak
	}
	if (message.content.startsWith('afshen?')) {
		message.channel.send("Kapten Team Hallow yang paling kece:kissing_heart:"); // untuk mengetes apakah bot merespon atau tidak
	}	
});

bot.login(process.env.BOT_TOKEN);
