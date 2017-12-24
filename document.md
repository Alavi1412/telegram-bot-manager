## Methods
You should pass a JSON to methods exactly like telegrams documentation.\
We have a small document of Methods we have implemented in this package.\
Your JSON should have all *required* properties. 

### Example
```
bot.sendMessage({
    chat_id: 7286390,
    text: 'A TEST TEXT'
    })
    .then( (res) => {
        // Do what You want with your result
    });
```

### getMe

return the bot Info

### getUpdates

Input:

offset : Integer ,\
limit : Integer ,\
timeout : Integer ,\
allowed_updates : Array of Strings

Returns an [UPDATE](https://core.telegram.org/bots/api#update) 

### sendMessage

Input:

chat_id (*required*) :   Integer or String , \
text (*required*) : String ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup)\
	           [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)\
	           [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove)\
	           [ForceReply](https://core.telegram.org/bots/api#forcereply)\
reply_to_message_id : Integer,\
parse_mode : String,\
disable_web_page_preview : Boolean,\
disable_notification : Boolean

Returns the sent message

### forwardMessage

Input:

chat_id (*required*) :  Integer or String ,\
from_chat_id (*required*) :  Integer or String  ,\
message_id (*required*) :  Integer  ,\
disable_notification : Boolean

Returns the sent message