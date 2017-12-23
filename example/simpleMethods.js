// You should use this instead of the below line: let Bot = require('telegram-bot-manager');
let Bot  = require("../index");

// Creating an instance of the Bot Object. Constructor get token input
let bot = new Bot("460033548:AAFI2URs3RXdi8tVPiRIPgbZVjcCeHDq26M");

const runningBot = setInterval( () => {

    bot.getUpdates()
        .then((data) => {
            console.log(data);
        });

}, 5000);