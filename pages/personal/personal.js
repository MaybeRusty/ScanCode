//test.js
const app = getApp()
Page({
  data: {
    test: "这是我的test页面哦哦！！！"
  },
  onLoad: function () {
    // if (!app.globalData.loginStatus) {
    //   //页面跳转相当于
    //   wx.navigateTo({
    //     url: '../login/login',
    //   })
    // }
  },
  onTabItemTap: function() {
    if (!app.globalData.loginStatus) {
      //页面跳转相当于	
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  logout: function() {
    app.globalData.loginStatus = false
    wx.redirectTo({
      url: "../login/login"
    })
  }
})