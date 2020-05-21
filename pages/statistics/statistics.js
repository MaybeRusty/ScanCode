//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    orders: [
      {"item_title": "test1", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test2", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test3", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test4", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test5", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test6", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test7", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test8", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test9", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test10", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test11", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test12", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test13", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test14", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test15", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test16", "item_value": 0, "item_msg": "", "item_status": false},
      {"item_title": "test17", "item_value": 0, "item_msg": "", "item_status": false}
    ],
    item: {
      item_title: "just_test",
      item_value: 0,
      item_msg: ""
    },
    refresh_top_hidden: true,
    refresh_buttom_hidden: true,
    load_more: true,
    add_item: false
  },
  onLoad: function () {
    if (!app.globalData.loginStatus) {
      //页面跳转相当于	
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  onTabItemTap: function() {
    if (!app.globalData.loginStatus) {
      //页面跳转
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  onPullDownRefresh: function (e) {
      var that = this
      // 显示刷新动画
      that.setData({
        refresh_top_hidden: false
     })
      setTimeout(function () {
         // 显示刷新动画
        that.setData({
          refresh_top_hidden: true
        })
      }, 1000)
  },
  onReachBottom: function(){
    var that = this
      // 显示刷新动画
      that.setData({
        refresh_buttom_hidden: false
     })
      setTimeout(function () {
         // 显示刷新动画
        that.setData({
          refresh_buttom_hidden: true
        })
      }, 1000)
  },
  placeOrder: function() {
    var that = this
    that.setData({
      add_item: true
    })
  },
  add_item_handle: function() {
    var that = this
    var cur_orders = that.data.orders
    cur_orders.splice(5, 1)
    cur_orders.push(that.data.item)
    that.setData({
      orders: cur_orders,
      add_item: false
    })
  },
  add_item_close: function() {
    this.setData({
      add_item: false
    })
  }
})