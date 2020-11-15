import React from 'react';
import { FaTasks, FaResearchgate, FaTripadvisor, FaXbox, FaBeer, FaCarBattery } from "react-icons/fa";

const FeaturesMain = () => {
    return (
        <div className="features-main my-3">
            <div className="container grid grid-3">
                <div className="card flex">
                    <i> <FaTasks /> </i>
                    <p>And a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="card flex">
                    <i><FaResearchgate /></i>
                    <p>And a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="card flex">
                    <i><FaTripadvisor /></i>
                    <p>And a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="card flex">
                    <i><FaBeer /></i>
                    <p>And a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="card flex">
                    <i><FaXbox /></i>
                    <p>And a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="card flex">
                    <i><FaCarBattery /></i>
                    <p>
                        And a search for 'lorem ipsum' will uncover many web sites 
                        still in their infancy. Various versions have evolved over
                         the years, sometimes by accident, sometimes on purpose 
                         (injected humour and the like).
                         And a search for 'lorem ipsum' will uncover many web sites 
                        still in their infancy. Various versions have evolved over
                         the years, sometimes by accident, sometimes on purpose 
                         (injected humour and the like).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesMain
