import React, { useState } from 'react';

function AddNoteWindow({onSubmit}) {
    const [note, setNote] = useState({Заголовок:['', 'text'], Текст:['', 'text'], Важливість:[0, 'number'], })
    const update=(e)=>{
        const {name, value}=e.target
        setNote({...note, [name]:[value, note[name][1]] })
        
    }
    return (
        <div >
            {Object.keys(note).map(el=>(<div key={el}>
                {el}:<input value={note[el][0]} type={note[el][1]} name={el} onChange={update} />
            </div>))}
            <button className='button submit' onClick={()=>{onSubmit(Object.values(note).map(i=>i[0]))}}>Готово</button>
        </div>
    );
}

export default AddNoteWindow;