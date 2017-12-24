// You should use this instead of the below line: let Bot = require('telegram-bot-manager');
let Bot  = require("../index");


// Creating an instance of the Bot Object. Constructor get token input
let bot = new Bot("460033548:AAFI2URs3RXdi8tVPiRIPgbZVjcCeHDq26M");
let update_id = 0;
const runningBot = setInterval( () => {

    bot.getUpdates({
        offset: update_id
    })
        .then((data) => {
            if (data['ok']) {
                data['result'].forEach((update) => {
                    start(update);
                    update_id = update['update_id'] + 1;

                });
            }
        });

}, 3000);

function start(data) {
    bot.sendMessage({
         chat_id: 86951488,
        // text: "test"
    })
        .then((result) => {
            console.log(result);
        });
    bot.sendPhoto({
        chat_id: 86951488,
        photo: "https://thedevs.network/static/img/posts/build-a-telegram-bot-with-node.js/nodejs-reddit-bot-4.gif",
        caption : "caption :)"
        })
        .then((x) => {
            console.log(x);
        });

    console.log(data);
}