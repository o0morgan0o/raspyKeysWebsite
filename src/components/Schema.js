import React from 'react'
import '../scss/_schema.scss'
import SingleComponent from './SingleComponent'
import Part1 from '../img/part1.png'
import Part2 from '../img/part2.png'
import Part3 from '../img/part3.png'

export default function Schema() {
    return (
        <div className="schema-container container">

            <div className="schema-bg col-10">
                <div className="parts-container h-100 mx-4">

                    <SingleComponent
                        index={1}
                        image={Part1}
                        description={"mydescription"}
                    />

                    <SingleComponent
                        index={2}
                        image={Part2}
                        description={"mydescription"}
                    />

                    <SingleComponent
                        index={3}
                        image={Part3}
                        description={"mydescription"}
                    />
                </div>

            </div>


        </div>
    )
}
