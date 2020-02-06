// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Preview:function(){
    wx.previewImage({
      urls: ["http://tmp/wx9263fd1ef1c52587.o6zAJszZPuOa8WmaDcEWJhKqDsr8.GUvbtdvN55dv16b35b03334d61a5d06937178244aac5.png"]
    })
  },

  Getinfo:function(){
    wx.showLoading({
      title: '加载中',
    })
    wx.navigateTo({
      url: '../xinxi/xinxi',
    })
   
    wx.hideLoading(); 
  },

  

 
})