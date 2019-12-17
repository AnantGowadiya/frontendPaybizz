import React, { Component } from 'react';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/buttons.css'
import '../css/misc.css'
import DashHeader from './DashHeader';


import visalogo from "../assets/visa_logo.png";
import mastercardlogo from "../assets/mastercardlogo.png";

import applelogo from "../assets/applelogo.png";

class Dashboard extends Component {

    state = {   
        name: 'Anant Gowadiya',
        id: "CST14414",
        address: 'B001, SSA, B Chinappa Layout, Mahadevapura, Bengaluru - 560048',
        cards: [{
            icon: 'v',
            name: "VISA",
            number: "4566********1234",
            lastTxn: "24/09/2019"
        },
        {
            icon: 'm',
            name: "MasterCard",
            number: "5966********5678",
            lastTxn: "14/10/2019"
        },
        {
            icon: 'a',
            name: "Apple Card",
            number: "5555********8877",
            lastTxn: "08/01/2019"
        },
        {
            icon: 'v',
            name: "VISA 2",
            number: "4509********3895",
            lastTxn: "12/11/2019"
        },
        {
            icon: 'm',
            name: "MasterCard 2",
            number: "5966********9999",
            lastTxn: "14/07/2018"
        }]
    }

    chooseCard = (c) => {
        if (c === 'v')
            return visalogo
        if (c === 'm')
            return mastercardlogo
        if (c === 'a')
            return applelogo
    }
    chooseCardColor = (c) => {
        if (c === 'v')
            return "#172274"
        if (c === 'm')
            return "black"
        if (c === 'a')
            return "grey"
    }
    render() {

        let cards = this.state.cards.map(card => {
            let color = this.chooseCardColor(card.icon);
            return (
                <div className="col-md-3">
                    <div className="card-box" style={{ backgroundColor: color, color: "white" }}>
                        {/* <br /> */}
                        <img className="card-icon" src={this.chooseCard(card.icon)} />
                        <i style={{ float: "right" }} class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <br /><br />
                        <p>{card.name}<br />
                            Card : {card.number}<br />
                            Last Txn : {card.lastTxn}</p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <DashHeader></DashHeader>
                <br /><br />
                <div className="row">
                    <div className="col-4" style={{ textAlign: "center" }}><p style={{ textDecoration: "underline" }}>Customer ID</p>{this.state.id}</div>
                    <div className="col-8" style={{ textAlign: "center" }}><p style={{ textDecoration: "underline" }}>Billing Address</p>{this.state.address}</div>
                </div>
                <br /><br /><br />
                <div className="row ">
                    <div className="col-4" style={{ textAlign: "center" }}>
                        <button className="blue-button">+ Add more</button>
                    </div>
                </div>
                <br />

                <div className="container">
                    <div className="row">{cards}</div>
                </div>
            </div>

        );
    }
}

export default Dashboard;
