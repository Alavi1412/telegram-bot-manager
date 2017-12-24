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

Returns  the sent Message

### sendPhoto

Input:

chat_id (*required*) :  Integer or String ,\
photo (*required*) : [InputFile](https://core.telegram.org/bots/api#inputfile) or String ,\
caption : String ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns  the sent Message

### sendAudio

Input:

chat_id (*required*) :  Integer or String ,\
audio (*required*) : [InputFile](https://core.telegram.org/bots/api#inputfile) or String ,\
caption : String ,\
duration : Integer ,\
performer : String ,\
title	 : String ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)


Returns  the sent Message

###sendDocument

Input:

chat_id (*required*) :  Integer or String ,\
document (*required*) : [InputFile](https://core.telegram.org/bots/api#inputfile) or String ,\
caption : String ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)


Returns  the sent Message

###sendVideo

Input:

chat_id (*required*) :  Integer or String ,\
video (*required*) : [InputFile](https://core.telegram.org/bots/api#inputfile) or String ,\
duration : Integer ,\
width : Integer ,\
height : Integer ,\
caption : String ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)


Returns  the sent Message

### sendVoice

Input:

chat_id (*required*) :  Integer or String ,\
voice (*required*) : [InputFile](https://core.telegram.org/bots/api#inputfile) or String ,\
caption : String ,\
duration : Integer ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)


Returns the sent Message

### [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery)

Input:

callback_query_id (*required*) : String ,\
text : String ,\
show_alert : Boolean ,\
url : String ,\
cache_time : Integer

Returns Boolean