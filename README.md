# telegram-bot-manager

This is a NodeJS module helps programmers to create bots without dealing with Telegram API document Directly and will provide many useful features to write Better telegram bots Faster

## Getting Started

An Instructor to implement this package on your code

### Prerequisites

NodeJS 8 or higher

### Installing

run this code to install the package:

```
npm install telegram-bot-manager --save
```

### Starting Coding

You should require the package in your code and create an instance of the Bot class like this:

```
const Bot = require('telegram-bot-manager')

const bot = new Bot(<YOUR-TOKEN-AS-STRING>);
```

### Running the tests

use this code to send a message with your bot
It should paste in start function 

```
bot.senMessage({
chat_id : 12345678 ,            //your target chat_id
text : "this a test bot"
})
    .then((result) => { 
        console.log(result);
    });
```
### Authors

* [**Seyed Mohammad Hasan Alavi**](http://t.me/alavi1412)
* [**Hossein Keramati Tavallaei**](http://t.me/hooo3eeen)

### License
This project is licensed under the MIT License.

### Acknowledgments
All of the telegram's bot developers.
