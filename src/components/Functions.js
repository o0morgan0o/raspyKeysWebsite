import React from 'react'
import '../scss/_functions.scss'

export default function Functions() {
    return (
        <div className="container functions-container" id="project">
            <div className="marker mb-4 ml-3"></div>
            <br />
            <div className="container">
                <div className="row">

                    <div className="functions-card col-4">
                        <div className="functions-card-title d-flex">
                            <div className="svg-container-1 col-2"></div>
                            <h1 className="function-title col-10 ml-2">Ear Training</h1>
                        </div>
                        <div className="functions-card-body my-4">
                            <h2 className="function-card-text col-11">Work on interval and chord recognition and improve your ear directly on your keyboard.
                            Ear training is an essential skill for any successfull musician.
                            </h2>
                        </div>
                    </div>

                    <div className="functions-card col-4">
                        <div className="functions-card-title d-flex">
                            <div className="svg-container-2 col-2"></div>
                            <h1 className="function-title col-10 ml-2">DrumLoop Player</h1>
                        </div>
                        <div className="functions-card-body my-4">
                            <h2 className="function-card-text col-11">
                                The RaspyKeys contains 200 drum loops of all genres and all tempos in order to practise your playing
                                on various tempos.
                            </h2>
                        </div>
                    </div>

                    <div className="functions-card col-4">
                        <div className="functions-card-title d-flex">
                            <div className="svg-container-3 col-2"></div>
                            <h1 className="function-title col-10 ml-2">Record & Practise</h1>
                        </div>
                        <div className="functions-card-body my-4">
                            <h2 className="function-card-text col-11">
                                Record chord progressions and/or musical phrases, and practise them on every key. Keep all your favorites recording and practise theme at any time.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
