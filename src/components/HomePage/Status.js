import React from 'react';
import { FaFirstdraft, FaUpload, FaWater } from "react-icons/fa";

const Status = () => {
    return (
        <div className="status">
            <div className="container">
                <h3 className="status-heading text-center my-1"> 
                There are many variations of passages of Lorem 
                Ipsum availablehtly believable.
                 If you are going to use a passage of Lorem Ipsum.
                </h3>
                <div className="grid grid-3 text-center my-4">
                    <div>
                        <FaFirstdraft />
                        <h2>10,349,405</h2> 
                        <p className="text-secondary">Deployments</p>
                    </div>
                    <div>
                        <FaUpload />
                        <h2>987 TB</h2> 
                        <p className="text-secondary">Published</p>
                    </div>
                    <div>
                        <FaWater />
                        <h2>2,343,265</h2> 
                        <p className="text-secondary">Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Status
