const util = require('../../utils/util.js')
const app = getApp()
var interval = null
Page({
    mixins: [require('../../utils/themeChanged')],
    data: {
      metadata: {
        phone: "",
        verify: "",
      },
      phone_check: {
        phone_verify: 0 //0: info, 1: warn, 2: success
      },
      verify_check: {
        time_text: "获取验证码",
        time_out: 61,
        can_send: true,
        verify_set: false
      },
      toast_ctrl: {
        enable: false,
        succ: true,
        err_msg: ""
      }
    },
    SetVerifyCode : function(e) {
      var verify_check = this.data.verify_check
      if (e.detail.value == "") {
        verify_check.verify_set = false
      } else {
        verify_check.verify_set = true
      }
      this.setData({
        verify_check: verify_check
      })
      this.data.metadata.verify = e.detail.value
      console.log(this.data.metadata.verify)
    },
    SetPhoneNum: function(e) {
      var phone_check = this.data.phone_check
      var verify_check = this.data.verify_check
      var toast_ctrl = this.data.toast_ctrl
      if (e.detail.value == "") {
        phone_check.phone_verify = 0
      } else {
        var verify_result = util.phoneVerify(e.detail.value)
        if (verify_result) {
          this.data.metadata.phone = e.detail.value
          phone_check.phone_verify = 2
        } else {
          this.win_alert(true, false, "无效的手机号")
          phone_check.phone_verify = 1
        }
      }
      this.setData({
        phone_check: phone_check,
        toast_ctrl: toast_ctrl
      })
    },
    phone_reset: function() {
      var metadata = this.data.metadata
      var phone_check = this.data.phone_check
      metadata.phone = ""
      phone_check.phone_verify = 0
      this.setData({
        metadata: metadata,
        phone_check: phone_check
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
      var verify_check = that.data.verify_check
      var phone_check = that.data.phone_check
      //拦截多次点击事件
      if (!verify_check.can_send || phone_check.phone_verify != 2) {
        return
      }
      this.win_alert(true, true, "验证码已发送")
      verify_check.can_send = false
      that.setData({
        verify_check: verify_check
      })
      var currentTime = verify_check.time_out
      interval = setInterval(function () {
        currentTime--;
        verify_check.time_text = currentTime+'秒'
        that.setData({
          verify_check: verify_check
        })
        if (currentTime <= 0) {
          clearInterval(interval)
          verify_check.time_text = '重新发送'
          verify_check.time_out = 61
          verify_check.can_send = true
          that.setData({
            verify_check: verify_check
          })
        }
      }, 1000)  
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
});