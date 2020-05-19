//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    order: {}
  },
  onLoad: function (options) {
    var order_id = options.id
    console.log(options.id)
    this.setData({
      order: {"AmountOfMoney": "2400", "OrderInfo": "乐华城-新华保险", "Data": "2020-04-05", "Number": "8000", "status": false}
    })
  },
  onTabItemTap: function() {
  },
  pay_money: function() {
    var that = this
    var cur_order = that.data.order
    cur_order.status = true
    that.setData({
      order: cur_order
    })
  },
  pay_return: function() {
    wx.navigateBack({
      delta: 1
    })
  }
})
