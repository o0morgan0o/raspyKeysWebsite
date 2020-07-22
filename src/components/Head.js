import React from 'react'
import '../scss/_head.scss'
import RaspiAlone from '../img/raspiAlone.png'

export default function Head() {
    return (
        <div className="container head-container">

            <div className="row justify-content-between">
                <div className="col-4 section-picture p-4">


                </div>
                <div className="col-8 section-card">
                    <div className="section-card-picture p-3 ">

                    </div>

                    <div className="section-card-text p-3">
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        </p>

                        <button className="btn btn-lg btn-primary">Buy now on Kickstarter</button>


                    </div>
                </div>


            </div>

        </div>
    )
}
