let requests = require('../../request/request.js');
let utils = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    loadingHidden:false,
    bookData:null
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.setData({
      id:option.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var id = this.data.id;
    var _this = this;
    requests.requestBookDokDetail(
      id,
      {fields:'image,summary,publisher,title,rating,pubdate,author,author_intro,catalog'},
      ( data ) => {
        _this.setData({
          bookData:data
        });
        console.log(this.data.bookData);
      }, () => {
        wx.navigateBack();
      }, () => {
        _this.setData({
          loadingHidden:true
        });
      });
  }

});