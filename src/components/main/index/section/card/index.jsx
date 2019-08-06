import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { CardDiv } from "@/components/main/index/section/styled";
import { loadIndexAsync } from "@/components/main/index/actionCreator";


// 卡片
class Card extends PureComponent {
    render() {
        return (
            this.props.indexData.size ? (
                <CardDiv>
                    <div className="Card_box">
                        <ul className="Card_top">
                            {
                                this.props.indexData.get("operation_list").slice(0,2).map((item,index)=>(
                                    <li key={index}>
                                        <div className="li_txt">
                                            <h3>{item.name}</h3>
                                            <p>送100元,享V+权益</p>
                                        </div>
                                        <div className="li_img">
                                            <img src={item.pic} alt="" />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="Card_bottom">
                            {
                                this.props.indexData.get("operation_list").slice(2,).map((item, index) => (
                                    <li key={index}>
                                        <div className="li_txt">
                                            <h3>{item.name}</h3>
                                            <p>用积分,0元购票</p>
                                        </div>
                                        <div className="li_img">
                                            <img src={item.pic} alt="" />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </CardDiv>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);