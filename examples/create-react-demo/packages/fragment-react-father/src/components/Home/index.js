import React from 'react';
import {withRouter} from 'react-router-dom';

// export default class Home extends React.Component {
//     render() {
//         return (
//             <div>
//                 <a href='/index'>回到home</a>
//                 <a href='/home'>去detail</a>
//             </div>
//         )
//     }
// }
const Home = () => (
    <div>
      <div>this is Home</div>
    </div>
  )
  export default withRouter(Home)