import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer py-5 bg-dark">
            <div className="container grid grid-3">
               <div>
                <h1>Janix</h1>
                    <p>Copyright &copy; 2020</p>
               </div>
                <nav className="per-social">
                    <ul>
                       <li> <a href="https://github.com/janix374" target="_blank">GitHub</a></li>
                       <li> <a href="http://jankokostic.com/" target="_blank">Janix</a></li>
                       <li> <a href="https://www.linkedin.com/in/janko-kosti%C4%87-07ab0595/" target="_blank">LinkedIn</a></li>
                    </ul>
                </nav>
                <nav className="social">
                    <ul>
                       <li> <FaFacebookSquare /></li>
                       <li> <FaGithubSquare /></li>
                       <li> <FaLinkedin /></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer
