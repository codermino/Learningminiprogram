// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:[
      '衣服',
      '鞋子',
      '帽子'
    ]
  },

  handleItemClick(event){
    // console.log(event);
    const data=event.currentTarget.dataset;
    const index=data.index;
    const item=data.item;
    console.log(index+' '+item);
  },
  handleCaptureView1(){
    console.log("handleCaptureView1");
  },
  handleCaptureView2(){
    console.log("handleCaptureView2");
  },
  handleCaptureView3(){
    console.log("handleCaptureView3");
  },
  handleBindTapView1(){
    console.log("handleBindTapView1");
  },
  handleBindTapView2(){
    console.log("handleBindTapView2");
  },
  handleBindTapView3(){
    console.log("handleBindTapView3");
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