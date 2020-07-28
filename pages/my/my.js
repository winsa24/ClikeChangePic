// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[
      {id: "1",content: "abc", liked: "true"},
      {id: "2",content: "edf", liked: "false"},
      {id: "3",content: "ghi", liked: "true"},
    ],

  },

  like:function(e){
    console.log(e);
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(index);
    console.log(this.data.articles[index].liked);
    var aindex = "articles[" + index + "].liked";
    this.setData({
      [aindex]: !this.data.articles[index].liked
    })
    console.log(this.data.articles[index].liked);
    
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