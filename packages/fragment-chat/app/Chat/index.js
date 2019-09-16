import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DatePicker from 'antd/es/date-picker' // 加载 JS
import 'antd/es/date-picker/style/css'

import Toggle from '../Toggle'


import './styles.scss'

const Chat = () => (
  <div>
    <DatePicker/>
    <Toggle>
      {({ on, toggle }) => (
        <div
          className={classNames('chat', { expanded: on })}
          onClick={toggle}
        />
      )}
    </Toggle>
  </div>
)

export default Chat
