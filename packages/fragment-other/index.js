import React from 'react'
import ReactDOM from 'react-dom'
import Router from './src/App'

// ReactDOM.render(
//   <Router/>,
//   document.getElementById('other')
// )
export async function bootstrap() {
  console.log('react app bootstraped')
}

export async function mount(contain, baseUrl) {
  ReactDOM.render(<Router baseUrl={baseUrl}/>, contain)
}

export async function unmount(contain) {
  ReactDOM.unmountComponentAtNode(contain)
}