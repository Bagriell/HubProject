import React, { Component } from 'react'
import './Styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <section className="footer clearfix">
                <h5 className="info-title">Contact</h5>
                <div className="info">
                    <span>Téléphone:</span><br />
                    <span>Skype:</span><br />
                    <span>Adresse mail:</span><br />
                </div>
            </section>
        );
    }
}

export {
    Footer,
}