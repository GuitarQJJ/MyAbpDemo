// index.js
Page({
  data: {
    message: 'Hello MINA!',
    result:''
  },
  onLoad:function(){
    var that=this;
    wx.request({
      url:'https://devapi.qweather.com/v7/weather/now?',
      method:'GET',
      data: {
            "location":"101120101",
            "key":"a607c66f06194029b2ed352b87f1b236"
      },      
      success:function (res) {
        console.log(res.data);
        that.setData({result:res.data});
        //that.setData({result:'ccccccc'});
      },
      fail:function (a) {
        // fail
        console.log(a);
      },
      complete:function () {
        // complete
      }
    })
  }
})
