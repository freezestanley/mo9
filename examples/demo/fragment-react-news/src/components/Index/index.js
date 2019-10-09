import React from 'react';
import { globalEvent } from 'chaoxi'
import './index.scss';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                img: 'https://open-cdn.zhongan.com/dm-instrument/images/vwam9ib854denmynakphtoo0vxlb6mxv7lo466sm.png',
                title: '十一国庆节出行，不可缺少的汽车保养宝典！',
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/4a5a3631-9061-4efa-85d7-121b33132d17.png',
                title: '“现在几乎没有人订房”！“十一”黄金周台湾陆客“消失了”',
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/b65f444d-95dc-4bb8-a0e2-9e5ce87edadd.png',
                title: '得了糖尿病、高血压不能买保险？这款产品说：我可以！'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/afd8ff63-c050-4b23-9356-dd99212ba49b.jpg',
                title: '良心推荐 | 十一7大必备保障清单，保人！保财！保安全！'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '十一假期，家长最好别带孩子去这些地方，看似好玩，处处是隐患'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/7f1baa42-072d-49e0-a553-21125d790f32.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            },
            {
                img: 'http://oss-cn-hzfinance.aliyuncs.com/open-prd/e61ebd50-3a32-4514-93c8-4d613cda125f.png',
                title: '出游的亲们看这里，十一旅游注意事项，全都在这里了'
            }]
        };
    }
    goto1() {
        window.location.href = "https://one.zhongan.com/fcp/msj-h5/#/?channel=Ap2ZASG001%21aqw&type=1"
    }
    componentDidMount() {
        globalEvent.on('father-type-click', data => {
            console.log('data from father-type-click', data);
            this.setState({
                data: [{
                    img: 'https://inews.gtimg.com/newsapp_bt/0/10474670328/1000',
                    title: '【优选推荐】母亲，我为您骄傲！'
                },{
                    img: 'https://inews.gtimg.com/newsapp_bt/0/10472280055/1000',
                    title: '【优选推荐】讲好回归前后故事 传承好爱国爱澳精神'
                },{
                    img: 'https://inews.gtimg.com/newsapp_bt/0/10476021954/1000',
                    title: '【优选推荐】在魅力乡村“望山见水留乡韵”'
                }]
            })
        })
    }
    render() {
        return (
            <div className="newsList">
                {
                    this.state.data.map((ele, idx) => {
                        return (
                            <div className="news-item" key={idx}>
                                <div className="news-item-img">
                                    <img src={ele.img} alt="item.title" />
                                </div>
                                <div className="news-item-info">
                                    <h3 className="news-item-title">{ele.title}</h3>
                                    <div className="tags-list">
                                        <span className="tags-item">少儿保险</span>
                                        <span className="tags-item">转载自[百保君]发布</span>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}