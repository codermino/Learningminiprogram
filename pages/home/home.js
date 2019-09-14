// pages/home/home.js
import request from '../../server/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:'http://123.207.32.32:8000/api/v1/recommend'
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    // 以下两种方式是比较传统的方式，现在一般情况下都是使用promise的方式
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/v1/home/multidata',
    //   // 如果是post请求就需要使用下面这种方式
    //   data:{
    //     type:"sell",
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
    // wx.request({
    //   // 其他的一些参数可以查看官方文档
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:"codermino",
    //     age:21
    //   },
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
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