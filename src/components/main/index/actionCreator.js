// 定义接口
import request from "@/core/http/http";

// 获取热门城市
export const GET_INDEX_HOTCITY = "index/get_index_hotCity";
// 获取更多城市
export const GET_INDEX_MORECITY = "index/get_index_moreCity";
// 设置首页
export const SET_INDEX_DATA = "index/set_index_data";
// 首页
export const SET_INDEX_DATALIST = "index/set_index_dataList";
// 活动
export const GET_INDEX_ACTIVITY = "index/get_index_activity";
// 热门演出
export const GET_INDEX_HOTPROGRAM = "index/get_index_hotProgram";
// 巡回演出
export const GET_INDEX_TOURPROGRAM = "index/get_index_tourProgram";
// 为你推荐
export const GET_INDEX_RECOMMEND ="index/get_index_recommend";

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

// 活动
export const loadIndexActivityAsync = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "/vip/index/getVipHomeSchedular",
            params: {
                version: "6.0.3",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res, GET_INDEX_ACTIVITY));
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
            dispatch(action(res, GET_INDEX_HOTPROGRAM));
        })
    }
}

// 巡回演出
export const loadIndexTourProgramAsync = (dispatch, id) => {
    return () => {
        request({
            method: "get",
            url: "/home/index/getTourRecommendList",
            params: {
                city_id: id,
                version: "6.0.1",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res, GET_INDEX_TOURPROGRAM));
        })
    }
}

// 为你推荐
export const loadIndexRecommendAsync = (dispatch, recommend)=>{
    return () => {
        request({
            method: "get",
            url: "/home/index/getRecommendShow",
            params: {
                cityAdd: recommend.cityAdd,
                page: recommend.page,
                version: "6.0.1",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res, GET_INDEX_RECOMMEND));
        })
    }
}