module.exports = [
    {
      "path": '/',
      "meta": {
        "title": "首页"
      }
    },
    {
      "name": "商品管理",
      "path": "/shop",
      "hidden": false,
      "redirect": "noredirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "商品管理",
        "icon": "shop",
        "noCache": false
      },
      "children": [
        {
          "name": "GoodsAdd",
          "path": "/shop/goodsAdd",
          "hidden": true,
          "component": "shop/goods/form",
          "meta": {
            "title": "商品新增",
            "icon": "anq",
            "noCache": true
          }
        },
        {
          "name": "GoodsEdit",
          "path": "/shop/goodsEdit/:id",
          "hidden": true,
          "component": "shop/goods/form",
          "meta": {
            "title": "商品修改",
            "icon": "anq",
            "noCache": true
          }
        },
        {
          "name": "Cate",
          "path": "/shop/cate",
          "hidden": false,
          "component": "shop/cate/index",
          "meta": {
            "title": "商品分类",
            "icon": "icon",
            "noCache": true
          }
        },
        {
          "name": "Goods",
          "path": "/shop/goods",
          "hidden": false,
          "component": "shop/goods/index",
          "meta": {
            "title": "管理商品",
            "icon": "develop",
            "noCache": false
          }
        }
      ]
    },
    {
      "name": "会员管理",
      "path": "/member",
      "hidden": false,
      "redirect": "noredirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "会员管理",
        "icon": "peoples",
        "noCache": true
      },
      "children": [
        {
          "name": "Member",
          "path": "/member/member",
          "hidden": false,
          "component": "shop/user/index",
          "meta": {
            "title": "会员",
            "icon": "peoples",
            "noCache": true
          }
        },
        {
          "name": "Userlevel",
          "path": "/member/userlevel",
          "hidden": false,
          "component": "shop/userlevel/index",
          "meta": {
            "title": "会员等级",
            "icon": "dengji",
            "noCache": true
          }
        },
        {
          "name": "Usertask",
          "path": "/member/usertask",
          "hidden": false,
          "component": "shop/usertask/index",
          "meta": {
            "title": "等级任务",
            "icon": "task manege",
            "noCache": true
          }
        },
        {
          "name": "Bill",
          "path": "/member/bill",
          "hidden": false,
          "component": "shop/user/bill",
          "meta": {
            "title": "用户账单",
            "icon": "list",
            "noCache": true
          }
        },
        {
          "name": "OnlineMember",
          "path": "/member/onlinet",
          "hidden": false,
          "component": "monitor/online/indext",
          "meta": {
            "title": "在线会员",
            "icon": "Steve-Jobs",
            "noCache": true
          }
        }
      ]
    },
    {
      "name": "订单管理",
      "path": "/order",
      "hidden": false,
      "redirect": "noredirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "订单管理",
        "icon": "lock",
        "noCache": true
      },
      "children": [
        {
          "name": "Order",
          "path": "/order/order",
          "hidden": false,
          "component": "shop/order/index",
          "meta": {
            "title": "订单",
            "icon": "order",
            "noCache": false
          }
        },
        {
          "name": "Reply",
          "path": "/order/reply",
          "hidden": false,
          "component": "shop/reply/index",
          "meta": {
            "title": "评论管理",
            "icon": "comment",
            "noCache": true
          }
        },
        {
          "name": "Express",
          "path": "/order/express",
          "hidden": false,
          "component": "shop/express/index",
          "meta": {
            "title": "物流快递",
            "icon": "express",
            "noCache": true
          }
        }
      ]
    },
    {
      "name": "电子券管理",
      "path": "/syscoupon",
      "hidden": false,
      "redirect": "noredirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "电子券管理",
        "icon": "coupon",
        "noCache": true
      },
      "children": [
        {
          "name": "Coupon",
          "path": "/syscoupon/coupon",
          "hidden": false,
          "component": "activity/coupon/index",
          "meta": {
            "title": "优惠券制作",
            "icon": "coupon",
            "noCache": true
          }
        },
        {
          "name": "Couponissue",
          "path": "/syscoupon/couponissue",
          "hidden": false,
          "component": "activity/couponissue/index",
          "meta": {
            "title": "已发布优惠券",
            "icon": "coupon2",
            "noCache": true
          }
        },
        {
          "name": "Couponuser",
          "path": "/syscoupon/couponuser",
          "hidden": false,
          "component": "activity/storecouponuser/index",
          "meta": {
            "title": "优惠券领取记录",
            "icon": "log",
            "noCache": true
          }
        }
      ]
    },
    {
      "name": "营销管理",
      "path": "/activity",
      "hidden": false,
      "redirect": "noredirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "营销管理",
        "icon": "yingxiao",
        "noCache": true
      },
      "children": [
        {
          "name": "Combination",
          "path": "/activity/combination",
          "hidden": false,
          "component": "activity/combination/index",
          "meta": {
            "title": "拼团产品",
            "icon": "peoples",
            "noCache": true
          }
        },
        {
          "name": "Pink",
          "path": "/activity/pink",
          "hidden": false,
          "component": "activity/combinlist/index",
          "meta": {
            "title": "拼团列表",
            "icon": "list",
            "noCache": true
          }
        },
        {
          "name": "Seckill",
          "path": "/activity/seckill",
          "hidden": false,
          "component": "activity/seckill/index",
          "meta": {
            "title": "秒杀产品",
            "icon": "seckill",
            "noCache": true
          }
        },
        {
          "name": "Seckillconfig",
          "path": "/activity/seckillconfig",
          "hidden": false,
          "component": "shop/set/seckill",
          "meta": {
            "title": "秒杀配置",
            "icon": "configure",
            "noCache": true
          }
        },
        {
          "name": "Bargain",
          "path": "/activity/bargain",
          "hidden": false,
          "component": "activity/bargain/index",
          "meta": {
            "title": "砍价产品",
            "icon": "Sign",
            "noCache": true
          }
        }
      ]
    }
  ]