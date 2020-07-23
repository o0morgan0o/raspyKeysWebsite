import React from 'react'
import '../scss/_schema.scss'
import SingleComponent from './SingleComponent'
import Part1 from '../img/part1.png'
import Part2 from '../img/part2.png'
import Part3 from '../img/part3.png'

export default function Schema() {
    return (
        <div className="container">

            <div className="col-12 px-2" id="about">

                <h1 className="mb-4">How it works ?</h1>
                <br />
                <br />
                <div className="schema-container">


                    <div className="schema-bg rounded shadow-5 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        <div className="parts-container h-100 mx-lg-4 mx-md-2 mx-sm-2 mx-xs-0">

                            <SingleComponent
                                index={1}
                                image={Part1}
                                description={"LCD 3.5' Touchscreen. 480x320 pixels. Control it with your finger of with the included pen."}
                            />

                            <SingleComponent
                                index={2}
                                image={Part2}
                                description={"Raspberry Pi 3 model B. The heart of the device. The 32 Go SD card contains the RaspyKeys program and the Drum Loops collection."}
                            />

                            <SingleComponent
                                index={3}
                                image={Part3}
                                description={"3d printed case in PLA plastic. Handmade printed on quality 3d printer. Different colors will be available."}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
