const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const menus = require('./menus')

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
    res.send('hello')
})

// /refresh_token get {token}
let t = Math.random(new Date())
router.get('/refresh_token', (req, res) => {
    res.json({ token: ++t })
})


// login
// /login post password,username { code: 200, message: '登录成功', token: token }
router.post('/login', (req, res) => {
    let data = ''
    req.on('data', (chunk) => {
        console.log(chunk);
        data += chunk
    })

    req.on('end', () => {
        data = decodeURI(data)
        try {
            data = JSON.parse(data);
        } catch (e) {
            let eles = data.split('&');
            data = {};
            eles.forEach(kv => {
                let k = kv.split('=')[0];
                let v = kv.split('=')[1];
                data[k] = v;
            })
        }
        console.log(data);
        if (!data.username || !data.password) {
            return res.send({ code: 403, message: '必须传递用户名密码' })
        } else if (data.username !== 'admin' || data.password !== '123456') {
            return res.send({ code: 403, message: '用户名或密码不正确' })
        }
        let msg = 'lyh'
        let token = jwt.sign(data, msg)
        res.send({ code: 200, message: '登录成功', token: token })
    })
})

router.get('/menus/build', (req, res) => {
    res.json(menus)
})

module.exports = router