import React from 'react'
import './index.scss'

export default class Home extends React.Component {
  render() {
    return (
      <div className={'index'}>
        <div className={'header'}>众安保险</div>
        <div className={'body'}>
          <nav>
            <ul className={'ul'}>
              <li onClick={() => this.props.history.push('/reactchild')}>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/ggcoharenuhwspoyxjyrnkdz2l937opbkqj2wohi.png"
                  alt=""
                />
                健康
              </li>
              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/jtzzc7swuzd9gu8iyu2jy2z8dkkqfdp3ntqfcoip.png"
                  alt=""
                />
                意外
              </li>
              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/gvrer8yoom9ifyrcbypcxvg8zzwwr0yuousj5fls.png"
                  alt=""
                />
                车险
              </li>
              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/79ptflhz5qk7tkfhhqvbsczkfis1tp5aykwaz3az.png"
                  alt=""
                />
                旅行
              </li>
              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/nph6pl4r4ru6wmqrtak4tikqe6mrumwjtwjwiqtl.png"
                  alt=""
                />
                更多
              </li>
            </ul>
          </nav>

          <div className={'recommend'}>
            <h2>为你推荐</h2>
            <div className={'list'}>
              <div className={'left'}>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/k045uublwbl5ntg4ap41miru1ipmmudahskujrr8.png"
                  alt=""
                />
              </div>
              <div className={'right'}>
                <p>
                  ￥136 <span>起</span>
                </p>
                <div className={'button'}>立即投保</div>
              </div>
              <div className={'center'}>
                <h2>尊享e生</h2>
                <p>100种重疾0免赔，送智能体脂管理服务</p>
              </div>
            </div>
            <div className={'list'}>
              <div className={'left'}>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/33hf3v2p6xz0lezzvy9xlutvpxr3pfk3bm0eknvv.png"
                  alt=""
                />
              </div>
              <div className={'right'}>
                <p>
                  ￥136 <span>起</span>
                </p>
                <div className={'button'}>立即投保</div>
              </div>
              <div className={'center'}>
                <h2>尊享e生</h2>
                <p>全家一起保，最高713万意外保障，花呗免息分期</p>
              </div>
            </div>
          </div>

          <div className={'health'}>
            <div className={'top'}>
              <div className={'global'}>
                健康 <span>守护全局</span>
              </div>
              <div className={'more'}>更多 ></div>
            </div>

            <ul className={'ul-one clearfix'}>
              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/8zyptxm6drmxotxhhcsgqhmrnirkprmjttyhpjio.11111%403x1212.png"
                  alt=""
                />
                <div className={'text'}>
                  <h2>尊享e生2019版</h2>
                  <p>最高600万保障</p>
                  <div>
                    ￥<span>136</span> 起
                  </div>
                </div>
              </li>
              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/xe0ugpcykonrcae4gejxspjv3g8j3sk9zyco09gz.png"
                  alt=""
                />
                <div className={'text'}>
                  <h2>尊享e生2019版</h2>
                  <p>最高600万保障</p>
                  <div>
                    ￥<span>136</span> 起
                  </div>
                </div>
              </li>
              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/nhndm4pcvcpjr81bt935x5j3umw9rc0tydjc70i3.png"
                  alt=""
                />
                <div className={'text'}>
                  <h2>尊享e生2019版</h2>
                  <p>最高600万保障</p>
                  <div>
                    ￥<span>136</span> 起
                  </div>
                </div>
              </li>

              <li>
                <img
                  src="https://open-cdn.zhongan.com/dm-instrument/images/rukiqfalyp54f1f1xyetxickzouzhffolmq6apyf.png"
                  alt=""
                />
                <div className={'text'}>
                  <h2>尊享e生2019版</h2>
                  <p>最高600万保障</p>
                  <div>
                    ￥<span>136</span> 起
                  </div>
                </div>
              </li>
            </ul>
            <ul className={'ul-two clearfix'}>
              <li>
                <div className={'content'}>
                  <h2>基因检测</h2>
                  <img
                    src="https://open-cdn.zhongan.com/dm-instrument/images/wfw09f4uak5epgp24dcwhj2db3xe0ydkj3umupgu.png"
                    alt=""
                  />
                  <div></div>
                  <p>遇见自己的秘密</p>
                </div>
              </li>
              <li>
                <div className={'content'}>
                  <h2>基因检测</h2>
                  <img
                    src="https://open-cdn.zhongan.com/dm-instrument/images/0baf4pwfmhvt0k86udn2h8xtmiuo6jf2dhbhldid.png"
                    alt=""
                  />
                  <div></div>
                  <p>专业机构检查</p>
                </div>
              </li>
              <li>
                <div className={'content'}>
                  <h2>基因检测</h2>
                  <img
                    src="https://open-cdn.zhongan.com/dm-instrument/images/gk5alsqca7n18pzcqkc0hivic2ke8yzqksltuln7.png"
                    alt=""
                  />
                  <div></div>
                  <p>立即加入</p>
                </div>
              </li>
              <li>
                <div className={'content'}>
                  <h2>基因检测</h2>
                  <img
                    src="https://open-cdn.zhongan.com/dm-instrument/images/georyfh6bjmucgkmvwy8mrz34r9nezf9nynvai8x.png"
                    alt=""
                  />
                  <div className={'br'}></div>
                  <p>拜姨妈得锦囊</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={'footer'}>
          <div>
            <img
              src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/home_on.png"
              alt="首页"
            />
            <div>首页</div>
          </div>
          <div>
            <img
              src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/toutiao.png"
              alt="头条"
            />
            <div>头条</div>
          </div>
          <div>
            <img
              src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/find.png"
              alt="发现"
            />
            <div>发现</div>
          </div>
          <div>
            <img
              src="https://static.zhongan.com/website/assets/m/v3/home/assets/images/icon/my.png"
              alt="我的"
            />
            <div>我的</div>
          </div>
        </div>
      </div>
    )
  }
}
