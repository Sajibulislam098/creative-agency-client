import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/logo.png';
import { handleSignOut } from '../../Login/HandleLogin';


const Navbar = () => {
    const { user } = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-xl">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="130px" />
                </Link>
                <button className="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#nava">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse text-center navbar-collapse" id="nava">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#works">Our Portfolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#contact">Contact Us</a>
                        </li>
                        <div className="nav-item mx-2">
                          
                        
              {/* <div className="d-flex justify-content-center align-items-center user pb-3">
                <li className="nav-item">
                  <p className="user-name text-light">{user.displayName}</p>
                </li>
                <li className="nav-item pb">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline-danger logout-btn"
                  >
                    Log Out
                  </button>
                </li>
              </div>
         
              <div className="user d-flex">
                <div className="nav-item">
                  <NavLink to="/login">
                    <button className="btn btn-outline-danger logout-btn">
                      Log In
                    </button>
                  </NavLink>
                </div>
              </div> */}
         
                            <Link to="/login" className="nav-link btn btn-dark text-white px-3">Login</Link>
                        </div>
                        <li className="nav-item mx-2">
                            <Link to="/dashboard/admin" className="nav-link btn btn-dark text-white px-3">Dashboard</Link>
                            {/* <h5 className="nav-link"><b>{user.name}</b></h5> */}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;