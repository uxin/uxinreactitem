import React, { PureComponent, Fragment } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { HotProgramDiv } from "@/components/main/index/section/styled";
import { loadIndexHotProgramAsync } from "@/components/main/index/actionCreator";
import Swiper from "@/components/layout/swiper";

// 热门演出
class HotProgram extends PureComponent {
    render() {
        return (
            this.props.hotProgram.size?(
            <Fragment>
                <HotProgramDiv>
                    <div className="HotProgram_title">
                        <h3>热门演出</h3>
                        <span>></span>
                    </div>

                        <Swiper height={"580px"} swiperConfig={{ slidesPerView: 3, freeMode: true, slidesOffsetAfter: 97, }}>
                        {
                            this.props.hotProgram.map((item,index)=>(
                                <div className="swiper-slide" key={index}>
                                    <img src={item.get("pic")} alt=""/>
                                    <h3>{item.get("show_name")}</h3>
                                </div>
                            ))
                        }
                    </Swiper>
                </HotProgramDiv>
            </Fragment>
            ):null
        )
    }
    componentDidMount() {
        this.props.pageInit.bind(this)();
    }
}

const mapStateToProps = (state) => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]),
        hotProgram: state.getIn(["indexReducer", "hotProgram"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {

        dispatch(loadIndexHotProgramAsync(dispatch, this.props.currentCity.get("id")))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HotProgram);