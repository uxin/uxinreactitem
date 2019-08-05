import React, { Fragment } from 'react';  //Fragment 虚拟节点
import { Route,Redirect } from 'react-router-dom';
import Index from '@/components/main/index';
import Theater from '@/components/main/theater';
import TicketFolder from '@/components/main/ticketFolder';
import My from '@/components/main/my';

export default class extends React.PureComponent{
    render(){
        return(
            <Fragment>
                <Route path="/index" component={Index} />
                <Route path="/theater" component={Theater} />
                <Route path="/ticketFolder" component={TicketFolder} />
                <Route path="/my" component={My} />
                <Redirect path="/" to="/index"/>
            </Fragment>
        )
    }
}