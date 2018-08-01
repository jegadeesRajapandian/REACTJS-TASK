import React, { Component } from 'react';
import Top from '../src/pacmon-page/components/Top/topsection';
import Apps from '../src/pacmon-page/components/Application/application';
import Rect  from '../src/pacmon-page/components/Rectangle/rectangle';
import './App.css';

class App extends Component {
  state={
    leftdata:[{ "id":"first",
      "title":"COST",
    "dollar":"$24K",                                                                       
    "runrate":"RUNRATE",
    "dollardata":"$0.40",
    "instance":"/Instance HR"
    },
    { "id":"second",
      "title":"MONITORING",
    "dollar":"3.4M",                                                                      
    "runrate":"RUNRATE",
    "dollardata":"$10.40",
    "instance":"/Instance HR"
    }],
    centerdata:[{"id":"third",
      "title":"INVENTORY",
    "dollar":"6.5K",                                                                     
    "runrate":"RUNRATE",
    "dollardata":"$0.80",
    "instance":"/Instance HR"
    },
    { "id":"fourth",
      "title":"UTILIZATION",
    "dollar":"3.9%",                                                                    
    "runrate":"OVERALL",
    "dollardata":"$8.40",
    "instance":"/Instance HR"
    } ],
    rightdata:[{"id":"fifth",
      "title":"COMPLIANCE",
    "dollar":"77.24",                                                                     
    "runrate":"COMPLIANCE",
    "dollardata":"$2.50",
    "instance":"/Instance HR"
    },
    { "id":"sixth",
      "title":"STORAGE",
    "dollar":"2.35",                                                                    
    "runrate":"In Use",
    "dollardata":"$100.40",
    "instance":"/Instance HR"
    } ]
  };
  render() {
    return (
      <div> 
          <Top />  
          <section className="mainsection">
         <div className="mainmaxwidth">
          <Apps />  
          <div  className="rectanglesection">
          <div id="firstdiv"className="leftrectangle">
          {this.state.leftdata.map((loop,index)=>{
             return <Rect title={loop.title} dollar={loop.dollar} runrate={loop.runrate} dollardata={loop.dollardata} instance={loop.instance}  /> 
          })}
          </div>
            <div id="seconddiv" className="centerrectangle"> 
            {this.state.centerdata.map((loop,index)=>{
             return <Rect title={loop.title} dollar={loop.dollar} runrate={loop.runrate} dollardata={loop.dollardata} instance={loop.instance}  /> 
          })}
          </div>
          <div id="thirddiv" className="rightrectangle"> 
          {this.state.rightdata.map((loop,index)=>{
             return <Rect id={loop.id} title={loop.title} dollar={loop.dollar} runrate={loop.runrate} dollardata={loop.dollardata} instance={loop.instance}  /> 
            })}
             </div> 
          </div>   
          </div>
          </section>
        </div> 
      
    );
  }
}

export default App;
