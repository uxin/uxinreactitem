import request from "@/core/http/http";

export const GET_THEATER_THEATERLIST = "theater/get_theater_theatreList";



export const action = (val, type) => {
    return {
        type,
        val
    }
}

export const loadHotCityDataAsync = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "/theatre/index/getTheatreList",
            params: {
                page: "1",
                version: "6.0.3",
                referer: "2",
            }
        }).then((res) => {
            dispatch(action(res, GET_THEATER_THEATERLIST));
        })
    }
}