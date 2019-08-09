import React, { PureComponent, Fragment } from 'react';
import { LoginDiv } from "@/components/main/my/styled"
import 'font-awesome/css/font-awesome.css';

export default class extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <LoginDiv>
                    <header>
                        <i className="fa  fa-angle-left fa-3x"></i>
                    </header>
                    <div className="login_title">
                        <h3>欢迎来到王者荣耀</h3>
                    </div>
                    <div className="login">
                        <form action="">
                            <input className="uname" type="text" placeholder="请输入手机号/邮箱" />
                            <input className="upwd" type="text" placeholder="请输入密码" />
                        </form>
                        <div className="login_btn">免费注册</div>
                        <div className="login_forget">
                            <p>邮箱注册</p>
                            <p>密码登录</p>
                        </div>
                    </div>
                    <div className="login_b">
                        <p>
                            <span>其他登录方式</span>
                        </p>
                        <p>
                            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/qq.png" alt="" />
                            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/weibo.png" alt="" />
                        </p>
                    </div>
                </LoginDiv>
            </Fragment>
        )
    }
}