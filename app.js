//app.js
App({
  onLoad: function () {
    dataList = (wx.getStorage({
      key: 'key',
      success: function (res) { },
    }))
      num = wx.getStorage({
        key: 'count',
        success: function (res) { },
      })
  },
  onHide:function(){
    wx.setStorage({
      key: "key",
      data: this.globalData.dataList,
      success: function () {
        console.log('写入value1成功')
      },
      fail: function () {
        console.log('写入value1发生错误')
      }
    },
    {
      key:'count',
      data: this.globalData.num,
      success: function () {
        console.log('写入num成功')
      },
      fail: function () {
        console.log('写入num发生错误')
      }
    })
  }, 
  globalData: {
    dataList:{},
    num:0,
    unNum:0
  },

})