App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // console.log('小程序初始化完成: onLaunch')

    // 发送网络请求
    // wx.request({
    //   url: '',
    // }),

    // 一般情况下会在这里进行用户信息的验证
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // setTimeout(()=>{
    //   const error = new Error()

    //   throw error
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log('小程序启动完成: onShow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log('小程序从前台进入后台: onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    // console.log('小程序发生错误时执行'+msg)
  },
  globalData:{
    name:'sunhe',
    age:18
  }
})
