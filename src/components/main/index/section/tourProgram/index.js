import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { TourProgramDiv } from "@/components/main/index/section/styled";
import { loadIndexTourProgramAsync } from "@/components/main/index/actionCreator";
import Swiper from "@/components/layout/swiper";

// 巡回演出
class TourProgram extends PureComponent {
    render() {
        return (
            this.props.tourProgram.size?(
            <TourProgramDiv>
                <div className="TourProgram_title">
                    <h3>巡回演出</h3>
                    <span>></span>
                </div>
                    <Swiper swiperConfig={{ slidesPerView: 3, freeMode: true, slidesOffsetAfter: 97, }}>
                    {
                        this.props.tourProgram.map((item,index)=>(
                            <div className="swiper-slide" data-history="1" key={index}>
                                <img src={item.get("pic")} alt=""/>
                                <h3>{item.get("show_name")}</h3>
                                <p>{item.get("schedular_num")}场巡演</p>
                            </div>
                        ))
                    }
                </Swiper>

            </TourProgramDiv>
            ):null
        )
    }
    componentDidMount() {
        this.props.pageInit.bind(this)();
    }
}

const mapStateToProps = (state) => {
    // console.log(state.getIn(["indexReducer", "tourProgram"]));

    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]),
        tourProgram: state.getIn(["indexReducer", "tourProgram"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadIndexTourProgramAsync(dispatch, this.props.currentCity.get("id")))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TourProgram);