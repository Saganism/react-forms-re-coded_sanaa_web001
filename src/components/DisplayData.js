import React, { Component } from 'react'

export default class DisplayData extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.state.firstName}</h1>
                <h1>{this.props.state.lastName}</h1>
            </div>
        )
    }
}
