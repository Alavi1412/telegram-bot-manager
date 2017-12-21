let https = require('https');

class Bot {
    constructor(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    async getMe() {
        return new Promise((resolve, reject) => {
            let options = {
                hostname: 'api.telegram.org',
                path: '/bot' + this.token + '/getMe',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                     resolve(JSON.parse(chunk));
                });
            });

            req.end();
        });

    }
}

module.exports = Bot;
