const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    isShowHistory: 0,
    unDo:[],
    dataList:{},
    isDo:[]
  },
  save:function(){
    wx.setStorageSync('key', this.data.dataList);
    wx.setStorageSync('count',app.globalData.num)
  },
  load:function(){
    app.globalData.dataList = wx.getStorageSync('key');
    app.globalData.num = wx.getStorageSync('count')
    console.log(app.globalData.dataList)
  },
  onLoad: function () {
    this.load();
    console.log(app.globalData.dataList);
    var time = util.formatTime(new Date());
    
    if (app.globalData.dataList == undefined || app.globalData.num == '') {
      app.globalData.dataList = {};
      app.globalData.num = 0;

    } else {
      this.data.dataList = app.globalData.dataList;
    }
    
    this.setData({
      time: time
    })
  },
  onShow:function(){
    var unNum = 0
    var task={}
    var unDo = []
    var isDo = []
    var that=this;
    this.data.dataList = app.globalData.dataList;
    for (var i in that.data.dataList) {
      task={
        name: that.data.dataList[i].name,
        key:i
      }
      var si = that.data.dataList[i].situation;
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
    console.log(that.data.dataList)
    this.save()
  },
  btn: function () {
    var that = this;
    that.setData({
      isShowHistory: (!that.data.isShowHistory)
    });
    this.save()
  },
  onHide: function () {
    this.save()
  },
})
