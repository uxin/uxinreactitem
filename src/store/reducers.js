import { combineReducers } from 'redux-immutable'      //将最外层转成Map对象
import indexReducer from "@/components/main/index/reducer";
import juReducer from "@/components/main/theater/reducer";


export default combineReducers({
    indexReducer,
    juReducer,
})