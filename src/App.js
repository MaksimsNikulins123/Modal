import { useState} from 'react';
import './index.scss';
import Modal from './components/Modal/Modal';

function App() {
console.log('App creatad')
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Open modal</button>
        <Modal open={open} setOpen={setOpen} >
           <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="explosion on mind"/>
        </Modal>  
    </div>
  );
}

export default App;
