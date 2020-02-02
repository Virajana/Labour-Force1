import React from 'react';
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
                    <h1 className="w3-jumbo w3-animate-top" style={{textAlign: "center", color:"blue"}
                    }>SRI LANKAN LABOR FORCE SURVAY DATA PREDICTION</h1>
                    <Link to="/admin/unemployment">
                        <button className="button button3">ENTER</button>
                    </Link>
                </div>
                <div className="w3-display-bottomleft w3-padding-large">
                    {/* Powered by <a href="#">RSDlabs</a> */}
                </div>
            </div>
        </div>
    );
}


