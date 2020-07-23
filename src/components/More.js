
import React from 'react'
import '../scss/_more.scss'

export default function More() {
    return (
        <div className="bg-dark">

            <div className="container">

                <div className=" more-container py-4 px-4 rounded bg-white col-8">



                    <h1>More ...</h1>
                    <br />
                    <p>Even thought the prototype of the RaspyKeys is functional, till the end of the Kickstarter, the design and the UI will be improved.
                    After the launch of the kickstarter, all the parts will start shipping in December 2020.
                <br />
                        <br />

                Feel free to ask question if needed on the kickstarter, or on my personal email <strong>morgan.thibert@protonmail.com</strong>.

                </p>
                    <br />
                    <button className="btn btn-lg btn-primary m-auto ml-0 shadow-5 btn-contact rounded-0">Support now on Kickstarter !</button>
                    <br />
                </div>
            </div>
        </div>
    )
}
