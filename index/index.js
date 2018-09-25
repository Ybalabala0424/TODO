const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    isShowHistory: 0,
    unDo:[],
    dataList:{}
  },
  onLoad: function () {
    var time = util.formatTime(new Date());
    this.data.dataList = app.globalData.dataList; 
    this.setData({
      time: time
    })
  },
  onShow:function(){
    var unNum = 0
    var unDo = []
    for (var i in app.globalData.dataList) {
      var si = app.globalData.dataList[i].situation;
      if (si) {
        unDo.push(app.globalData.dataList[i])
        unNum++
      }
    }
    this.setData({
      unNum:unNum,
      unDo:unDo
    })
    console.log(app.globalData.dataList)
    console.log(this.data.dataList)
  },
  btn: function () {
    var that = this;
    that.setData({
      isShowHistory: (!that.data.isShowHistory)
    })
  }
})
