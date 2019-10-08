import React from 'react';
import './index.scss';
export default class Home extends React.Component {
    render() {
        return (
            <div className={'index'}>
                <div className={'header'}>众安保险</div>
                <div className={'body'}>
                    asdfasdf
                </div>
                <div className={'footer'}>
                    <div>
                        <img src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/home_on.png" alt="首页"/>
                        <div>首页</div>
                    </div>
                    <div>
                        <img src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/toutiao.png" alt="头条"/>
                        <div>头条</div>
                    </div>
                    <div>
                        <img src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/find.png" alt="发现"/>
                        <div>发现</div>
                    </div>
                    <div>
                        <img src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/my.png" alt="我的"/>
                        <div>我的</div>
                    </div>
                </div>
            </div>
        )
    }
}