import React, { Fragment, PureComponent } from 'react';  //Fragment 虚拟节点
import { InitStyled } from "@/components/main/index/section/styled";
import TicketFolder from "@/components/main/ticketFolder/section"

export default class extends PureComponent {
    render() {
        return (
            <Fragment>
                <InitStyled/>
                <TicketFolder/>
            </Fragment>
        )
    }
}