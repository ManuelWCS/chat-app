import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const avatar = "https://randomuser.me/api/portraits/women/64.jpg";
const name = "Betty";
const status = true; 

function Contact(props){
    return(
        <section className = "Contact">
            <aside>
                <img className="avatar" src={props.avatar} alt={props.name} />
            </aside>
            <main className="status">
                <h3 className="name">{props.name}</h3>
                <span className={props.online?"status-online": "status-offline"}></span><h4 className="status-text">{props.online ? "Online" : "Offline"}</h4>
            </main>
        </section>
    )
}
             

Contact.propTypes = {
    name : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    online : PropTypes.bool
}

export default Contact; 