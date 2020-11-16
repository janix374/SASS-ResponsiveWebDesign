import React from 'react';
import cloud from '../../images/cloud.png';
import { Link } from "react-router-dom";
import { Clock } from '../Clock';

const Cloud = () => {
    return (
        <div className="cloud">
            <div className="container grid">
                <div className="text-centar">
                    <h2 className="lg-font">Extream cloud hosting</h2>
                    <p className="lead my-1">
                        Cloud hosting like you have never
                        seen. Fast, efficient and stable
                    </p>
                    <Link to="/features" className="btn btn-dark">Read More</Link>
                </div>
                <div className="cloud-image">
                   <Clock />
                </div>
                {/* <img src={cloud} alt="cloud"/> */}
            </div>
        </div>
    )
}

export default Cloud
