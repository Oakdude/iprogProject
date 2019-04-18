import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import "../css/style.css"
import "../css/placeTheFlag.css"
import clap from "../images/clapping.gif"


class EndScreen extends Component {
  constructor(props) {
      super(props);
  
      // we put on state the properties we want to use and modify in the component
      this.state = {
          score: sessionStorage.getItem("score")
          
      };

    }


    
  render() {


    
  console.log(this.props);
    return (
      <React.Fragment>


            <div className="container main">
                <div className="col-sm-12 col-md-12">
                    <div id="game2div">
                        <h1 className='title'>Game Complete</h1>
                        <h4 className='subtitle'>Congratulations you made it to the top 10 for this region </h4>
                        <div className='row'>
                            <form className='usernameTextInput'>
                                <div className="form-group">
                                    <input className="form-control form-control-lg" type="text"
                                           placeholder="Please enter a username here..."/>
                                </div>
                            </form>
                        </div>
                       <div className='row'>
                           <div className='row '>
                               <div className='gif'>
                                   <img src={clap} className="img-fluid" alt="Responsive image" />
                               </div>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>

            </React.Fragment>
    )
  }
}

export default EndScreen;
