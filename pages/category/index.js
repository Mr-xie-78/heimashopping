import req from "../../until/axios"

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      categoryList:[],
      childrenlist:[],
      num:0,
      scrollTop:0
  },
  Cate:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // wx.request({
      //   url: 'https://api.zbztb.cn/api/public/v1/categories',
      //   success: (res) => {
      //     this.setData({
      //       categoryList:res.data.message
      //     })
      //   }
      // });
      const cates = wx.getStorageSync("cates"); 
      if(!cates){
        this.getAllData()
      }else{
        if(Date.now() - cates.time > 20 * 1000){
          this.getAllData()
        }else{
          this.Cate = cates.list
          this.setData({
            categoryList:this.Cate.map(v=>v.cat_name),
            childrenlist:this.Cate[this.data.num].children
          })
        }
      }
  },
  getAllData(){
    req({
      url: '/categories',
    }).then(res=>{
      this.Cate = res.data.message
      this.setData({
        categoryList:this.Cate.map(v=>v.cat_name),
        childrenlist:this.Cate[this.data.num].children
      })
       // 把数据存到缓存中 
       wx.setStorageSync("cates", { list: this.Cates, time: Date.now() });
    })
  },
  handleClickcat(e){
    // 点击左侧导航触发
    // console.log(e);
    const {index} = e.currentTarget.dataset
    this.setData({
      childrenlist:this.Cate[index].children,
      num:index,
      scrollTop:0
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