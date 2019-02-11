import React, { Component } from 'react'

class Logger extends Component {
    render() {
        return (
            <section className="logger">

            </section>
        );
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="login"></div>
        );
    }
}

class Register extends Component {
    render() {
        return (
            <div className="register"></div>
        );
    }
}

export {
    Logger
}