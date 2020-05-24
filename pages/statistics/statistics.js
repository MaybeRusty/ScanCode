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
    add_item: false,
    toast_ctrl: {
      enable: false,
      succ: true,
      err_msg: ""
    }
  },
  onLoad: function () {
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
  set_item_value: function(e) {
    console.log(e.detail.value)
    var item = this.data.item
    item.item_value = e.detail.value
    this.setData({
      item: item
    })
  },
  placeOrder: function() {
    var that = this
    that.setData({
      add_item: true
    })
  },
  add_item_handle: function(event) {
    var that = this
    var cur_data = event.currentTarget.dataset.item
    console.log(cur_data.item_value)
    if (cur_data.item_value <= 0) {
      this.win_alert(true, false, "无效的订单数量")
      return
    }
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
  },
  //操作反馈提示
  win_alert: function(enable, succ, errmsg) {
    var toast_ctrl = this.data.toast_ctrl
    toast_ctrl.enable = enable
    toast_ctrl.succ = succ
    toast_ctrl.err_msg = errmsg
    setTimeout(() => {
      this.setData({
        toast_ctrl: toast_ctrl
      });
      toast_ctrl.enable = false
      setTimeout(() => {
          this.setData({
            toast_ctrl: toast_ctrl
          });
      }, 300);
    }, 1000);
  }
})