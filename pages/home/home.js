// pages/home/home.js
import{
  getMultiData,
  getGoodsData
}from "../../servers/home.js"

const types=['pop','new','sell']

Page({

  data: {
    banners:[],
    recommends:[],
    titles: ['流行', '新款', '精选'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType:'pop'
  },

  onLoad: function (options) {
    // 请求轮播图数据
    this._getMultiData();

    // 请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },

  // ------------------------网络请求函数------------------------

  // 请求轮播图数据,加上一个_表示为私有函数，约定俗成的
  _getMultiData(){
    getMultiData().then((res) => {
      // console.log(res);

      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      this.setData({
        banners,
        recommends
      })
    })
  },

  _getGoodsData(type){
    // 获取对应的页码
    const page=this.data.goods[type].page+1;
    getGoodsData(type,page).then((res)=>{
      console.log(res);

      // 1.取出数据
      const list=res.data.data.list;

      // 2.将数据设置到对应的type中
      // for(let item of list){
      //   this.data.goods[type].list.push(item);
      // }
      // 在es6中有一个...语法，它会将数据自动展开,获取到每一个元素，并且把每一个元素push到对应的list中

      // 下面这种写法，没有办法让页面进行刷新，因为要使用this.setData({})
      // this.data.goods[type].list(...item);
      const oldList=this.data.goods[type].list;
      oldList.push(...list);

      const typeKey='goods.'+type+'.list';
      const pageKey='goods.'+type+'.page';
      // 将数据设置到对应的goods中
      this.setData({
        // 这样表示typeKey是之前的变量，而不是data中的typeKey
        [typeKey]:oldList,
        [pageKey]:page
      })
    })
  },


  // ------------------------事件监听函数------------------------
  handleTabClick(event){
    const index=event.detail.index;
    // console.log(index);
    // console.log(event);

    this.setData({
      currentType: types[index]
    })
  }
})