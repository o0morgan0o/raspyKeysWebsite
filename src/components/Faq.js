import React from 'react'
import '../scss/_faq.scss'
import CaseColor from '../components/CaseColor'
import SpaceBlack from '../components/SpaceBlack'

export default function Faq() {
    return (
        <div className="">
            <SpaceBlack height={"5em"} />
            <div className="faq-question-answer col-12" id="faq">
                <div className="container">

                    <div className="col-8">

                        <h1 className="faq-title">FAQ</h1>
                        <br />

                        <h2 className="faq-question">Q: Do I need an digital keyboard for the RaspyKeys ?</h2>
                        <p className="faq-answer">Yes. You need a digital keyboard with a USB-Midi connection because the RaspyKeys communicates with your keyboard with this protocol. Most of the modern digital keyboards have this connection but be sure to check this before purchasing.</p>
                        <h2 className="faq-question">Q: Does it works with a standard MIDI-5-Din legacy connection ?</h2>
                        <p className="faq-answer">Not for now, but in the future, it would be possible to make a MIDI-5-Din version of the RaspyKeys.</p>
                        <h2 className="faq-question">Q: Can I put my own drum loops samples in the RaspyKeys ?</h2>
                        <p className="faq-answer">Not for now, for the moment the SD card comes with a pack of drum loops and it is not possible to add more for technical reasons.</p>
                        <h2 className="faq-question">Q: What will I receive if I purchase the RaspyKeys ?</h2>
                        <p className="faq-answer">You will received the RaspyKeys parts: A raspberry pi, a LCD Screen, a SD Card containing the program, the 3d printed case and a power cable.
                        Just plug the screen and the SD card in the raspberry, plug the power cable, plug a usb cable from the raspikeys to your digital keyboard, and plug an audio cable any sound system or speakers, and you'll be good to go !</p>
                        <h2 className="faq-question">Q: Are there different colors for the Case ?</h2>
                        <p className="faq-answer">Yes, you will be able to choose the case color for the RaspyKeys. The available colors will be:</p>
                        <div className="case-color row justify-content-between ml-2 col-8">
                            <CaseColor color={"#877ac9"} colorName={"purple"} />
                            <CaseColor color={"#9a7348"} colorName={"golden"} />
                            <CaseColor color={"#121212"} colorName={"black"} />
                            < CaseColor color={"#2d426d"} colorName={"blue"} />
                            <CaseColor color={"#cccccc"} colorName={"grey"} />

                        </div>
                    </div>
                </div>
                <SpaceBlack height={"6em"} />
            </div>

        </div>
    )
}
