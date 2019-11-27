
Page({
    data:{
       lunboList:[],
       nav_list:[],
       floorList:[] 
    },
    onLoad(){
        wx.request({
            url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
            success: (res) => {
                // console.log(res);
                this.setData({
                    lunboList:res.data.message
                })
            }
        });
        wx.request({
            url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
            success: (res) => {
                // console.log(res);
                this.setData({
                    nav_list:res.data.message
                })
            }
        });
        wx.request({
            url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
            success: (res) => {
                console.log(res);
                this.setData({
                    floorList:res.data.message
                })
            }
        });
    }
})
