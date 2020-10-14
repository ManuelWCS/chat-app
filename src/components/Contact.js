import React from 'react';
import './Contact.css';


function Contact () {
    
    const avatar = "https://randomuser.me/api/portraits/women/64.jpg";
    const name = "Betty";
    const status = true; 
    return (
        
        <div className = "Contact">
            <div>
          <img className ="avatar" src = {avatar} />
           </div>
           <div className="status">
                <p>{name} </p>
                <div className ="status-online">
                </div>
                <div className ="status-text"> 
                <p>{status ? 'Online' : "Offline"}</p> 
                </div>
               
                
                </div>
            
        </div>
    );
}

export default Contact; 