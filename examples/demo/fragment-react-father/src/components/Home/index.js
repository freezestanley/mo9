import React from 'react'
import { withRouter } from 'react-router-dom'
import Chaoxi, { globalEvent } from '../../global'
import { NavBar, Icon } from 'antd-mobile'
import './index.scss'

class Foo extends React.Component {
  constructor(props) {
    super(props)
    this.handle = this.handle.bind(this)
  }
  componentDidMount() {
    const appinfo = [
      {
        name: 'a49',
        application_name: 'reactchild',
        entry: 'http://localhost:5000/app',
        contain: this.refs.container,
        baseUrl: '/reactchild',
        canActive(path) {
          console.log('98098908090987098709')
          console.log(Chaoxi)
          console.log('react-father', this.baseUrl)
          // return window.location.pathname.startsWith("/reactchild");
          return window.location.pathname.startsWith(this.baseUrl)
        }
      }
    ]
    Chaoxi.registerApps(appinfo)
  }
  render() {
    return (
      // <div>
      //   <input
      //     ref={el => {
      //       this.eleInput = el
      //     }}
      //   />
      //   <button onClick={this.handle}>聚焦</button>
      //   <div ref="container"></div>
      // </div>
      <div className={'index'}>
        <div className={'header clearfix'}>
          <Icon key="0" className={'icon'} type="left" size="lg" />
          <p>尊享e生2019版</p>
        </div>

        <div className={'bodys body'}>
          <ul className={'table'}>
            <li>保障详情</li>
            <li>产品特色</li>
            <li>理赔说明</li>
            <li>常见问题</li>
          </ul>

          <div className={'img'}>
            <img
              src="https://open-cdn.zhongan.com/dm/assembler/6a84eac653401dc265337a6c4ed0aff3.jpg"
              alt=""
            />

            <div className={'title'}>
              <h2>
                尊享e生2019版 <span>医疗险</span>
              </h2>
              <p>保障期限:1年 投保年龄:30天至60周岁</p>
            </div>
          </div>
          <div className={'detail'}>
            <div className={'title'}>
              <h2>保障详情</h2>
              <div className={'extend'}>方案对比</div>
            </div>
            <div className={'buy clearfix'}>
              <div className={'one'}>
                <p>个人版</p>
                <p>推荐个人购买</p>
              </div>
              <div className={'two'}>
                <p>家庭版</p>
                <p>多人购买更划算</p>
                <p>共享1万免赔额</p>
              </div>
            </div>

            <div className={'money'}>
              <div className={'m-left'}>
                <h2>一般医疗保险金</h2>
                <h3>免赔额： 10000元</h3>
              </div>
              <div className={'m-right'}>300万元</div>
            </div>
            <div className={'money'}>
              <div className={'m-left'}>
                <h2>重大疾病医疗保险金</h2>
                <h3>免赔额： 0元</h3>
              </div>
              <div className={'m-right'}>300万元</div>
            </div>
            <div className={'check'}>查看保障详情 ></div>
          </div>
        </div>

        <div className={'footers'}>
          <div className={'left'}>
            <span>客服</span>
          </div>
          <div className={'center'}>
            <p>
              ￥136.00 <span>起</span>
            </p>
          </div>
          <div className={'right'}>
            <span>立即投保</span>
          </div>
        </div>
      </div>
    )
  }

  handle() {
    this.eleInput.focus()
  }
}
export default withRouter(Foo)
