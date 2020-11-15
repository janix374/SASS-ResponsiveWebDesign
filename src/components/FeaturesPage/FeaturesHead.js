import React from 'react';
import server from '../../images/server2.jpg'

const FeaturesHead = () => {
    return (
        <div className="features-head py-3 bg-primary">
            <div className="container grid">
                <div>
                    <h1>Features</h1>
                    <p>Now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div>
                     <img src={server} alt="server" />
                </div>
            </div>
        </div>
    )
}

export default FeaturesHead
