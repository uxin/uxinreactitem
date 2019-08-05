import React, { PureComponent, Fragment } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { IndexHeader, CityDiv } from "@/components/main/index/section/styled";
import 'font-awesome/css/font-awesome.css'
import { loadHotCityDataAsync, loadMoreCityAsync, SET_INDEX_DATA } from "@/components/main/index/actionCreator";

class City extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isCity: true,
        }
    }
    render() {

        if (this.state.isCity) {
            return (
                <Fragment>
                    <IndexHeader>
                        <div className="city">
                            <div className="city_box" onClick={() => {
                                this.setState({ isCity: !this.state.isCity })
                            }}>
                                <i className="fa  fa-map-marker fa-2x"></i>
                                <span>{this.props.currentCity.get("name")}</span>
                            </div>
                            <form className="search" action="">
                                <input type="text" placeholder="搜索热门演出" />
                            </form>
                            <div className="login">
                                <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt="" />
                            </div>
                        </div>
                    </IndexHeader>
                </Fragment>
            )
        } else if (this.props.hotCityList.size !== 0 & this.props.moreCityList.size !== 0) {
            return (
                <CityDiv>
                    <header>
                        <i className="fa  fa-angle-left fa-2x" onClick={() => {
                            this.setState({ isCity: !this.state.isCity })
                        }}></i>
                        <h3>城市选择</h3>
                    </header>
                    <div className="kong"></div>
                    <div className="city_list">
                        <p>当前城市</p>
                        <ul>
                            <li>全国</li>
                        </ul>
                    </div>
                    <div className="city_list">
                        <p>定位城市</p>
                        <ul>
                            <li>长沙</li>
                        </ul>
                    </div>
                    <div className="city_list">
                        <p>热门城市</p>
                        <ul>
                            <li>全国</li>
                            {
                                this.props.hotCityList.map((item, index) => (
                                    <li key={index} onClick={this.props.handleCity.bind(this, item)}>{item.get("name")}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="city_body">
                        {
                            this.props.moreCityList.map((item,index)=>(
                                <div className="city_sort" key={index}>
                                    <h2>{item.get("id")}</h2>
                                    <ul>
                                        {
                                            item.get("list").map((itemList, indexList)=>(
                                                <li key={indexList} onClick={this.props.handleCity.bind(this, itemList)}>{itemList.get("name")}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="city_index">
                        <ul>
                            <li>当前</li>
                            <li>定位</li>
                            <li>热门</li>
                            {
                                this.props.moreCityList.map((item,index)=>(
                                    <li key={index}>{item.get("id")}</li>
                                ))
                            }
                        </ul>
                    </div>
                </CityDiv>
            )
        }
    }
    componentDidMount() {
        this.props.handleGetHotCityData.bind(this)();
    }
}

const mapStateToProps = (state) => {
    return {
        hotCityList: state.getIn(["indexReducer", "hotCityList"]),
        moreCityList: state.getIn(["indexReducer", "moreCityList"]),
        currentCity: state.getIn(["indexReducer","currentCity"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleGetHotCityData() {
        dispatch(loadHotCityDataAsync(dispatch));
        dispatch(loadMoreCityAsync(dispatch))
    },
    handleCity(itemList){
        let temp = itemList.toJS();
        temp.type = SET_INDEX_DATA;
        dispatch(temp);
        this.setState({isCity:!this.state.isCity});
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(City);