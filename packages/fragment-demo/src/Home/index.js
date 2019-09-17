import React from 'react';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a href='/'>回到home</a>
                <a href='/detail'>去detail</a>
                <button onClick={() => this.props.history.push('detial')}>通过函数跳转</button>
            </div>
        )
    }
}