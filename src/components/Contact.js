import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const avatar = "https://randomuser.me/api/portraits/women/64.jpg";
const name = "Betty";
const status = true; 

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            online: false,
        };
    }
    render() {

        return(
            <section className = "Contact">
            <aside>
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
            </aside>
            <main className="status">
                <h3 className="name">{this.props.name}</h3>
                <span className={this.props.online?"status-online": "status-offline"} 
                onClick={event => {
                    const newOnline = !this.state.online;
                    this.setState({online : newOnline});
                }}>
                    </span><h4 className="status-text">{this.props.online ? "Online" : "Offline"}</h4>
            </main>
        </section>
    )
}
}
             

Contact.propTypes = {
    name : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    online : PropTypes.bool
}

export default Contact; 