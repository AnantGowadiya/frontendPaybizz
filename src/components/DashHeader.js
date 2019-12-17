import React from "react";
// import "./Header.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";



export default function DashHeader() {


    return (
        <nav class="navbar" style={{ background: "#304048" }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a class="navbar-brand font-color-white" href="#">
                <img src={logo} width="20" height="30" alt="logo" />
                {/* Paybiz */}
            </a>

            <div></div>
            <div className="row" style={{ float: "right" }}>
                <h6 style={{ color: "white" }}>Mr. Anant Gowadiya</h6>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">
                    <i class="fa fa-sign-out" style={{ fontSize: "25px", color: "white" }}></i>
                </Link>
                &nbsp;&nbsp;
            </div>
        </nav>
    );
}
