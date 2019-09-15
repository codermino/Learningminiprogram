const TOKEN='token'

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  globalData:{
    token:''
  },
  onLaunch: function () {
    // 先从缓存中验证token
    const token=wx.getStorageSync(TOKEN);
    if(token&&token.length!==0){
      // 验证token是否过期
      this.check_token(token);
    }else{
      this.login();
    }
  },
  check_token(token){
    console.log('进行了token验证操作');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header:{
        token
      },
      success: (res) => {
        if(!res.data.errCode){
          console.log('token有效');
          this.globalData.token=token;
        }else{
          this.login();
        }
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  },
  login(){
    console.log('进行了登录操作');
    wx.login({
      success: (res) => {
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            const token = res.data.token;

            this.globalData.token = token;

            // 进行本地存储
            wx.setStorageSync(TOKEN, token);
          }
        })
      }
    })
  }
})
