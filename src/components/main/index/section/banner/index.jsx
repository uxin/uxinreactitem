import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { TopCarousel } from "@/components/main/index/section/styled";
import { Carousel, WingBlank } from 'antd-mobile';
import { loadIndexAsync } from "@/components/main/index/actionCreator";


// 轮播
class Banner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            imgHeight: 196,
        }
    }
    render() {
        return (
            this.props.indexData.size ? (
                <TopCarousel>
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                            autoplayInterval={1500}
                        >
                            {this.props.indexData.get("slide_list").map(val => (
                                <img key={val}
                                    src={val.image_url}
                                    alt=""
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                    </WingBlank>
                </TopCarousel>
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
export default connect(mapStateToProps, mapDispatchToProps)(Banner);