import React from 'react';
const application=()=>{
    return(
       
            <div className="application">
                <div className="applicationleft">
                        <p className="material-icons appicon">&#xe5c3;</p>
                        <p className="allapplications">ALL APPLICATIONS</p>
                        <span className="glyphicon arrowdown">&#xe252;</span>
                </div>
                <div className="applicationright">
                    <p className="Line"></p>
                    <p className="applicationstatus">APPLICATION STATUS</p>
                <div className="productiondata">
                    <p className="production"><span id="101" className="prod"></span> PRODUCTION</p>
                </div>
                 <div className="builddata">
                        <p className="build"><span id="102" className="prod"></span>  BUILD</p>
                 </div>
                <div className="intakedata">
                        <p className="intake"><span id="103" className="prod"></span> INTAKE</p>
                </div>
                <div className="securitydot">
                        <p className="security">SECURITY</p>
                        <p className="circle"></p>  
                </div>
            </div>
            </div>
          
    )
};

export default application;