// You should use this instead of the below line: let Bot = require('telegram-bot-manager');
let Bot  = require("../index");
// Creating an instance of the Bot Object. Constructor get token input
let bot = new Bot("373867222:AAHSdbW_bpxgzjstzAivtZGS_GeOMqM4pY8");
// Using some simple Methods
bot.getMe()
    .then((res) => {
        console.log(res);
    });