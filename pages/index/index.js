const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    isShowHistory: 0,
    unDo:[],
    dataList:{},
    isDo:[]
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
    var task={}
    var unDo = []
    var isDo = []
    for (var i in app.globalData.dataList) {
      task={
        name:app.globalData.dataList[i].name,
        key:i
      }
      var si = app.globalData.dataList[i].situation;
      if (si) {
        unDo.push(task)
        unNum++
      }else{
        isDo.push(task)
      }
    }
    this.setData({
      unNum:unNum,
      unDo:unDo,
      isDo:isDo
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
