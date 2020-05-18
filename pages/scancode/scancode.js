//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    codeResult: "",
    verifyMessage: "",
    isInvalid: false,
    isUninvalid: false
  },
  onLoad: function () {
    if (!app.globalData.loginStatus) {
      //页面跳转相当于	
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  detailCode: function() {
    console.log(this.data.codeResult)
    return true;
  },
  //事件处理函数
  scanCode() {
    var code = this;
    wx.scanCode({
      success(res) {
        code.setData({
          codeResult: res.result,
        });
        code.setData({
          verifyMessage: res.errMsg,
        })
        code.setData({
          isInvalid: true
        })
      },
      complete() {
          console.log("verify code: " + code.data.codeResult)
      },
      onlyFromCamera: true
    })
  },
  onTabItemTap: function() {
    if (!app.globalData.loginStatus) {
      //页面跳转相当于	
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  messageClose: function() {
    this.setData({
      isInvalid: false
    })
    this.scanCode()
  }
})
