import React from 'react';
import Card from './Card';

const Planguage = ({PlanguagesData}) => {
    return (
        <div className="program-language my-4">
            <h2 className="md-font text-centar">Suported Language</h2>
            <div className="container flex">
                {PlanguagesData.map( card => {
                    return (<Card key={card.id} card={card}/>);
                })}
            
            </div>
        </div>
    )
}

export default Planguage
