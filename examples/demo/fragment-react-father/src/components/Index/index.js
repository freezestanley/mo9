import React from 'react';
import Chaoxi, {globalEvent} from '../../global'
import './index.scss';

export default class Home extends React.Component {
    goto1 () {
        window.location.href = "https://one.zhongan.com/fcp/msj-h5/#/?channel=Ap2ZASG001%21aqw&type=1"
    }
    componentDidMount() {
        const appinfo = [
          {
              name: "a49",
              application_name: "reactproduct",
              entry: "http://localhost:9200/app",
              contain: this.refs.container1,
              baseUrl: "/",
              canActive(path) {
                debugger;
                // return window.location.pathname.startsWith("/reactchild");
                return window.location.pathname.startsWith(this.baseUrl);
              }
          },
          {
            name: "a50",
            application_name: "reactnews",
            entry: "http://localhost:9300/app",
            contain: this.refs.container2,
            baseUrl: "/",
            canActive(path) {
                debugger;
              // return window.location.pathname.startsWith("/reactchild");
              return window.location.pathname.startsWith(this.baseUrl);
            }
          },
        //   {
        //       name: "a44",
        //       application_name: "grandson",
        //       entry: "http://localhost:8099/app",
        //       contain: this.refs.container3,
        //       baseUrl: "/grandson",
        //       canActive(path) {
        //         return window.location.pathname.startsWith(this.baseUrl);
        //       }
        //   },
        //   {
        //       name: "a45",
        //       application_name: "reactfather",
        //       entry: "http://localhost:5020/app",
        //       contain: this.refs.container4,
        //       baseUrl: "/reactfather",
        //       canActive(path) {
        //         console.log(Chaoxi)
        //         console.log(Chaoxi.fullUrl)
        //         // baseUrl 会被chapxi重写成包含父路径
        //         // 所以这里可以直接使用
        //         return window.location.pathname.startsWith(this.baseUrl);
        //       }
        //   }
        ]

        console.log('======',this.refs);
        Chaoxi.registerApps(appinfo)
      }
    render() {
        return (
            <div className={'index'}>
                <div className={'header'}>众安保险</div>
                <div className={'body'}>
                    

                    <div>
                        <div className={'banner'}>
                            <img src="https://open-cdn.zhongan.com/dm-instrument/images/yodeqydd98kt8o00nrpamvyvhsyeqyr4vxzwesas.png" alt=""/>
                        </div>
                        <div className={"za-list "}>
                            <div className="za-list-item">
                                <div>
                                    <h3 className="za-title f28 b">保单</h3>
                                    <p className="za-desc f20">一键看保单</p>
                                    <img className="img-itm" src="https://open-cdn.zhongan.com/dm-instrument/images/jx1rxttbejhzve6kuhax2h4s0crjq4oewgsse1ui.png" alt=""/>
                                </div>
                            </div>
                            <div className="za-list-item">
                                <div>
                                    <h3 className="za-title f28 b">众安优选</h3><p className="za-desc f20"> 性价比推荐</p>
                                    <img className="img-itm" src="https://open-cdn.zhongan.com/dm-instrument/images/lvsqt1xtkcld98zwyhufjcyaeizul555l2y3gumf.png" alt=""/>
                                </div>
                            </div>
                            <div className="za-list-item">
                                <div onClick = {() => this.goto1()} >
                                    <h3 className="za-title f28 b">马上金</h3><p className="za-desc f20"> 5万承保额</p>
                                    <img className="img-itm" src="https://open-cdn.zhongan.com/dm-instrument/images/k1zqmwuyyetdzwfkqdj57vbimbhfwijmezxdi2mz.png" alt=""/>
                                </div>
                            </div>
                            <div className="za-list-item">
                                <div>
                                    <h3 className="za-title f28 b">邀请好友</h3>
                                    <p className="za-desc f20">赢现金奖励</p>
                                    <img className="img-itm" src="https://open-cdn.zhongan.com/dm-instrument/images/zqk0njd1uqsdlxjr0dfu64tzy1lrou5eixqfq7tm.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="consultant-entry-list">
                        <img  width="100%" src="https://zalife.zhonganib.com/static/img/list-entry.249eaf18b35db223f681e50df2a1c957.png" alt=""/>
                    </div>

                    <div id="44" ref="container4"></div>
                    <div id="33" ref="container3"></div>
                    
                    <div id="11" ref="container1"></div>
                    <div id="22" ref="container2"></div>
                    
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