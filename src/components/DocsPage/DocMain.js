import React from 'react';
import { Link } from "react-router-dom";
import { FaAndroid } from "react-icons/fa";

const DocMain = () => {
    return (
        <div className="doc-main my-4">
            <div className="container grid">

                <div className="card bg-light p-3"> 
                    <h3>Essentials</h3>
                    <nav>
                        <ul>
                            <li> <Link to="#">Introduction</Link></li>
                            <li> <Link to="#">About</Link></li>
                            <li> <Link to="#">Installation</Link></li>
                        </ul>
                    </nav>
                    <h3>Deplyment</h3>
                    <nav>
                        <ul>
                            <li> <Link to="#">Setting up a container</Link></li>
                            <li> <Link to="#">Using the CLI</Link></li>
                            <li> <Link to="#">Managin resource</Link></li>
                            <li> <Link to="#">Upgrade & downgrade</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="card bg-light p-3"> 
                    <h3>Introduction</h3>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                         consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
                         classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of "de Finibus Bonorum
                    </p>
                    <div className="alert alert-success">
                        <i><FaAndroid /></i>
                    </div>
                    <h3>Introduction 2</h3>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                         consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
                         classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of "de Finibus Bonorum
                    </p>
                    <a href="#" className="btn btn-primary">Install CLI</a>

                    <h3>Requirements</h3>
                    <ul>
                        <li>Window 10, Max OSX, Linux</li>
                        <li>Node js v12 or higher</li>
                    </ul>

                    <h3>Install</h3>
                    <p>Mac (Homebrow)</p>
                    <pre><code>$ brow install janix-cli</code></pre>

                    <h3>Install</h3>
                    <p>NPM</p>
                    <pre><code>$ npm install janix-cli</code></pre>

                    <h3>Install</h3>
                    <p>Yarn</p>
                    <pre><code>$ yarn install janix-cli</code></pre>
                </div>

            </div>
        </div>
    )
}

export default DocMain
