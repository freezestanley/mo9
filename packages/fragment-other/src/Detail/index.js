import React from 'react'
import { Select } from 'antd'
import 'antd/es/date-picker/style/css'

const { Option } = Select

function onChange(value) {
  console.log(`selected ${value}`)
}

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val) {
  console.log('search:', val)
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
                 <a href='/'>回到home</a><br/>
                <a href='/detail'>去detail</a><br/>
                <button onClick={() => this.props.history.push('/')}>通过函数跳转</button><br/>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>

            </div>
        )
    }
}