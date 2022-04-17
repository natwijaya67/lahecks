import './App.css';
import Products from './components/Products'
import React, {useState} from 'react'
import Popup from './components/Popup'

function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="App">
      <input
      type="button"
      value="Add your item here"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <b>Adding new product</b>
        <p>Please fill in this form to add your product</p>
        <button>Submit</button>
      </>}
      handleClose={togglePopup}
    />}
      <Products/>
    </div>
  );
}

export default App;
