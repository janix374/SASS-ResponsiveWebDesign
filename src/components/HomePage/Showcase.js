import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Showcase = () => {

    let [potentialUser, setPotentialUser] = useState({
        name: '',
        company: '',
        email: '',
      });

      const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        potentialUser[name] = value;
        setPotentialUser(potentialUser);
      }

      let submiteForm = (e) => {
        e.preventDefault();
        console.log(potentialUser);
      }

    return (
    <div className="showcase">
        <div className="container grid">
            <div className='showcase-text'>
                <h1>Esier Deployment</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the
                     1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen.
                    </p>
                    <Link to="/features" className="btn btn-secondary">Read More</Link>
            </div>
            <div className="showcase-form showcase-card">
                <h2>Request a Demo</h2>
                <form onSubmit={submiteForm}>
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Name" required onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <input type="text" name="company" placeholder="Company Name" required onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" required onChange={handleChange}/>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Showcase
