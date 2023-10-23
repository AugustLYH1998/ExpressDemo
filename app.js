// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()

/* 可以处理表单的数据 */
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

/* 用于处理客户端通过 JSONP 方式请求数据 */
// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // TODO: 定义 JSONP 接口具体的实现过程
    // 1. 得到函数的名称
    const funcName = req.query.callback
    // 2. 定义要发送到客户端的数据对象
    const data = { name: 'zs', age: 22 }
    // 3. 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4. 把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

/*  配置了跨域中间件，解决了接口跨域的问题 */
// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())


/* 自定义的路由模块 */
// 导入路由模块  路由都写在apiRoute.js中
const router = require('./apiRouter')
// 把路由模块，注册到 app 上、路由都经过/api前缀，比如http://localhost:3333/api/get
app.use('/api', router)

// 启动服务器
app.listen(3333, () => {
    console.log('express start at port http://localhost:3333 ...')
})


// 简单创建
// let express = require('express')

// let app = express()

// //响应接口
// app.get('/api/get', function (req, res) {
//     //数据
//     let result = {
//         "code": "200",
//         "data": {
//             "msg": "登陆成功",
//             "success": "true",
//             "token": "admin_token",
//             "username": "admin"
//         }
//     }
//     res.send(result)
// })

// app.post('/api/post', (req, res) => {
//     // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
//     let result = {
//         "code": "200",
//         "data": {
//             "msg": "登陆成功",
//             "success": "true",
//             "token": "admin_token",
//             "username": "admin"
//         }
//     }
//     res.send(result)
// });

// app.listen(3333, () => {
//     console.log('express start at port http://localhost:3333 ...');
// })