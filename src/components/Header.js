import React from "react";
// import "./Header.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

export default function Header() {
    return (
        <nav class="navbar" style={{background:"#304048"}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a class="navbar-brand font-color-white" href="#">
                {/* <img src={logo} width="20" height="30" alt="logo" /> */}
                Paybiz
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" >
                <i class="fa fa-users" style={{color:"white"}}></i>
                {/* <img src={profile} width="20" height="30" alt="profile" /> */}
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" style={{ float: "right" }}>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Admin <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Merchant</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Customer</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
