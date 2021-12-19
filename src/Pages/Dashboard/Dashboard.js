import firebase from 'firebase';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/logo.png';
// import { handleSignOut } from '../Login/HandleLogin';
import AllOrders from './AllOrders/AllOrders';
import './Dashboard.css';
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';
// import {   signOut,  getAuth} from "firebase/auth";
export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(() => {
            return null;
        })
        .catch(error => {
            console.log(error)
        })
}

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [display, setDisplay] = useState(null);
    // const auth = getAuth();

// export const logout = () => {
//         signOut(auth)
//           .then(() => {
//             // Sign-out successful.
//           })
//           .catch((error) => {
//             // An error happened.
//           });
//       };

    useEffect(() => {
        fetch(`http://localhost:5000/getAdmin?email=` + user.email)
            .then(response => response.json())
            .then(data => {
                setIsAdmin(data)
                data ? setDisplay(<AllOrders></AllOrders>) : setDisplay(<Order></Order>)
            })
    }, [])
    return (
        <section id="customer">
            <div className="navbar d-flex justify-content-between py-3 px-0 px-sm-5">
                <Link to="/">
                    <img src={logo} width="120px" alt="" />
                </Link>
                <span className="h4">{user.name}</span>
               
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar isAdmin={isAdmin} setDisplay={setDisplay}></Sidebar>
                </div>
                <div className="col-md-9 right bg-light">
                    {display}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;