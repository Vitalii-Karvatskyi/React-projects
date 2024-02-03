import React from 'react';
import './index.scss';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  let [open , setOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={()=> setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
