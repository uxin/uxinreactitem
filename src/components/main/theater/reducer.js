// 数据仓库
import { fromJS } from "immutable";
import { GET_THEATER_THEATERLIST } from "@/components/main/theater/actionCreator"

const defaultStore = fromJS({
    theatreList:[],
})
export default (state = defaultStore, action) => {
    if (action.type === GET_THEATER_THEATERLIST){
        let res = action.val.data.data.theatre_list;
        return state.update("theatreList", (val) => val = fromJS(res))
    }
    return state;
}