//app.js
App({
  onLoad: function () {
    this.globalData.dataList = wx.getStorageSync('key')
  },
  globalData: {
    dataList:{},
    num:0,
    unNum:0
  },

})
