import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { ActivityDiv } from "@/components/main/index/section/styled";
import { loadIndexAsync } from "@/components/main/index/actionCreator"


// 活动
class Activity extends PureComponent {
    render() {
        return (
            this.props.indexData.size ? (
            <ActivityDiv>
                {/* <div className="Activity_top">
                    <div className="Activity_top_l">
                        <span>优先购票</span>
                        <span>VIP+会员尊享权益</span>
                    </div>
                    <div className="Activity_top_r">
                        <span>开通99元/年</span>
                        <span>></span>
                    </div>
                </div>
                <div className="Activity_buttom">
                    <div className="Activity_buttom_img">
                        <img src="https://image.juooo.com/group1/M00/03/41/rAoKNVzde4GAb_DlAABnSDwWI0w744.jpg" alt="" />
                    </div>
                    <div className="Activity_buttom_r">
                        <p> 法语音乐剧《摇滚红与黑》-北京站</p>
                        <p>北京 | 世纪剧院</p>
                        <p>
                            <span>08/05 10:30</span>
                            <span>开始</span>
                        </p>
                    </div>
                    <div className="Activity_buttom_btn">开售提醒</div>
                </div> */}
                {
                        this.props.indexData.get("ad_list").advert1.map((item,index)=>(
                            <img src={item.pic} alt="" key={index} />
                        ))
                }

            </ActivityDiv>
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
        indexData: state.getIn(["indexReducer", "indexData"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadIndexAsync(dispatch, this.props.currentCity))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Activity);