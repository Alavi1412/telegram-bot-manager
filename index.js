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
            req.end(JSON.stringify(params))

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
}


module.exports = Bot;
