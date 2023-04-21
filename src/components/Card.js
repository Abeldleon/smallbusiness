import React, { useState } from 'react'


export default function Card(props) {
    const [isDescriptionExpanded, setExpandDescription] = useState(false);

    function handleDescriptionExpansion() {
        setExpandDescription(!isDescriptionExpanded);
    }
    return (
        <div className='card-container'>
            <img src={props.image} alt={props.alt} />
            <div className='item-details'>
                <div className='row'>
                    <h1 className='item-name'>{props.text}</h1>
                    <h1 className='item-price'>{props.price}</h1>
                </div>

                <div className='solo-row'>
                    <button class="btn" onClick={handleDescriptionExpansion}>{isDescriptionExpanded ? 'Show Less' : 'Show More'}</button>
                </div>

                <div className={isDescriptionExpanded ? "description expanded" : "description"}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
