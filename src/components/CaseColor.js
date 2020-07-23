import React from 'react'
import { render } from '@testing-library/react'

export default class CaseColor extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        let size = 54;
        return (
            <div className="d-flex flex-column"
                style={{ width: "auto", height: "auto" }}>

                <div className="mb-2 text-center text-white">
                    {this.props.colorName}

                </div>

                <div className="rounded-circle" style={{
                    backgroundColor: this.props.color,
                    width: `${size}px`,
                    height: `${size}px`,
                    border: "4px solid white",

                }}>

                </div>
            </div>
        )
    }
}
