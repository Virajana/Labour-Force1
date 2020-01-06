import React, {Component} from 'react';
import './dashboard.css'
import {Link} from 'react-router-dom';
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);
export default function Dashboard({...rest}) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
                <div className="w3-display-middle">
                    <h1 className="w3-jumbo w3-animate-top" style={{textAlign: "center"}
                    }>SRI LANKAN LABOR FORCE SURVAY DATA PREDICTION</h1>
                    <Link to="/account">
                        <button className="button button3">ENTER</button>
                    </Link>
                </div>
                <div className="w3-display-bottomleft w3-padding-large">
                    Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">RDSlabs</a>
                </div>
            </div>
        </div>
    );
}


