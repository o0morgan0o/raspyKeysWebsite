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
                top: (this.props.index - 1) * 200,
            }}>
                <div className="component-picture mx-lg-2 mx-md-2 mx-sm-0 mx-xs-0 col-lg-4 col-md-4 col-sm-4 col-12" style={{

                    backgroundImage: `url(${this.props.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    height: "234px",
                    zIndex: `${this.props.index})`,

                }}></div>
                <div className="d-none d-sm-block col-1"></div>
                <div className="tooltip-container col-sm-7 col-12">


                    <div className="component-tooltip-text rounded p-1 m-0 ml-2 shadow-5 col-lg-8 col-md-10 col-sm-11 col-xs-11" style={{
                    }}>
                        <div className="rect d-none d-sm-block"></div>
                        <div className="component-tooltip d-none d-sm-block" style={{
                            backgroundImage: `url(${Plus})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            width: `${sizePlusSymbol}px`,
                            height: `${sizePlusSymbol}px`,
                        }}
                        />
                        <p className="text-light m-0 m-3">
                            {this.props.description}
                        </p>
                    </div>
                </div>


            </div>
        )
    }
}
