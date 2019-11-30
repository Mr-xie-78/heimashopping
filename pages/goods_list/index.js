import axios from "../../until/axios"
// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    pagenum:1,
    pagesize:5,
    selectList:[
      {
        name:"综合",
        cid:1
      },
      {
        name:"销量",
        cid:2
      },
      {
        name:"价格",
        cid:3
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    axios({
      url:'/goods/search',
      data:{
        pagenum:this.data.pagenum,
        pagesize:this.data.pagesize,
      }
    }).then(res=>{
      // console.log(res);
      this.setData({
        goodsList:res.data.message.goods
      })
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