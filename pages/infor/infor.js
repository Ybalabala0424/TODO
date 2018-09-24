// pages/infor/infor.js
Page({
  data: {
    options:'',
    datalist:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let datalist = getApp().globalData.datalist;
    that.setData({
      datalist: datalist,
      options: options.data.Name
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  
  finish: function (e) {
    var that = this;
    getApp().globalData.datalist[that.data.options].situation = 2;
    wx.navigateTo({
      url: '../index/index',
    })
  },
  delete: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认删除？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          delete getApp().globalData.datalist[that.data.options];
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
          });
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            });
          }, 1000)
          console.log(getApp().globalData.datalist)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
    
  }
})