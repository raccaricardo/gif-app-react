import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {

    const [categories, setcategories] = useState([ "" ]);
    
    // const handleAdd = () => {
    //     setcategories([...categories, "Racing"]);
    // }
    return (
        <>
            <h2>Gift Expert App</h2>   
            <hr />
            <AddCategory setCategory= {setcategories} />
            <ol>
                {
                    categories.map(cat => (
                        <GifGrid key={ cat } category={ cat } />
                    ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
