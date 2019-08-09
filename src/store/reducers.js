import { combineReducers } from 'redux-immutable'      //将最外层转成Map对象
import indexReducer from "@/components/main/index/reducer";
import theaterReducer from "@/components/main/theater/reducer";
import ticketFolderReducer from "@/components/main/ticketFolder/reducer";


export default combineReducers({
    indexReducer,
    theaterReducer,
    ticketFolderReducer,
})