let https = require('https');

class Bot {
    constructor(token) {
        this.token = token;
    }

    createOptions(method) {
        let options = {
            hostname: 'api.telegram.org',
            path: '/bot' + this.token + '/' + method,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return options;
    }

    getToken() {
        return this.token;
    }

    async getMe() {
        return new Promise((resolve, reject) => {

            const options = this.createOptions('getMe');

            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });

            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end();
        });
    }

    async sendMessage(params) {
        return new Promise((resolve, reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['text']) {
                reject("text is empty!");
            }
            const options = this.createOptions("sendMessage");

            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });

            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end(JSON.stringify(params))
        });
    }

    async getUpdates(params) {
        return new Promise((resolve, reject) => {

            const options = this.createOptions("getUpdates");

            const request = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                })
            });

            request.on('error', (e) => {
                reject(e);
            });

            request.end(JSON.stringify(params));
        });
    }

    async forwardMessage(params) {
        return new Promise((resolve, reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['from_chat_id']) {
                reject("from_chat_id is empty!");
            }
            if (!params['message_id']) {
                reject("message_id is empty");
            }
            const options = this.createOptions("forwardMessage");

            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });

            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end(JSON.stringify(params))


        });
    }

    async sendPhoto(params) {
        return new Promise((resolve, reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['photo']) {
                reject("photo is empty");
            }
            const options = this.createOptions("sendPhoto");

            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end(JSON.stringify(params))

        });


    }

    async sendAudio(params) {            // TODO : testing
        return new Promise((resolve, reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['audio']) {
                reject("audio is empty!");
            }
            const options = this.createOptions('sendAudio');
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);

            });
            req.end(JSON.stringify(params))

        });
    }

    async sendDocument(params) {            //TODO : testing

        return new Promise((resolve, reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['document']) {
                reject("document is empty!");
            }
            const options = this.createOptions('sendDocument');
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end(JSON.stringify(params))

        });

    }

    async sendVideo (params){           //TODO : testing
        return new Promise((resolve, reject ) => {
            if (!params['chat_id']){
                reject("chat_id is empty!");
            }
            if (!params['video']){
                reject("video is empty!");
            }
           const options = this.createOptions('sendVideo') ;
           const req = https.request(options, (res) => {
               res.setEncoding('utf8');
               res.on('data', (chunk) => {
                   resolve(JSON.parse(chunk));
               });
           });
           req.on('error', (e) => {
               reject(e);
           });
            req.end(JSON.stringify(params))
        });
    }

    async sendVoice (params){              //TODO : testing

        return new Promise((resolve, reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['voice']) {
                reject("voice is empty!");
            }
            const options = this.createOptions('sendVoice');
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);

            });
            req.end(JSON.stringify(params));

        });

    }

    async editMessageText (params) {
        return new Promise((resolve, reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['message_id']) {
                reject("message_id is empty!");
            }
            if (!params['text']) {
                reject("text is empty!");
            }
            const options = this.createOptions('editMessageText');
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);

            });
            req.end(JSON.stringify(params));
        });
    }

    async answerCallbackQuery(params){
        return new Promise((resolve, reject) => {
            if(!params['callback_query_id']) {
                reject("callback_query_id is empty");
            }

            const options = this.createOptions("answerCallbackQuery");

            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);

            });
            req.end(JSON.stringify(params))
        });
    }

    async sendVideoNote (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']){
                reject("chat_id is empty!");
            }
            if (!params['video_note']) {
                reject("video_note is empty!");
            }

            const options = this.createOptions("sendVideoNote");

            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error',(e) =>{
                reject(e);
            });
            req.end(JSON.stringify(params))


        });


    }

    async sendMediaGroup (params){

        return new Promise((resolve , reject) => {
            if(!params['chat_id']){
                reject("chat_id is empty!");
            }
            if(!params['media']){
                reject("media is empty!");
            }

            const options = this.createOptions('sendMediaGroup');

            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end(JSON.stringify(params))

        });
    }

    async sendLocation (params){
        return new Promise((resolve , reject) => {
            if(!params['chat_id']){
                reject("chat_id is empty!");
            }
            if(!params['latitude']){
                reject("latitude is empty!");
            }
            if(!params['latitude']){
                reject("latitude is empty!");
            }
            const options = this.createOptions('sendLocation');

            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error',(e) => {
                reject (e);
            });
            req.end(JSON.stringify(params))

        });

    }

    async editMessageLiveLocation (params){
        return new Promise((resolve , reject) => {
            if(!params['latitude']){
                reject("latitude is empty!");
            }
            if(!params['latitude']){
                reject("latitude is empty!");
            }
            const options = this.createOptions('editMessageLiveLocation');

            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject(e);
            });
            req.end(JSON.stringify(params))

        });
    }

    async stopMessageLiveLocation (params){
        return new Promise((resolve , reject) => {
            const options = this.createOptions('stopMessageLiveLocation');

            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params))

        });
    }

    async sendVenue (params) {
        return new Promise((resolve, reject) => {

            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['latitude']) {
                reject("latitude is empty!");
            }
            if (!params['latitude']) {
                reject("latitude is empty!");
            }
            if (!params['title']) {
                reject("title is empty!");
            }
            if (!params['address']) {
                reject("address is empty!");
            }

            const options = this.createOptions('sendVenue');
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end(JSON.stringify(params))

        });
    }

    async sendContact (params){
        return new Promise((resolve , reject ) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['phone_number']) {
                reject("phone_number is empty!");
            }
            if (!params['first_name']) {
                reject("first_name is empty!");
            }
            const options = this.createOptions('sendContact');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data',(chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });

    }

    async sendChatAction (params) {
        return new Promise((resolve , reject ) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['action']) {
                reject("action is empty!");
            }
            const options = this.createOptions('sendChatAction');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data',(chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject ( e);
            });
            req.end(JSON.stringify(params));
        });

    }

    async getUserProfilePhotos (params){
        return new Promise((resolve , reject ) => {
            if (!params['user_id']) {
                reject("user_id is empty!");
            }
            const options = this.createOptions('getUserProfilePhotos');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async getFile (params){
        return new Promise((resolve , reject ) => {
            if (!params['file_id']) {
                reject("file_id is empty!");
            }
            const options = this.createOptions('getFile');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async kickChatMember (params) {
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['user_id']) {
                reject("user_id is empty!");
            }
            const options = this.createOptions('kickChatMember');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error', (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async unbanChatMember (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['user_id']) {
                reject("user_id is empty!");
            }
            const options = this.createOptions('unbanChatMember');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async restrictChatMember (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['user_id']) {
                reject("user_id is empty!");
            }
            const options = this.createOptions('restrictChatMember');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async promoteChatMember (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['user_id']) {
                reject("user_id is empty!");
            }
            const options = this.createOptions('promoteChatMember');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async exportChatInviteLink (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('exportChatInviteLink');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async setChatPhoto (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['photo']) {
                reject("photo is empty!");
            }
            const options = this.createOptions('setChatPhoto');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async deleteChatPhoto (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('deleteChatPhoto');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async setChatTitle (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['title']) {
                reject("title is empty!");
            }
            const options = this.createOptions('setChatTitle');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async setChatDescription (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('setChatDescription');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async pinChatMessage (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['message_id']) {
                reject("message_id is empty!");
            }
            const options = this.createOptions('pinChatMessage');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async unpinChatMessage (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('unpinChatMessage');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async leaveChat (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('leaveChat');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async getChat (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('getChat');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async getChatAdministrators (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('getChatAdministrators');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async getChatMembersCount (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('getChatMembersCount');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async getChatMember (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['user_id']) {
                reject("user_id is empty!");
            }
            const options = this.createOptions('getChatMember');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async setChatStickerSet (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            if (!params['sticker_set_name']) {
                reject("sticker_set_name is empty!");
            }
            const options = this.createOptions('setChatStickerSet');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async deleteChatStickerSet (params){
        return new Promise((resolve , reject) => {
            if (!params['chat_id']) {
                reject("chat_id is empty!");
            }
            const options = this.createOptions('deleteChatStickerSet');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async editMessageCaption (params){
        return new Promise((resolve , reject) => {
            const options = this.createOptions('editMessageCaption');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

    async editMessageReplyMarkup (params){
        return new Promise((resolve , reject) => {
            const options = this.createOptions('editMessageReplyMarkup');
            const req = https.request(options , (res) => {
                res.setEncoding('utf8');
                res.on('data' , (chunk) => {
                    resolve(JSON.parse(chunk));
                });
            });
            req.on('error' , (e) => {
                reject (e);
            });
            req.end(JSON.stringify(params));
        });
    }

}


module.exports = Bot;
