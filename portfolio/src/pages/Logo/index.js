import React, { Component } from "react";
import "./style.css";
import { Navigate } from "react-router-dom";

function Logo() {
  return (
    <div className="logo_wrapper">
      <div className="screen" >
        <p>kumar pranjul</p>
      </div>
    </div>
  );
}

class Myname extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Navigate to="/home" />
    ) : (
      <Logo/>
    );
  }
}

export default Myname;
