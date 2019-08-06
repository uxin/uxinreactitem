import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { RecommendDiv } from "@/components/main/index/section/styled";
import { loadIndexRecommendAsync } from "@/components/main/index/actionCreator";


// 为你推荐
class Recommend extends PureComponent {
    render() {
        return (
            this.props.recommend.size ? (
                <RecommendDiv>
                    <div className="Recommend_title">
                        <h3>为你推荐</h3>
                    </div>
                    <ul>
                        {
                            this.props.recommend.map((item,index)=>(
                                <li key={index}>
                                    <div className="Recommend_img">
                                        <img src={item.get("schePic")} alt="" />
                                    </div>
                                    <div className="Recommend_details">
                                        <p className="Recommend_date">
                                            <span>{item.get("show_time")}</span>
                                            <i>{item.get("week")}</i>
                                        </p>
                                        <h3>{item.get("show_name")}</h3>
                                        <p className="Recommend_city">{item.get("c_name")} | {item.get("v_name")}</p>
                                        <p className="Recommend_money">
                                            <span>￥{item.get("low_price")}</span>
                                            <i>起</i>
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </RecommendDiv>
            ) : null
        )
    }
    componentDidMount() {
        this.props.pageInit.bind(this)();
    }
}

const mapStateToProps = (state) => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]),
        recommend: state.getIn(["indexReducer", "recommend"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadIndexRecommendAsync(dispatch))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);