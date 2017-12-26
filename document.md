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

### [getMe](https://core.telegram.org/bots/api#getme)

return the bot Info

### [getUpdates](https://core.telegram.org/bots/api#getupdates)

Input:

offset : Integer ,\
limit : Integer ,\
timeout : Integer ,\
allowed_updates : Array of Strings

Returns an [UPDATE](https://core.telegram.org/bots/api#update) 

### [sendMessage](https://core.telegram.org/bots/api#sendmessage)

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

### [forwardMessage](https://core.telegram.org/bots/api#forwardmessage)

Input:

chat_id (*required*) :  Integer or String ,\
from_chat_id (*required*) :  Integer or String  ,\
message_id (*required*) :  Integer  ,\
disable_notification : Boolean

Returns  the sent Message

### [sendPhoto](https://core.telegram.org/bots/api#sendphoto)

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

### [sendAudio](https://core.telegram.org/bots/api#sendaudio)

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

###[sendDocument](https://core.telegram.org/bots/api#senddocument)

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

###[sendVideo](https://core.telegram.org/bots/api#sendvideo)

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

### [sendVoice](https://core.telegram.org/bots/api#sendvoice)

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

### [editMessageText](https://core.telegram.org/bots/api#editmessagetext)

Input:

chat_id :  Integer or String ,\
message_id : Integer ,\
inline_message_id : Integer ,\
test : String ,\
parse_mode : String ,\
disable_web_page_preview : Boolean ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup)

Returns the sent Message Or Boolean. (check Telegram)

### [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery)

Input:

callback_query_id (*required*) : String ,\
text : String ,\
show_alert : Boolean ,\
url : String ,\
cache_time : Integer

Returns Boolean

### [sendVideoNote](https://core.telegram.org/bots/api#sendvideonote)

Input:

chat_id (*required*) :  Integer or String ,\
video_note (*required*) : [InputFile](https://core.telegram.org/bots/api#inputfile) or String ,\
duration : Integer ,\
length : Integer ,\
caption : String ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns the sent Message

### [sendMediaGroup](https://core.telegram.org/bots/api#sendmediagroup)

Input:

chat_id (*required*) :  Integer or String ,\
media (*required*) : Arrays of [InputMedia](https://core.telegram.org/bots/api#inputmedia)
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\

Returns the sent Message


###[sendLocation](https://core.telegram.org/bots/api#sendlocation)

Input:

chat_id (*required*) :  Integer or String ,\
latitude (*required*) :  Float number ,\
longitude (*required*) :  Float number ,\
live_period : Integer ,\
length : Integer ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns the sent Message

###[editMessageLiveLocation](https://core.telegram.org/bots/api#editmessagelivelocation)

Input:

latitude (*required*) :  Float number ,\
longitude (*required*) :  Float number ,\
chat_id :  Integer or String ,\
message_id  :  Integer ,\
inline_message_id : String ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns the edited Message

###[stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation)

Input:

chat_id :  Integer or String ,\
message_id  :  Integer ,\
inline_message_id : String ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns the sent Message

###[sendVenue](https://core.telegram.org/bots/api#sendvenue)

Input:

chat_id :  Integer or String ,\
latitude (*required*) :  Float number ,\
longitude (*required*) :  Float number ,\
title (*required*) : String ,\
address (*required*) :String ,\
foursquare_id : String ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns the sent Message

###[sendContact](https://core.telegram.org/bots/api#sendcontact)

Input:

chat_id :  Integer or String ,\
phone_number (*required*) :  String ,\
first_name (*required*) : String ,\
last_name : String ,\
disable_notification : Boolean ,\
reply_to_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns the sent Message

###[sendChatAction](https://core.telegram.org/bots/api#sendchataction)