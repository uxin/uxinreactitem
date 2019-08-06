import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { ActivityDiv, ActivityDiv_a } from "@/components/main/index/section/styled";
// import { loadIndexAsync } from "@/components/main/index/actionCreator";
import { loadIndexActivityAsync } from "@/components/main/index/actionCreator"


// 活动
class Activity extends PureComponent {
    render() {
        return (
            this.props.activity.size ? (
                console.log(),

                <ActivityDiv_a>
                    <div className="Activity_top">
                        <div className="Activity_top_l">
                            <span>优先购票</span>
                            <span>VIP+会员尊享权益</span>
                        </div>
                        <div className="Activity_top_r">
                            <span>99元/年</span>
                            <span>></span>
                        </div>
                    </div>
                    <div className="Activity_buttom">
                        <div className="Activity_buttom_img">
                            <img src={this.props.activity.toJS()[0].pic} alt="" />
                        </div>
                        <div className="Activity_buttom_r">
                            <p> {this.props.activity.toJS()[0].schedular_name}</p>
                            <p>{this.props.activity.toJS()[0].city_name} | {this.props.activity.toJS()[0].venue_name}</p>
                            <p>
                                <span>{this.props.activity.toJS()[0].end_time}</span>
                                <span>开始</span>
                            </p>
                        </div>
                        <div className="Activity_buttom_btn">开售提醒</div>
                    </div>


                    {/* {
                    this.props.indexData.get("ad_list").advert1.map((item,index)=>(
                        <img src={item.pic} alt="" key={index} />
                    ))
                } */}

                </ActivityDiv_a>
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
        // indexData: state.getIn(["indexReducer", "indexData"]),
        activity: state.getIn(["indexReducer", "activity"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadIndexActivityAsync(dispatch, this.props.currentCity))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Activity);