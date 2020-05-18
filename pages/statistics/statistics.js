//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    orders: [
      {item_title: "test1", item_msg: ""},
      {item_title: "test2", item_msg: ""},
      {item_title: "test3", item_msg: ""},
      {item_title: "test4", item_msg: ""},
      {item_title: "test5", item_msg: ""},
      {item_title: "test6", item_msg: ""}
    ],
    refresh_top_hidden: true,
    refresh_buttom_hidden: true,
    load_more: true
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
  }
})
