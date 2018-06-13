//index.js
//获取应用实例
const app = getApp();

let iconColor = [
  '#42BD56',
  '#31A040'
]

Page({
  data: {
    scrollHeight:0,
    pageIndex:0,
    totalRecord:0,
    isInit:true,
    loadingMore:false,
    footerIconColor:iconColor[0],
    pageData:[],
    searchKey:null
  },
  
  onShow:function(){
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          scrollHeight: res.windowHeight - (100 * res.windowWidth / 750)
        });
      },
    })
  },
  searchInputEvent:function(e) {
    this.setData({
      searchKey:e.detail.value
    });
    console.log(this.data.searchKey);
  },
  searchClickEvent:function(e) {
    console.log(this.data.searchkey);
    console.log('clicked!');
    // if(!this.data.searchkey) {
    //   return;
    // }
    // this.setData({
    //   pageIndex:0,
    //   pageData:[]
    // });
    // requestData.call(this);
    
  }
});

// function requestData() {
//   console.log(11111);
//   // var _this = this;
//   // var q = this.data.searchKey;
//   // var start = this.data.pageIndex;
//   // this.setData({
//   //   loadingMore:true,
//   //   isInit:false
//   // });
//   // console.log(start);
// }
