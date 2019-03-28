export function GetApi(key) {
    const apis = {
        'searchCategory': '//prize.ule.com/mc/couponWall/searchCategory'     // ule网的一个测试接口
    }
    let apiUrl = apis[key];
    return apiUrl;
}
