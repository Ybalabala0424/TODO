const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    isShowHistory: 0,
  },
  onLoad: function () {
    var time = util.formatTime(new Date());
    this.setData({
      time: time
    })
    console.log(app.globalData.dataList)
  },
  onShow:function(){
    var unNum = 0
    for (var i in app.globalData.dataList) {
      var si = app.globalData.dataList[i].situation;
      if (si) {
        unNum++
      }
    }
    this.setData({
      unNum:unNum
    })
  },
  btn: function () {
    var that = this;
    that.setData({
      isShowHistory: (!that.data.isShowHistory)
    })
  }
})
