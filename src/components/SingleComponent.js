import React, { Component } from 'react'
import Plus from '../svg/plus.svg'

export default class SingleComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        let sizePlusSymbol = 36
        return (
            <div className="card-component" style={{
                top: (this.props.index - 1) * 200
            }}>
                <div className="component-picture" style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    zIndex: `${this.props.index})`,

                }}></div>
                <div className="tooltip-container">

                    <div className="component-tooltip" style={{
                        backgroundImage: `url(${Plus})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        width: `${sizePlusSymbol}px`,
                        height: `${sizePlusSymbol}px`
                    }}
                    />

                    <div className="component-tooltip-text" style={{
                        height: "40px"
                    }}>
                        {this.props.description}
                    </div>
                </div>


            </div>
        )
    }
}
