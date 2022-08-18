import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact Me At {this.props.email} For Questions About Any Of The Following Businesses</h2>
                <p>{this.props.bus}</p>
            </div>
        )
    }
}
