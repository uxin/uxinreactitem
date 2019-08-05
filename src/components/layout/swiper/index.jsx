import React, { PureComponent, Fragment } from 'react';  //Fragment 虚拟节点
import SwiperNew from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.css";


class Swiper extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="swiper-container" height={this.props.height} >
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.swiperInit.bind(this)();
    }
    swiperInit() {
        new SwiperNew('.swiper-container',{
            freeMode: true,
            slidesPerView: 3,
            slidesOffsetAfter: 97,
        });
    }
}
export default Swiper;