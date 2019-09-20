import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DatePicker from 'antd/es/date-picker' // 加载 JS
import 'antd/es/date-picker/style/css'


import './styles.scss'

const Chat = () => (
  <div className={classNames('chat')}>
    <DatePicker/>
    <div>this is Chat</div>
  </div>
)

export default Chat
