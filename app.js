//app.js
App({
  onLoad: function () {
    this.globalData.dataList = wx.getStorageSync('key')/*({
      key: 'key',
      success: function (res) { 
        console.log('成功')
      },
    })*/
      this.globalData.num = wx.getStorageSync('count')/*({
        key: 'count',
        success: function (res) { 
          console.log('成功')
        },
      })*/
  },
  onHide:function(){
    wx.setStorageSync('key', this.globalData.dataList)/*({
      key: "key",
      data: this.globalData.dataList,
      success: function () {
        console.log('写入value1成功')
      },
      fail: function () {
        console.log('写入value1发生错误')
      }
    },*/
    wx.setStorageSync('count', this.globalData.num)/*{
      key:'count',
      data: this.globalData.num,
      success: function () {
        console.log('写入num成功')
      },
      fail: function () {
        console.log('写入num发生错误')
      }
    })*/
  }, 
  globalData: {
    dataList:{},
    num:0,
    unNum:0
  },

})