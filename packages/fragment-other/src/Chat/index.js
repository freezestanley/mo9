import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DatePicker from 'antd/es/date-picker' // 加载 JS
import 'antd/es/date-picker/style/css'


import './styles.scss'

function con () {
  debugger
  const target = window.parent.document.getElementById('other')
  alert(target)
  console.log(window.name)
  return target
}
const Chat = () => (
  <div className={classNames('chat')}>
    <DatePicker />
    <div>this is Chat</div>
  </div>
)

export default Chat
