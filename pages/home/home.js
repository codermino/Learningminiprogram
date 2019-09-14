// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '我是标题',
      icon:'loading',
      duration:3000,
      mask:true,
      success:function(){
        console.log('展示弹窗成功');
      },
      fail:function(){
        console.log('展示弹窗失败');
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      cancelColor:'red',
      cancelText:'退出',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }
})