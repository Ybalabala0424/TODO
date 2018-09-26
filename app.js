//app.js
App({
  onLoad: function () {
    this.globalData.dataList = wx.getStorageSync('key')
  },
  onHide:function(){
    wx.setStorageSync('key', this.globalData.dataList)
    wx.setStorageSync('count', this.globalData.num)
  }, 
  globalData: {
    dataList:{},
    num:0,
    unNum:0
  },

})
