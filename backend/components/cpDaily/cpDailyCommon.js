const axios = require('axios')
const to = require('await-to-js').default

const fzuAuth = {
    'tenantId': 'fzu',
    'login-url':
        'http://id.fzu.edu.cn/authserver/login?service=https%3A%2F%2Ffzu.cpdaily.com%2Fportal%2Flogin',
    'host': 'fzu.campusphere.net'
}

const headerCommon = {
    'SessionToken': 'szFn6zAbjjU=',
    'clientType': 'cpdaily_student',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 4.4.4; PCRT00 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36 okhttp/3.8.1',
    'deviceType': '1',
    'CpdailyStandAlone': '0',
    'RetrofitHeader': '8.0.8',
    'Cache-Control': 'max-age=0',
    'Content-Type': 'application/json; charset=UTF-8',
    //'Host': 'www.cpdaily.com',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip',

    'CpdailyInfo': '',
    'tenantId': 'fzu',

}

async function doLoginRes(axiosConfig) {
    let res, err
    ;[err, res] = await to(axios(axiosConfig))
    if(err) {
        console.log(err)
        return null
    }
    return res.data
}

async function doSignRes(axiosConfig) {
    let res, err
    ;[err, res] = await to(axios(axiosConfig))
    if(err) {
        console.log(err)
        return null
    }
    return (typeof res.data == 'object') ? res.data : null;

}



exports.fzuAuth = fzuAuth
exports.headerCommon = headerCommon
exports.doLoginRes = doLoginRes
exports.doSignRes = doSignRes