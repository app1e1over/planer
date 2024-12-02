import React from 'react';
import Note from '../Note/Note';

function Wrapper({items, setModal}) {
    return (
        <div>
            {items.map(i=>(<Note data={i} setModal={setModal}/>))}
        </div>
    );
}

export default Wrapper;