import React from 'react'
import '../scss/_head.scss'
import RaspiAlone from '../img/raspiAlone.png'


export default function Head() {
    return (
        <div className="container head-container" id="">
            <div className="row h-100">
                <div className="col-4 section-picture p-4">
                </div>
                <div className="col-8 section-card p-4 ">
                    <div className="section-card-picture-top shadow-5 rounded">
                    </div>
                    <div className="section-card-picture-below shadow-5">
                    </div>
                    <div className="section-card-text p-2">
                        <br />
                        <h1 className="pb-2">
                            Become a Better Musician!
                        </h1>
                        <h2 className="head-text pb-2">RaspyKeys is an amateur project which aims at <strong> bringing out the best musician in you.</strong></h2>
                        <h2 className="head-text">Based on a raspberry pi device, the RaspyKeys will be your new personal trainer for all digital piano players of all levels.</h2>
                        <br />
                        <button className="btn btn-lg btn-primary m-auto ml-0 shadow-5 rounded-0">Support now on Kickstarter !</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
