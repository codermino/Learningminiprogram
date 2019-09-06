// pages/home/home.js
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;
Page({

  /**
   * 页面的初始数据
   */

  // 1.-------------------定义一些数据-----------------
  data: {
    message:"condermino",
    students: [
      { id: 1, name: "kobe", age: 30 },
      { id: 2, name: "sunhe", age: 31 },
      { id: 3, name: "james", age: 21 },
      { id: 4, name: name, age: age }
    ],
    counter: 0,
    list:[]
  },

  // 2.----------------监听wxml中一些事件--------------------
  btnClickadd() {
    // 这种写法是错误的写法，虽然counter的数据会发生改变，但是和vue不同的是界面不会实时响应的发生改变
    // this.data.counter+=1
    // console.log(this.data.counter)

    this.setData({
      counter: this.data.counter + 1
    })
  },

  btnClicksub() {
    this.setData({
      counter: this.data.counter - 1
    })
  },

  handleGetUserInof(event) {
    console.log(event);
  },



  // 3.-----------------执行生命周期函数---------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    const _this=this;
    wx.request({
      url: 'http://123.207.32.32:8000/api/v1/recommend',
      // success:(res)=>{
      //   console.log(res);

      //   const data=res.data.data.list;
      //   this.setData({
      //     list:data
      //   })
      // }
      success:function(res){
        console.log(res);
        // console.log(this);
        const data=res.data.data.list;


        // Cannot read property 'setData' of undefined;
        // 这样使用this，this指向的是前端页面的this
        // this.setData({
        //   list:data
        // })


        // 如果这样使用_this会指向的是Page中的this
        // 需要在上面定义_this
        _this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  // 4.--------------监听其他事件-------------


  onPageScroll(obj){
    // console.log(obj);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  }
})