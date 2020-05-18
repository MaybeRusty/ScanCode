//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    order: {}
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      order: {"AmountOfMoney": "2400", "OrderInfo": "乐华城-新华保险", "Data": "2020-04-05", "Number": "8000"}
    })
  },
  onTabItemTap: function() {
  }
})
