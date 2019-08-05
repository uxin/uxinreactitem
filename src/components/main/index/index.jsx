import React, { Fragment } from 'react';  //Fragment 虚拟节点
import { InitStyled } from "@/components/main/index/section/styled";
import City from "@/components/main/index/section/city";
import Banner from "@/components/main/index/section/banner";
import VocalConcert from "@/components/main/index/section/vocalConcert";
import Activity from "@/components/main/index/section/activity";
import Card from "@/components/main/index/section/card";
import HotProgram from "@/components/main/index/section/hotProgram";

class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <InitStyled />
                <City/>
                <Banner/>
                <VocalConcert/>
                <Activity/>
                <Card/>
                <HotProgram/>
                <div style={{ "winth": "100%", "height": "100px" }}></div>
            </Fragment>
        )
    }
}
export default Index;