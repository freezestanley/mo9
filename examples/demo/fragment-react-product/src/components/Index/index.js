import React from 'react';
import './index.scss';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    img: 'https://open-cdn.zhongan.com/dm-instrument/images/vwam9ib854denmynakphtoo0vxlb6mxv7lo466sm.png',
                    title: '复星康乐一生2019',
                    title2: '长期重疾险',
                    info1: '108种重疾+25种中症+40种轻症',
                    info2: '肿瘤二次赔付可选',
                    info3: '前十年重疾保额提升30',
                    price: '156.5',
                    price1: '50',
                    age: '30天-50周岁',
                    time: '终身'
                },
                {
                    img: 'https://open-cdn.zhongan.com/dm-instrument/images/jwnyfl3he7m7ibr49f0yazrqxfia7hfom7qbn6un.png',
                    title: '安邦北极星',
                    title2: '长期重疾险',
                    info1: '108种重疾+25种中症+40种轻症',
                    info2: '肿瘤二次赔付可选',
                    info3: '前十年重疾保额提升30',
                    price: '156.5',
                    price1: '30',
                    age: '20天-50周岁',
                    time: '终身'
                },
                {
                    img: 'https://open-cdn.zhongan.com/dm-instrument/images/6w3j2xkbboq46hrovop0il64rmrbofjzykgkxndg.png',
                    title: '复星保德信星悦',
                    title2: '长期重疾险',
                    info1: '108种重疾+25种中症+40种轻症',
                    info2: '肿瘤二次赔付可选',
                    info3: '前十年重疾保额提升30',
                    price: '156.5',
                    price1: '140',
                    age: '20天-80周岁',
                    time: '终身'
                },
            ]
        };
    }
    goto1 () {
        window.location.href = "https://one.zhongan.com/fcp/msj-h5/#/?channel=Ap2ZASG001%21aqw&type=1"
    }
    componentDidMount() {

    }
    render() {
        return (
                    <div className="cardList">
                        {
                            this.state.data.map((ele, idx) => {
                                return (
                                <div className="card" key={idx}>
                                <div className="card-header">
                                <img src={ele.img}/> 
                                    <div className="t1">
                                        {ele.title}
                                        <span className="tags"> {ele.title2}</span>
                                    </div> 
                                    <div className="t2">
                                        <p>{ele.info1}</p> 
                                        <p>{ele.info2}</p> 
                                        <p>{ele.info3}</p>
                                    </div> 
                                    <div className="price">
                                        <i className="unit">￥</i>
                                        <strong className="money">{ele.price}</strong>
                                        <span className="txt green">/年</span>
                                        <span className="txt">起</span>
                                    </div> 
                                </div>
                                <div className="card-detail-wrap">
                                    <div className="card-detail-item">
                                        <div className="card-detail-item-title">{ele.price1}</div> 
                                        <div className="card-detail-item-desc">最高保额</div>
                                    </div> 
                                    <div className="card-detail-item">
                                        <div className="card-detail-item-title">{ele.age}</div> 
                                        <div className="card-detail-item-desc">投保年龄</div>
                                    </div> 
                                    <div className="card-detail-item">
                                        <div className="card-detail-item-title"> {ele.time}</div> 
                                        <div className="card-detail-item-desc">最长保障</div>
                                    </div>
                                </div>
                            </div>)
                            })
                        }
                        
                        
                    </div>
        )
    }
}