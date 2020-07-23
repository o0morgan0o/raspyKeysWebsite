
import React, { Component } from 'react'

export default class SpaceBlack extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div style={{
                width: "100%", height: this.props.height,
                backgroundColor: "black",
            }}>

            </div >
        )
    }

}