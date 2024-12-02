import React from 'react';
import './style.css'

function AddButton({onClick}) {
    return (
        <div className='button add' onClick={onClick}>
            Додати
        </div>
    );
}

export default AddButton;