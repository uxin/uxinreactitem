import React, { PureComponent, Fragment } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { TheaterDiv, TheaterBox } from "@/components/main/theater/section/styled";
import Swiper from "@/components/main/theater/section/swiper";
import { loadHotCityDataAsync } from "@/components/main/theater/actionCreator";

class Theater extends PureComponent {
    render() {
        return (
            this.props.theatreList ? (
                <Fragment>
                    <TheaterDiv>
                        <h3>剧院</h3>
                    </TheaterDiv>
                    <TheaterBox>
                        {
                            this.props.theatreList.map((item, index) => (
                                <div className="TheaterBox" key={index}>
                                    <div className="TheaterBox_t" >
                                        <div className="TheaterBox_t_l">
                                            <div className="TheaterBox_t_l_img">
                                                <img src={item.get("pic")} alt="" />
                                            </div>
                                            <div className="TheaterBox_t_l_txt">
                                                <h3>{item.get("name")}</h3>
                                                <p>{item.get("count")}场在售演出</p>
                                            </div>
                                        </div>
                                        <div className="TheaterBox_t_r_txt">...</div>
                                    </div>
                                    <Swiper >
                                        {
                                            item.get("showList").map((itemShowList, indexShowList) => (
                                                <div className="swiper-slide" key={indexShowList}>
                                                    <div className="swiper_date">{itemShowList.get("show_time")}</div>
                                                    <div className="swiper_bor">
                                                        <span></span>
                                                    </div>
                                                    <img src={itemShowList.get("pic")} alt="" />
                                                </div>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            ))
                        }
                    </TheaterBox>
                </Fragment>
            ) : null
        )
    }
    componentDidMount() {
        this.props.pageInit.bind(this)();
    }
}
const mapStateToProps = (state) => {
    return {
        theatreList: state.getIn(["theaterReducer", "theatreList"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadHotCityDataAsync(dispatch))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Theater);