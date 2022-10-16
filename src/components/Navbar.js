import React from 'react';
import {Link} from "react-router-dom";
export const Navbar = () => {
    return (
        <div>
             {/*----------------------nav--------------------*/}
             <div className="my_menu container">

<nav className="navbar navbar-expand-lg navbar-expand-lg navbar-dark" id="main_navbar" aria-label="Main navigation">
    <div className="container-fluid">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/" title="Home">Home</Link>
                </li>
               {/*---CSE dropdown------*/}
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" title="Computer Science & Engineering">
                        CSE
                    </Link>
                    <ul className="dropdown-menu">
                        <li className="nav-item dropdown">
                        
                            <Link className="dropdown-item" to="/Subjects" role="button">
                                MCA-Question Pappers
                            </Link>
        
                            <Link className="dropdown-item" to="/Material" role="button">
                                MCA-Study Material
                            </Link>
                            <hr/>

                            <Link className="dropdown-item" to="/Subjects" role="button">
                            M.Tech (CSE)-Question Pappers
                            </Link>
                          
                            <Link className="dropdown-item" to="/Material" role="button">
                            M.Tech (CSE)-Study Material
                            </Link>
                            <hr/>
                            <Link className="dropdown-item" to="/Subjects" role="button" >
                            M.Tech (IT)-Question Pappers
                            </Link>
                           
                            <Link className="dropdown-item" to="/Material" role="button">
                            M.Tech (IT)-Study Material
                            </Link>
                            <hr/>
                            <Link className="dropdown-item" to="/Subjects" role="button" >
                            PHD-Question Pappers
                            </Link>
                            <Link className="dropdown-item" to="/Material" role="button" >
                            PHD-Study Material
                            </Link><hr/>

                            <Link className="dropdown-item" to="/Subjects" role="button">
                            B.Tech-Question Pappers
                            </Link>
                            <Link className="dropdown-item" to="/Material" role="button">
                            B.Tech-Study Material
                            </Link>
                         </li>
                       
                      </ul>
                </li>
{/*---end CSE dropdown------*/}
                <li className="nav-item">
                    <Link className="nav-link active" to="/" title=" Electronics and Communications Engineering ">ECE</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link active" to="/" title="Mechanical Engineering">ME</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link active" to="/" title="CIVIL">CIVIL</Link>
                </li>
               
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>




</div>
            {/*---end of nav--------*/}
        </div>
    )
}
