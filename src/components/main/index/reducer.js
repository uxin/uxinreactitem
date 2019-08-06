// 数据仓库
import { fromJS, Map } from "immutable";
import { GET_INDEX_HOTCITY, GET_INDEX_MORECITY, SET_INDEX_DATA, SET_INDEX_DATALIST, GET_INDEX_ACTIVITY, GET_INDEX_HOTPROGRAM, GET_INDEX_TOURPROGRAM, GET_INDEX_RECOMMEND } from "@/components/main/index/actionCreator"

const defaultStore = fromJS({
    hotCityList: [],   //热门城市
    moreCityList: [],  //更多城市
    currentCity:{      //首页头部
        id:0,
        Abbreviation:"",
        name:"全国",
    },
    indexData:{},      //首页
    activity:[],       //活动
    hotProgram: [],    //热门演出
    tourProgram: [],   //巡回演出
    recommend:[],      //为你推荐
})


export default (state = defaultStore, action) => {
    if (action.type === GET_INDEX_HOTCITY){
        let res = action.val.data.data.hot_city_List;
        return state.update("hotCityList",(val)=>val=fromJS(res));
    } else if (action.type === GET_INDEX_MORECITY){
        let res = action.val.data.data;
        let rel=[];
        for (let n in res){
            rel.push(res[n])
        }
        return state.update("moreCityList",(val)=>val=fromJS(rel))
    } else if (action.type === SET_INDEX_DATA){
        let temp={
            id: action.id,
            Abbreviation: action.Abbreviation,
            name: action.name,
        };
        return state.update("currentCity",(val)=>val=Map(temp));
    } else if (action.type === SET_INDEX_DATALIST){
        let res = action.val.data.data;
        return state.update("indexData", (val) => val = Map(res));
    } else if (action.type ===GET_INDEX_HOTPROGRAM){
        let res = action.val.data.data.hots_show_list;
        return state.update("hotProgram",(val)=>val=fromJS(res));
    } else if (action.type === GET_INDEX_TOURPROGRAM){
        let res = action.val.data.data.tour_show_list;
        return state.update("tourProgram", (val) => val = fromJS(res));
    } else if (action.type === GET_INDEX_RECOMMEND){
        let res = action.val.data.data.recommend_show_list;
        return state.update("recommend", (val) => val = fromJS(res));
    } else if (action.type === GET_INDEX_ACTIVITY){
        let res = action.val.data.data.priorList;
        return state.update("activity", (val) => val = fromJS(res));
    }
    return state;
}