import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { VocalConcertDiv } from "@/components/main/index/section/styled";
import { loadIndexAsync } from "@/components/main/index/actionCreator"


// 演唱会
class VocalConcert extends PureComponent {
    render() {
        return (
            this.props.indexData.size ? (
                <VocalConcertDiv>
                    <ul>
                        {
                            this.props.indexData.get("classify_list").map((item, index) => (
                                <li key={index}>
                                    <img src={item.pic} alt="" />
                                    <p>{item.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </VocalConcertDiv>
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

export default connect(mapStateToProps, mapDispatchToProps)(VocalConcert);