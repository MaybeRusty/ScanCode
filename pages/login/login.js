const app = getApp()
var interval = null
Page({
    mixins: [require('../../utils/themeChanged')],
    data: {
      metadata: {
        phone: "",
        verify: "",
      },
      time_text: "获取验证码",
      time_last: 61,
      send_verify: true,
      phone_verify: 0,
      canSubmit: false,
    },
    SetVerifyCode : function(e) {
      this.setData()
      this.data.metadata.verify = e.detail.value
      console.log(this.data.metadata.verify)
    },
    SetPhoneNum: function(e) {
      this.data.metadata.phone = e.detail.value
      console.log(e.detail.value)
    },
    checkboxChange: function(e) {
      console.log(e.detail.value[0])
        this.setData({
          canSubmit: e.detail.value[0] ? true : false
        })
    },
    submitData: function(e) {
      app.globalData.loginStatus = true
      wx.switchTab({
        url: "../scancode/scancode"
      })
    },
    verify_code_send: function() {
      this.getCode()
    },
    getCode: function (options){
      var that = this;
      var currentTime = that.data.time_last
      interval = setInterval(function () {
        currentTime--;
        that.setData({
          time_text: currentTime+'秒'
        })
        if (currentTime <= 0) {
          clearInterval(interval)
          that.setData({
            time_text: '重新发送',
            time_last:61,
            disabled: false   
          })
        }
      }, 1000)  
    }
});