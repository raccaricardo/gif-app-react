
import React from 'react';

const GifGridItem = ({ id, url, title }) => {
    console.log(title, id, url );
    return (
        <div className="card" >
            
            <img key={id} src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;
