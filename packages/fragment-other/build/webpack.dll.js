const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
  mode: 'production',
  // 入口文件
  entry: {
    // 项目中用到依赖库文件
    antd: ['antd'],
  },
  // 输出文件
  output: {
    filename: '[name].dll.js', 
    path: path.resolve(__dirname, '../dist/dll'),
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '../dist/dll', '[name].manifest.json')
    })
  ]
};