import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategory } ) => {

    const [inputvalue, setinputvalue] = useState("");

    const handleInputChange = (e) => {
        setinputvalue(e.target.value); 
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputvalue.trim().length > 2 ) {
            setCategory(c=>[ inputvalue, ...c ]);
            setinputvalue('');
        }
    }
    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    value={ inputvalue } 
                    onChange={ handleInputChange } 
                />
                <button onClick={ handleSubmit }>Agregar</button>        
            </form>
        </>
    )
}
AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
export default AddCategory;
