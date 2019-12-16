/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Footer.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {


    return (
        // <!-- Navigation -->
        <header className="headerclass">
            <img src="../assets/logo.png" alt="logo" />
            <div style={{float:"right"}}>
                <select>
                    <option value="customer">Customer</option>
                    <option value="customer">Merchant</option>
                    <option value="customer">Admin</option>
                </select>
            </div>

        </header>
    );
}
