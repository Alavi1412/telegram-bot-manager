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

### [sendDocument](https://core.telegram.org/bots/api#senddocument)

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

### [sendVideo](https://core.telegram.org/bots/api#sendvideo)

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

text  (*required*) : String ,\
chat_id :  Integer or String ,\
message_id : Integer ,\
inline_message_id : Integer ,\
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


### [sendLocation](https://core.telegram.org/bots/api#sendlocation)

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

### [editMessageLiveLocation](https://core.telegram.org/bots/api#editmessagelivelocation)

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

### [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation)

Input:

chat_id :  Integer or String ,\
message_id  :  Integer ,\
inline_message_id : String ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) \
or [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)  \
or [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) \
or [ForceReply](https://core.telegram.org/bots/api#forcereply)

Returns the sent Message

### [sendVenue](https://core.telegram.org/bots/api#sendvenue)

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

### [sendContact](https://core.telegram.org/bots/api#sendcontact)

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
 
### [sendChatAction](https://core.telegram.org/bots/api#sendchataction)

Input:

chat_id (*required*) :  Integer or String ,\
action (*required*) :  String ,\

Returns Boolean


### [getUserProfilePhotos](https://core.telegram.org/bots/api#getuserprofilephotos)

Input:

user_id (*required*) :  Integer ,\
offset : Integer ,\
limit : Integer ,\

Returns a UserProfilePhotos object


### [getFile](https://core.telegram.org/bots/api#getfile)

Input:

file_id (*required*) :  Integer ,\


Returns a [File](https://core.telegram.org/bots/api#file) Object


### [kickChatMember](https://core.telegram.org/bots/api#kickchatmember)

Input:

chat_id (*required*) :  Integer or String ,\
user_id (*required*) :  Integer  ,\
until_date : Integer  ,\

Returns Boolean


### [unbanChatMember](https://core.telegram.org/bots/api#unbanchatmember)

Input:

chat_id (*required*) :  Integer or String ,\
user_id (*required*) :  Integer  ,\


Returns Boolean


### [restrictChatMember](https://core.telegram.org/bots/api#restrictchatmember)


Input:

chat_id (*required*) :  Integer or String ,\
user_id (*required*) :  Integer  ,\
until_date : Integer  ,\
can_send_messages : Boolean ,\
can_send_media_messages : Boolean  ,\
can_send_other_messages : Boolean ,\
can_add_web_page_previews : Boolean ,\


Returns Boolean


### [promoteChatMember](https://core.telegram.org/bots/api#promotechatmember)


Input:

chat_id (*required*) :  Integer or String ,\
user_id (*required*) :  Integer  ,\
can_change_info :  Boolean ,\
can_post_messages : Boolean ,\
can_edit_messages : Boolean ,\
can_delete_messages : Boolean ,\
can_invite_users : Boolean ,\
can_restrict_members : Boolean ,\
can_pin_messages : Boolean ,\
can_promote_members : Boolean ,\


Returns Boolean

### [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink)

Input:

chat_id (*required*) :  Integer or String ,\

Returns String


### [setChatPhoto](https://core.telegram.org/bots/api#setchatphoto)

Input:

chat_id (*required*) :  Integer or String ,\
photo (*required*) :  [InputFile](https://core.telegram.org/bots/api#inputfile)  ,\


Returns Boolean

### [deleteChatPhoto](https://core.telegram.org/bots/api#deletechatphoto)

Input:

chat_id (*required*) :  Integer or String ,\

Returns Boolean

### [setChatTitle](https://core.telegram.org/bots/api#setchattitle)

Input:

chat_id (*required*) :  Integer or String ,\
title (*required*) :  String  ,\

Returns Boolean


### [setChatDescription](https://core.telegram.org/bots/api#setchatdescription)

Input:

chat_id (*required*) :  Integer or String ,\
description :  String  ,\


Returns Boolean


### [pinChatMessage](https://core.telegram.org/bots/api#pinchatmessage)

Input:

chat_id (*required*) :  Integer or String ,\
message_id (*required*) :  Integer  ,\
disable_notification : Boolean   ,\

Returns Boolean

### [unpinChatMessage](https://core.telegram.org/bots/api#unpinchatmessage)

Input:

chat_id (*required*) :  Integer or String ,\

Returns Boolean


### [leaveChat](https://core.telegram.org/bots/api#leavechat)

Input:

chat_id (*required*) :  Integer or String ,\


Returns Boolean

### [getChat](https://core.telegram.org/bots/api#getchat)

Input:

chat_id (*required*) :  Integer or String ,\

Returns a [Chat](https://core.telegram.org/bots/api#chat) object

### [getChatAdministrators](https://core.telegram.org/bots/api#getchatadministrators)

Input:

chat_id (*required*) :  Integer or String ,\

Returns an Array of [ChatMember](https://core.telegram.org/bots/api#chatmember) objects

### [getChatMembersCount](https://core.telegram.org/bots/api#getchatmemberscount)

Input:

chat_id (*required*) :  Integer or String ,\

Returns Integer

### [getChatMember](https://core.telegram.org/bots/api#getchatmember)

Input:

chat_id (*required*) :  Integer or String ,\
user_id (*required*) :  Integer  ,\


Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object

### [setChatStickerSet](https://core.telegram.org/bots/api#setchatstickerset)

Input:

chat_id (*required*) :  Integer or String ,\
sticker_set_name (*required*) :  String ,\

Returns Boolean

### [deleteChatStickerSet](https://core.telegram.org/bots/api#deletechatstickerset)

Input:

chat_id (*required*) :  Integer or String ,\

Returns Boolean

### [editMessageCaption](https://core.telegram.org/bots/api#editmessagecaption)

Input:

chat_id :  Integer or String ,\
message_id : Integer ,\
inline_message_id : Integer ,\
caption : String ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup)

Returns Boolean

### [editMessageReplyMarkup](https://core.telegram.org/bots/api#editmessagereplymarkup)

Input:

chat_id :  Integer or String ,\
message_id : Integer ,\
inline_message_id : Integer ,\
reply_markup : [InlineKeyboardMarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup)

Returns Boolean

### [deleteMessage](https://core.telegram.org/bots/api#deletemessage)

Input:

chat_id (*required*) :  Integer or String ,\
message_id (*required*) :  Integer  ,\

Returns Boolean

### [answerInlineQuery](https://core.telegram.org/bots/api#answerInlineQuery)

Input:

inline_query_id (*required*) :  String ,\
results (*required*) :  Array of [InlineQueryResult](https://core.telegram.org/bots/api#inlinequeryresult)  ,\
cache_time : Integer ,\
is_personal : Boolean ,\
next_offset : Integer ,\
switch_pm_text : string .\
switch_pm_parameter : string ,\

Returns Boolean

#### [The   End](https://core.telegram.org/bots/api)