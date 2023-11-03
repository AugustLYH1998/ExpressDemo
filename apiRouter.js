const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const menus = require('./menus')
const multer = require('multer');
const fs = require('fs');

const upload = multer({ dest: 'C:\\Users\\Administrator\\Downloads' }); // 指定文件保存的目录

// 处理文件上传请求
router.post('/upload', upload.single('media'), (req, res) => {
    // 文件已上传并保存到指定目录中
    // 可以通过 req.file 获取上传的文件信息
    const filePath = req.file.path;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        // 解析文本文件
        const lines = data.split('\n');
        lines.forEach((line) => {
            console.log(line);
        });
        res.send('文件上传成功！');
    });
});

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用 res.send() 方法，向客户端响应处理的结果
    res.send({
        status: 0, // 0 表示处理成功，1 表示处理失败
        msg: 'GET 请求成功！', // 状态的描述
        data: query, // 需要响应给客户端的数据
    })
})

// 定义 POST 接口
router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
    const body = req.body
    // 调用 res.send() 方法，向客户端响应结果
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body,
    })
})

// 定义 DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE请求成功',
    })
})


// test
router.get('/get/arr', (req, res) => {
    // console.log(res);
    //设置允许跨域的域名,*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send({
        status: 0,
        msg: 'GET 请求成功！',
        data: [{
            arr1:
                [45, 43, 46, 48, 52, 47]
        }
            , {
            arr2: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }]
    })
})

//  /
router.get('/', (req, res) => {
    res.send({
        msg: 'success',
        data: 'hello',
        code: 200
    })
})

// /refresh_token get {token}
let t = Math.random(new Date())
router.get('/refresh_token', (req, res) => {
    res.json({ token: ++t })
})


// login
// /login post password,username { code: 200, message: '登录成功', token: token }
router.post('/login', (req, res) => {
    let data = req.body;
    console.log('data1', data);
    // if (typeof (data)=='String'){
    //     data = decodeURI(data)
    // }
    // try {
    //     data = JSON.parse(data);
    // } catch (e) {
    //     let eles = data.split('&');
    //     data = {};
    //     eles.forEach(kv => {
    //         let k = kv.split('=')[0];
    //         let v = kv.split('=')[1];
    //         data[k] = v;
    //     })
    // }
    // console.log(data);
    if (!data.username || !data.password) {
        return res.send({ code: 403, message: '必须传递用户名密码' })
    } else if (data.username !== 'admin' || data.password !== '123456') {
        return res.send({ code: 403, message: '用户名或密码不正确' })
    }
    // else if (!data.token){
    //     return res.send({ code: 403, message: '没有传递秘钥' })
    // }
    // else return res.send({ code: 500, message: '服务器错误' })
    let msg = 'lyh'
    let token = jwt.sign(data, msg)
    console.log(token);
    res.send({ code: 200, message: '登录成功', token: token })

})

router.get('/menus/build', (req, res) => {
    res.json(menus)
})


// 随机token
function generateRandomToken(length) {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = ''
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * char.length);
        // console.log(randomIndex);
        token += char.charAt(randomIndex);
    }
    return token;
}

// /access_token
router.get('/access_token', (req, res) => {
    // console.log(req.query);
    if (!req.query.grant_type || !req.query.secret || !req.query.appid) {
        return res.send({ code: 403, message: '缺少参数' })
    }
    let ACCESS_TOKEN = generateRandomToken(20)
    res.send({
        access_token: ACCESS_TOKEN,
        expires_in: '7200'
    })
})

// 发送什么打印什么
router.get('/any', (req, res) => {
    res.send(req.query)
})

module.exports = router