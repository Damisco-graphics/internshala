import React from 'react';
// import ReactDOM from 'react-dom';

// import { Container, Card, Col, Button } from 'react-bootstrap';
import './App.css';
import Crd from "./card.jsx";
import Details from './CardDetails';
import  'bootstrap';
import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Body from './body.jsx';
import './card.css'
import afterlogin from './afterlogin';

import './body.css';
import { useState } from 'react';
import Popup from './pp.jsx';
import Signin from './signin.jsx'
import footer from './footer.jsx';







function Crecard(Details) {
  return (
    <Crd
      key={Details.id}
      img={Details.src}
      title={Details.title}
      subtitle={Details.subtitle}
      emoji={Details.emoji}
      category={Details.category}
      button={Details.button}
      humanImg={Details.humanImg}
      name={Details.name}
      date={Details.date}
      location={Details.location}
    />
  )
}


 function App() {
 
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  

  
  return (
    <div className="App">
      <div >
        {Body()}           
      </div>

      

      <header className="App-header">

        <div className='holder' >          
          <div className="CardsHolder">
          {Details.map(Crecard)}
          </div>      
          {afterlogin()}
          {Signin()}
        </div>

      
<button onClick={togglePopup}>Click to open popup</button>
         {isOpen && <Popup
         handleClose={togglePopup}
content={<div>
  <h2>Welcome to my blog</h2>
  <p>This is the sample content for my popup.
    <code> Contact </code> me at
    @damilolaadebayo@gmail.com
    +2348134274863
  </p>
</div>}
/>
         }
         
      </header>
      {footer()}
    </div>

  );
}

export default App;
