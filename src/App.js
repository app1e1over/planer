import logo from './logo.svg';
import './main.css';
import Wrapper from './components/Wrapper/Wrapper';
import AddButton from './components/AddButton/AddButton';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import AddNoteWindow from './components/Modal/AddNoteWindow/AddNoteWindow';

function App() {
  const [modalElement, setModalElement]=useState()
  const [notes, setNotes]=useState([])
  return (
    <div className="App">
      <Wrapper items={notes} setModal={setModalElement}/>
      <AddButton onClick={()=>setModalElement(<AddNoteWindow onSubmit={(newNote)=>{setNotes([...notes, newNote]); setModalElement(false)}}/>)}/>
      <Modal element={modalElement} isActive={modalElement} setIsActive={setModalElement}/>
      </div>
  );
}

export default App;
