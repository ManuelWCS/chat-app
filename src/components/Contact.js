import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true
    };
  }

  

  render() {
    return (
      <figure className="Contact">
        <img
          className="avatar"
          src={this.props.avatar}
          alt={this.props.character}
        />
        <div className="status">
          <h4 className="name">{this.props.name}</h4>
          <span
            className={this.state.online ? "status-online" : "status-offline"}
            onClick={(event) => {
              const newOnline = !this.state.online;
              this.setState({ online: newOnline });
            }}
          ></span>
          <p
            className="status-text"
            onClick={(event) => {
              const newOnline = !this.state.online;
              this.setState({ online: newOnline });
            }}
          >
            {this.state.online ? "Online" : "offline"}
          </p>
        </div>
      </figure>
    );
  }
}

export default Contact;
