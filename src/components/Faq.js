import React from 'react'
import '../scss/_faq.scss'
import triangle from '../svg/triangle.svg'
import piano from '../svg/piano.svg'
import Space from '../components/Space'

export default function Faq() {
    return (
        <div className="">
            <div className="junction"></div>

            <div className="faq-container">
                <div className="container container-piano-faq">

                    <div className="col-11 bg-rectangle">

                        <div className="col-11 piano-schema"></div>
                        <div className="texttop">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi repellat iste dicta voluptatum. Error, molestias libero natus reprehenderit officia officiis cum neque reiciendis labore ducimus id. Reiciendis illo recusandae veritatis.</div>
                        <div className="textbelow">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ipsum veritatis quas! Vero deserunt expedita laboriosam, sed assumenda dicta eligendi, ducimus harum magnam quisquam et voluptates similique enim adipisci at?</div>
                    </div>
                    <Space height={"5em"} />
                    <div className="faq-question-answer col-6">
                        <h1 className="faq-title">FAQ</h1>
                        <br />

                        <h2 className="faq-question">Q: What is it ?</h2>
                        <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit enim veritatis possimus alias vero quo nesciunt, voluptas expedita quasi minima perspiciatis, laboriosam suscipit sapiente nobis, sequi hic recusandae distinctio!</p>
                        <h2 className="faq-question">Q: What is it ?</h2>
                        <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit enim veritatis possimus alias vero quo nesciunt, voluptas expedita quasi minima perspiciatis, laboriosam suscipit sapiente nobis, sequi hic recusandae distinctio!</p>
                        <h2 className="faq-question">Q: What is it ?</h2>
                        <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit enim veritatis possimus alias vero quo nesciunt, voluptas expedita quasi minima perspiciatis, laboriosam suscipit sapiente nobis, sequi hic recusandae distinctio!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
