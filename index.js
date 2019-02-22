const Telegraf = require('telegraf');

const APIkey = "683546479:AAEaQHVViitwVnhNms-OoYXgCAJLX0xGBAg";

const bot = new Telegraf(APIkey);

bot.help((ctx) => ctx.reply('Hello'));

bot.command("hello", (ctx) => ctx.reply('Hello back'));

bot.launch();