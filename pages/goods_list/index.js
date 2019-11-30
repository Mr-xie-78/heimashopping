import axios from "../../until/axios"
// pages/goods_list/index.js
Page({
  // 总页数
  TotalPages:0,
  params:{
    pagenum:1,
    pagesize:5,
    query:'',
    cid:0
  },
  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    selectList:[
      {
        name:"综合",
        id:1
      },
      {
        name:"销量",
        id:2
      },
      {
        name:"价格",
        id:3
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.params.cid = options.cid
    this.getDoodsData()
  },
  getDoodsData(){
    axios({
      url:'/goods/search',
      data:this.params
    }).then(res=>{
      // console.log(res);
      const goods = this.data.goodsList
      this.setData({
        goodsList:[...goods,...res.data.message.goods]
      })
      this.TotalPages = res.data.message.total/this.params.pagesize
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
    // console.log(123);
    // 下拉刷新，页码跟数据重置
    this.params.pagenum = 1
    this.setData({
      goodsList:[]
    })
    this.getDoodsData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log('触底')
    if(this.params.pagenum >= this.TotalPages){
      // console.log('没有数据了')
      wx.showToast({
        title: '没有数据了',
        icon: 'success',
        duration: 2000,
        mask:true
      })
    }else{
      this.params.pagenum++
      // console.log(this.params.pagenum);
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1500,
        mask:true
      })
      this.getDoodsData()

    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})