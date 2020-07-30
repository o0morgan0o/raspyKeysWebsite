import React from 'react'
import '../scss/_head.scss'
import RaspiAlone from '../img/raspiAlone.png'


export default function Head() {
    return (
        <div className="container head-container" id="">
            <div className="row h-100">

                <div className="col-xl-4 col-lg-6 section-picture p-4 d-none d-lg-block" >
                </div>
                <div className="section-card p-4 col-xl-8 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-xs-0">

                    <div className="section-card-picture-top shadow-5 rounded">
                    </div>
                    <div className="section-card-picture-below shadow-5">
                    </div>
                    <div className="section-card-text p-2 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <br />
                        <br />
                        <h1 className="pb-2">
                            Become a Better Musician!
                        </h1>
                        <br />
                        <h2 className="head-text pb-2">RaspyKeys is an amateur project which aims at <strong> bringing out the best musician in you.</strong></h2>
                        <h2 className="head-text">Based on a raspberry pi device, the RaspyKeys will be your new personal trainer for all digital piano players of all levels.</h2>
                        <br />
                        <br />
                        <a href="https://www.kickstarter.com/projects/raspykeys/raspykeys-become-a-better-musician" target="_blank"><button className="btn btn-lg btn-primary ml-0 shadow-5 rounded-0">Support now on Kickstarter !</button></a>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
