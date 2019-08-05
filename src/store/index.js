import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";  //作用:让dispatch支持传入函数类型,进行异步回调
import reducers from "@/store/reducers";
export default createStore(reducers, applyMiddleware(thunk));