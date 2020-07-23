import React from 'react'
import '../scss/_schema.scss'

export default function Schema2() {
    return (
        <div>
            <div className="junction"></div>
            <div className="faq-container">
                <div className="bg-triangle py-0 my-0">

                </div>
                <div className="container container-piano-faq">
                    <div className="bg-rectangle rounded shadow-5 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-12 piano-schema py-4"></div>
                        <div className="texttop p-2 rounded shadow-5">
                            <p className="m-0 p-0">
                                The RaspyKeys is connected to your digital keyboard with an USB cable. And it is also connected to your speakers via an audio cable (Jack 3.5mm standard).

                            </p>
                        </div>
                        <div className="textbelow p-2 rounded shadow-5 mb-3 ml-3">
                            <p className="m-0 p-0">
                                The RaspyKeys can receive what you play, and it can also send notes to your piano. Thanks to this communication, you can make exercices to improve your playing with the integrated Ear Training Excercices.
                                You can also record and replay some chord progression you want to work on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
