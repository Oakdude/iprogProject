// import React, {Component} from 'react'
// import "../css/style.css"
// import "../css/scoreBoard.css"
// import Scoreboard from "./oldScoreboard"
// import {Link} from "react-router-dom";
//
//
// class UserScore extends Component {
//     constructor(props) {
//         super(props);
//
//         // we put on state the properties we want to use and modify in the component
//         this.state = {
//             region: "world"
//         };
//
//       }
//
//      selectorChanged = e => {
//         this.setState({
//             region: e.target.value
//         });
//         console.log(this.state.region);
//       }
//
//     render() {
//     return (
//         <div className="container main">
//             <h1 className='title'>Scoreboard</h1>
//             <div className='row'>
//                 <form>
//                     <div className='form-group'>
//                         <select className='form-control' onChange={this.selectorChanged}>
//                             <option value='world'> World </option>
//                             <option value='africa'> Africa</option>
//                             <option value='americas'> Americas </option>
//                             <option value='asia'> Asia </option>
//                             <option value='europe'> Europe </option>
//                             <option value='oceania'> Oceania </option>
//
//                         </select>
//                     </div>
//                 </form>
//             </div>
//             <div className='row'>
//                 <Scoreboard region={this.state.region}/>
//             </div>
//             <div className='row'>
//                 <Link to='/' className='backButton'>
//                     <button type="button" className="btn btn-primary">Play Again!</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }
// }
//
// export default UserScore;