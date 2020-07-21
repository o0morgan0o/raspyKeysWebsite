import React from 'react'
import '../scss/_head.scss'

export default function Head() {
    return (
        <div className="container head-container">

            <div className="row justify-content-between">
                <div className="col-4 bg-danger section-picture">
                    <image src=""></image>
                    aa


                </div>
                <div className="col-8 section-card">
                    <div className="section-card-picture p-3 bg-warning">
                        aa
                    <image src=""></image>

                    </div>

                    <div className="section-card-text p-3">
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
