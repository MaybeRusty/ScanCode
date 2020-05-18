const app = getApp()
Page({
    mixins: [require('../../utils/themeChanged')],
    data: {
      metadata: {
        phone: "",
        verify: "",
      },
      canSubmit: false,
    },
    SetVerifyCode : function(e) {
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
      console.log("just test@@@@@@@@@@@@@@@@")
      app.globalData.loginStatus = true
      wx.navigateBack({
        delta: 1
      })
    }
});