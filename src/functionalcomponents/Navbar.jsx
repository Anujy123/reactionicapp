import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top "   >
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">React Ionic app</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Popular</Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
            <br />
            <br />
            <br />
            

        </>
    )


}