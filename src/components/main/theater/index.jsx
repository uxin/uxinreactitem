import React, { PureComponent,Fragment } from 'react';  //Fragment 虚拟节点
import Theater from "@/components/main/theater/section";
import { InitStyled } from "@/components/main/index/section/styled";

export default class extends PureComponent {
    render() {
        return (
            <Fragment>
                <InitStyled/>
                <Theater/>
            </Fragment>
        )
    }
}