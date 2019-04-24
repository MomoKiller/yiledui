// export function GetApi(key) {
//     const apis = {
//         'searchCategory': '//prize.ule.com/mc/couponWall/searchCategory'     // 网的一个测试接口
//     }
//     let apiUrl = apis[key];
//     return apiUrl;
// }

// 存放api 接口
const apis = {
    'searchCategory': '//prize.ule.com/mc/couponWall/searchCategory'     // 网的一个测试接口
}

// 暂时未改
// const com = {
//     apis: {
//         'searchCategory': '//prize.ule.com/mc/couponWall/searchCategory'     // 网的一个测试接口
//     },
//     getApi: function (key) {
//         let apiUrl = apis[key];
//         return apiUrl;
//     },
//     // 获取数据
//     getData: function (that, url, d, call) {
//         that.$http
//             .jsonp(url, { params: d })
//             .then(res => {
//                 call(res.body);
//             }).catch(error => {
//                 console.log(error);
//             })
//     }
// }

export default {
    // 获取api 接口
    getApi: function (key) {
        let apiUrl = apis[key];
        return apiUrl;
    },
    // 获取数据
    getData: function (that, url, d, call) {
        that.$http
            .jsonp(url, { params: d })
            .then(res => {
                call(res.body);
            }).catch(error => {
                console.log(error);
            })
    }
}