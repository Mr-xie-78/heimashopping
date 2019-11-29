function axios({url,...params}){
    let baseUrl = "https://api.zbztb.cn/api/public/v1"
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl + url,
            ...params,
            success: (result) => {
                resolve(result)
            }
        });
          
    })
}


export default axios