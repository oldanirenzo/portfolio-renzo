import React from 'react'
import Link from 'next/link'

export const Navbar = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Mi portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href='#conocimientos'>
                            <a className="nav-link" >Conocimientos</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='#proyectos'>
                            <a className="nav-link">Proyectos</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mis redes</a>
                        <div className="dropdown-menu">
                            <Link href='/linkedin'>
                                <a className="dropdown-item" >LinkedIn</a>
                            </Link>
                            <Link href='/github'>
                                <a className="dropdown-item">Github</a>
                            </Link>
                            <Link href='/whatsapp'>
                                <a className="dropdown-item" >WhatsApp</a>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href='/contacto'>
                                <a className="dropdown-item" >Contáctame</a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default Navbar