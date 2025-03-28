// inner_module/04_crypto.js
const crypto = require('crypto');
let secret = 'adwsda';
const data = 'pw1234';

let encData = crypto.createHmac('sha512', secret) // 보안 알고리즘
                    .update(data)
                    .digest('base64');

                    console.log(encData);