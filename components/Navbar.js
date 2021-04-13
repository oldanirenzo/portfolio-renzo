import React from 'react'
import Link from 'next/link'

const Navbar = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/#">
                <a className="navbar-brand">Portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href='/#conocimientos'>
                            <a className="nav-link" >Conocimientos</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/#proyectos'>
                            <a className="nav-link">Proyectos</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/contacto'>
                            <a className="nav-link" >Contáctame</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default Navbar