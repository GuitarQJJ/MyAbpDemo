// pages/weight/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url:'http://82.157.20.10:10025/Anno/WApi/getWeightRecord.aspx',
      method:'POST',
      data:{
            "appcode":"webapiuser01",
            "timestamp":"1606455434886",
            "startDate":"2020-11-27",
            "endDate":"2021-11-27",
            "invName":"",
            "unitName":"",
            "vehicleCode":"",
            "sign":""
      },
      success:function (res) {
        console.log(res.data);
        that.setData({result:res.data});
      },
      fail:function (a) {
        // fail
        console.log(a);
      },
      complete:function () {
        // complete
      }
    })
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