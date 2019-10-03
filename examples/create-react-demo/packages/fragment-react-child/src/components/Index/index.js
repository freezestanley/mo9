import React from 'react';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a href='/index'>回到home</a>
                <a href='/home'>去detail</a>
                <button onClick={() => this.props.history.push('home')}>通过函数跳转</button>
            </div>
        )
    }
}