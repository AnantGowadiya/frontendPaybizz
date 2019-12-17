import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
// import './Footer.css';
import logo from "../assets/logo2.png";
function Registration() {
    return (
        <div class="mask rgba-black-strong h-xs-500" style={{ backgroundColor: "#405962", height: "90vh" }}>
            <div class="container py-5" style={{ top: "20%", position: "" }}>
                <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto">
                        <div class="card-wrapper">
                            <div id="my-card" class="card card-rotating text-center">
                                <div class="face front">
                                    <div class="card-body" style={{ backgroundColor: "#405962" }}>
                                        <div class="form-header primary-color">
                                            {/* <h3 class="font-weight-500 my-2 py-1"><i class="fas fa-sign-in-alt"></i> Log in</h3> */}
                                            <img src={logo} width="100" height="100" alt="logo" />
                                        </div>
                                        <div class="md-form">
                                            {/* <i class="fas fa-envelope prefix grey-text d-flex"></i> */}
                                            <label for="email" class="d-flex" style={{ color: "white" }}>Email ID</label>
                                            <input type="email" id="email" name="email" class="form-control validate"></input>
                                            <br />

                                        </div>
                                        <div class="text-center">
                                            <button class="btn btn-dark btn-lg" style={{ backgroundColor: "#304048" }}>
                                                <Link to="/registrationForm" style={{ color: "white", }}>Register</Link>
                                            </button>
                                        </div>
                                        <Link to="/" style={{ color: "white" }}>Cancel</Link>
                                        <div class="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registration;