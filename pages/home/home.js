// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [
      { id: 1, name: "kobe", age: 30 },
      { id: 2, name: "sunhe", age: 31 },
      { id: 3, name: "james", age: 21 }
    ],
    counter:0
  },
  btnClickadd(){
    // 这种写法是错误的写法，虽然counter的数据会发生改变，但是和vue不同的是界面不会实时响应的发生改变
    // this.data.counter+=1
    // console.log(this.data.counter)

    this.setData({
      counter:this.data.counter+1
    })
  },

  btnClicksub(){
    this.setData({
      counter:this.data.counter-1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})