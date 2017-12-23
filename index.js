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

    async sendMessage(chat_id, text, reply_markup, reply_to_message_id, parse_mode, disable_web_page_preview = false, disable_notification = false) {
        return new Promise((resolve, reject) => {
            const options = this.createOptions("sendMessage");

            let data = {
                chat_id     :       chat_id,
                text        :       text

            };

            if (typeof reply_markup !== 'undefined') {
                data['reply_markup'] = reply_markup;
            }

            if (typeof reply_to_message_id !== 'undefined') {
                data['reply_to_message_id'] = reply_to_message_id;
            }

            if (typeof parse_mode !== 'undefined') {
                data['parse_mode'] = parse_mode;
            }

            if (typeof disable_web_page_preview !== 'undefined') {
                data['disable_web_page_preview'] = disable_web_page_preview;
            }

            if (typeof disable_notification !== 'undefined') {
                data['disable_notification'] = disable_notification;
            }

            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    resolve(JSON.parse(chunk));
                });

            });
            req.on('error', (e) => {
                reject(e);
            });
            req.end(JSON.stringify(data))
        });
    }

    async getUpdates(offset, limit, timeout, allowed_updates) {
        return new Promise((resolve, reject) => {
            let data = {};

            if (typeof offset !== 'undefined') {
                data['offset'] = offset;
            }

            if (typeof limit !== 'undefined') {
                data['limit'] = limit;
            }

            if (typeof timeout !== 'undefined') {
                data['timeout'] = timeout;
            }

            if (typeof allowed_updates !== 'undefined') {
                data['allowed_updates'] = allowed_updates;
            }

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

            request.end(JSON.stringify(data));
        });
    }
}

module.exports = Bot;
