import React from 'react';

const Card = ({card}) => {
    const image = `../images/${card.image}`;
    return (
        <div className="card-language text-centar">
            <h4 className="">{card.language}</h4>   
            <img src={`./images/${card.image}`}  alt={card.alt} />     
        </div>
    )
}

export default Card
