import React,{Component} from 'react';
// class Rectangle extends Component{
//      active(event){
//          console.log(event.target.id);
//      }
    const Rectangle=(props)=>{
            return(
                                    <li id={props.id} className="rectangle inactiveblock" onClick={this.active}>
                                    <div  className="inventory">
                                    <span className="glyphicon sign">&#xe084;</span>
                                     <p  className="cost">{props.title}</p>
                                     </div>
                                    <img className="image1" src={require('C:/Users/moonraft/pacmon/src/assests/Screen Shot 2017-08-11 at 7.15.41 PM.png')}/>
                                    <div id="data2" className="middleinventory">
                                    <p className="middlecostdata">{props.dollar}<span className="day">{props.runrate}</span></p>
                                    </div>
                                    <div id="data3" className="lowerpart">
                                    <div>
                                        <p className="instancehrdatas">{props.dollardata}</p>
                                        <p className="instancehr">{props.instance}</p>
                                    </div>
                                    </div>     
                                    </li>
            )
    }

export default Rectangle;