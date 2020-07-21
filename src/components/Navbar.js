
import React from 'react'
import logo from '../svg/logo.svg'
import '../scss/_navbar.scss'

export default function Navbar() {
    return (
        <nav className="navbar py-0 mx-0">
            <div className="d-flex w-100 h-100">
                <div className="navbar-left bg-dark py-1">
                    <div className="container h-100">

                        <ul className="navbar-ul d-flex justify-content-between col-9">
                            <li className="nav-item active"> <a className="nav-link" href="#">PROJECT</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">FAQ</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">CONTACT</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">LINKS</a> </li>
                        </ul>

                    </div>
                </div>
                <div className="navbar-right py-0">
                    <img
                        src={logo}
                        alt="RaspiKeys logo" />
                </div>
            </div>


        </nav>
    )
}
