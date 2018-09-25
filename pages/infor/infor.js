// pages/infor/infor.js
const app = getApp()
Page({
  data: {
    options:'',
    dataList:{},
   name:'',
    infor:'',
    situ:'',
    Label:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let dataList = getApp().globalData.dataList;
    that.setData({
      dataList: dataList,
      options: options.key
    });
    console.log(this.data.options);
    var task=app.globalData.dataList[options.key]
    console.log(task)
    this.setData({
      name:task.name,
      infor:task.infor,
      situ:task.situation,
      Label:task.label
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  
  finish: function (e) {
    var that = this;
    getApp().globalData.dataList[that.data.options].situation = 0;
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
          delete getApp().globalData.dataList[that.data.options];
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
          console.log(getApp().globalData.dataList)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
    
  }
})