// 数据仓库
import { fromJS } from "immutable";
import { GET_TICKETFOLDER_SHOWCATEGORY, GET_TICKETFOLDER_LIST, GET_TICKETFOLDER_CITY } from "@/components/main/ticketFolder/actionCreator";

const defaultStore = fromJS({
    showCategory:[],
    ticketList:[],
    ticketCity: [],
})
export default (state = defaultStore, action) => {
    if (action.type === GET_TICKETFOLDER_SHOWCATEGORY){
        let res = action.val.data.data.show_category_list;
        return state.update("showCategory", (val) => val = fromJS(res))
    } else if (action.type === GET_TICKETFOLDER_LIST){
        let res = action.val.data.data.list;
        return state.update("ticketList", (val) => val = fromJS(res))
    } else if (action.type === GET_TICKETFOLDER_CITY) {
        let res = action.val.data.data.city_list;
        return state.update("ticketCity", (val) => val = fromJS(res))
    }
    return state;
}