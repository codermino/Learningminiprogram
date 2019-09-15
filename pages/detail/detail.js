// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleBack(){
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    const page=getCurrentPages();
    // console.log(page);

    const home=page[page.length-2];
    home.setData({
      title:'呵呵呵'
    })
  }, 
})