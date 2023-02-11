const express = require('express')
const router = express.Router()

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
    //设置允许跨域的域名,*代表允许任意域名跨域
    res.setheader("Access-Control-Allow-Origin", "*")

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



module.exports = router