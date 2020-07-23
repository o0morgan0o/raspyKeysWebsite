
import React from 'react'
import logo from '../svg/logo.svg'
import '../scss/_navbar.scss'

export default function Navbar() {
    return (
        <div className="container-fluid bg-dark">

            <nav className="container py-3 navbar navbar-dark">
                <div className="row ">
                    <div className="col-7 bg-dark py-1">
                        <ul className="d-flex my-auto">
                            <li className="nav-item"> <a className="nav-link px-2" href="#video">PROJECT</a> </li>
                            <li className="nav-item"> <a className="nav-link px-2" href="#about">ABOUT</a> </li>
                            <li className="nav-item"> <a className="nav-link px-2" href="#faq">FAQ</a> </li>
                        </ul>
                    </div>
                    <a href="#" className="col-5">
                        {/* <div className=" logo col-5"> */}
                        {/* </div> */}
                        <img src={logo} alt="logo" className="logo py-2 mx-4" />
                    </a>
                </div>
            </nav>
        </div>
    )
}
