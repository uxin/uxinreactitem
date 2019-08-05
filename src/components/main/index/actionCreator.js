// 定义接口
import request from "@/core/http/http";

// 获取热门城市
export const GET_INDEX_HOTCITY = "index/get_index_hotCity";
// 获取更多城市
export const GET_INDEX_MORECITY = "index/get_index_moreCity";
// 设置首页
export const SET_INDEX_DATA = "index/set_index_data";
//首页
export const SET_INDEX_DATALIST = "index/set_index_dataList";
//热门演出
export const SET_INDEX_HOTPROGRAM = "index/set_index_hotProgram";

export const action = (val,type) => {
    return {
        type,
        val
    }
}

// 获取热门城市
export const loadHotCityDataAsync = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "/city/city/getHotCityList?version=6.0.1&referer=2"
        }).then((res) => {
            dispatch(action(res, GET_INDEX_HOTCITY));
        })
    }
}

// 更多城市
export const loadMoreCityAsync = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "/city/city/getSortedCityList?version=6.0.1&referer=2"
        }).then((res) => {
            dispatch(action(res, GET_INDEX_MORECITY));
        })
    }
}

// 首页
export const loadIndexAsync = (dispatch, currentCity) => {
    return () => {
        request({
            method: "get",
            url: "/home/index/getClassifyHome",
            params:{
                city_id: currentCity.get("id"),
                abbreviation: currentCity.get("abbreviation")||"",
                version:"6.0.1",
                referer:"2"
            }
        }).then((res) => {
            dispatch(action(res, SET_INDEX_DATALIST));
        })
    }
}

// 热门演出
export const loadIndexHotProgramAsync = (dispatch,id) => {
    return () => {
        request({
            method: "get",
            url: "/home/index/getHotsRecommendList",
            params: {
                city_id: id,
                version: "6.0.1",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res, SET_INDEX_HOTPROGRAM));
        })
    }
}













// 首页
// export const loadIndexAsync = (dispatch, currentCity) => {
//     return () => {
//         request({
//             method: "get",
//             url: "/home/index/getClassifyHome",
//             params:{
//                 city_id:currentCity.city_id,
//                 abbreviation:currentCity.abbreviation||"",
//                 version:currentCity.version,
//                 referer:currentCity.referer,
//                 name: currentCity.name
//             }
//         }).then((res) => {
//             dispatch(action(res, SET_INDEX_DATA));
//         })
//     }
// }