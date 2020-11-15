import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Cli = () => {

    const codeString = 
    `const mysql = require('mysql');

    const con = mysql.createConnection({
      
      host: "localhost",
      user: "yourusername",
      password: "yourpassword"
    
      });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    }`;

    return (
        <div className="cli">
            <div className="contanier grid">
                <div className="code-highlighter p-4">
                    <SyntaxHighlighter language="javascript" style={dark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div className="card p-4">
                    <h3>Easy use cross platforms</h3>
                </div>
                <div className="card p-4">
                    <h3>Deploy in secounds</h3>
                </div>
            </div>
        </div>
    )
}

export default Cli
