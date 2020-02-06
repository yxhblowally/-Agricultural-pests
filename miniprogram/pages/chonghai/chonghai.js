// pages/lianjie/lianjie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      {imgsrc:'../../images/2.jpg'},
      {imgsrc:'../../images/5.png'},
      {imgsrc:'../../images/12.PNG'}
    ],
    imgUrl:[
      {imgsr:'../../images/1.PNG'},
      {imgsr:'../../images/6.PNG'},
      {imgsr:'../../images/4.PNG'}
    ], 
  },

  upLoad:function(event){
    var that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album','camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
         console.log(tempFilePaths); 
        that.setData({addres: tempFilePaths[0]})
      }
    });
      wx.navigateTo({
       url: '../search/search'
    }); 
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