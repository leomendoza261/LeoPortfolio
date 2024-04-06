import React from "react";

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top w-auto mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand hoverable" href="https://leomendoza.web.app/">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M18.5,3H6C4.9,3,4,3.9,4,5v5.71c0,3.83,2.95,7.18,6.78,7.29c3.96,0.12,7.22-3.06,7.22-7v-1h0.5c1.93,0,3.5-1.57,3.5-3.5 S20.43,3,18.5,3z M16,5v3H6V5H16z M18.5,8H18V5h0.5C19.33,5,20,5.67,20,6.5S19.33,8,18.5,8z M4,19h16v2H4V19z" /></g></svg>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="0" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header bg-dark">
                            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body navbar-dark bg-dark">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-0">
                                <li className="nav-item">
                                    <a className="nav-link hoverable" href="#sobremi">Sobre Mi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hoverable" href="#habilidades">Habilidades</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hoverable" aria-current="page" href="#proyectos">Proyectos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;