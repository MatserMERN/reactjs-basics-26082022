import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UserAPI from '../10.ajax-calls/UserAPI'
import {UserDetails} from '../10.ajax-calls/UserDetails'
import UserDetailsOne from '../10.ajax-calls/UserDetailsOne'
import "./styling.css"

const Home = () => <div className="container"><h1>Welcome Home</h1></div>
const About = () => <div className="container"><h1>About US</h1></div>
const Contact = () => <div className="container"><h1>Contact US for more info</h1></div>
const Error = () => <div className="container"><h1>Please contact Administrator</h1></div>

const Routing = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Routing</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/users" className="nav-item nav-link active">Users</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/users" element={<UserAPI />}></Route>
                <Route path="/users/:id" element={<UserDetailsOne />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </Router>
    )
}

export default Routing