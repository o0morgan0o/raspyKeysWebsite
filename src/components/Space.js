import React, { Component } from 'react'

export default class Space extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="space" style={{ width: "100%", height: this.props.height }}>

            </div >
        )
    }

}