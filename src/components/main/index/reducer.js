// 数据仓库
import { fromJS, Map } from "immutable";
import { GET_INDEX_HOTCITY, GET_INDEX_MORECITY, SET_INDEX_DATA, SET_INDEX_DATALIST, SET_INDEX_HOTPROGRAM } from "@/components/main/index/actionCreator"

const defaultStore = fromJS({
    hotCityList: [],   //热门城市
    moreCityList: [],  //更多城市
    currentCity:{      //首页头部
        id:0,
        Abbreviation:"",
        name:"全国",
    },
    indexData:{},
    hotProgram:{},
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
    } else if (action.type ===SET_INDEX_HOTPROGRAM){
        let res = action.val.data.data.hots_show_list;
        return state.update("hotProgram",(val)=>val=fromJS(res));
    }
    return state;
}