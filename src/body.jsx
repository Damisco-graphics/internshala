import React from 'react';
// import ReactDOM from 'react-dom';
// import { NavigationBarItem } from 'typescript';
import 'react-bootstrap'
import {Container,Nav, Navbar, Form,FormControl,Button, DropdownButton, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'  



const group = <FontAwesomeIcon icon={faUserFriends} />

const Image = () => {
    return (
      <article className="article" id="compImage">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsm1wREhRFxDXYStVpdV6U0St8fh6rSqErHQ&usqp=CAU" className='card-pix' alt="background" width="inherit" />
        <span className="header">Computer Engineering
        <p className='msubtitle'>142,000 Computer engineers follow this</p></span>
      </article>
    );
  };


        // <div>
        //  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsm1wREhRFxDXYStVpdV6U0St8fh6rSqErHQ&usqp=CAU' className='card-pix'></img>
        // Engineering Technology
        // </div>

function Body(){
    return (
        <div id='bdy'>
        <Navbar  bg="light" expand="sm && xs && xxs ">
  <Container>
     <Navbar.Brand href="#home">ATG.W🍀RLD</Navbar.Brand>   
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search for your favorite groups in ATGh"
          className="me-2"
          aria-label="Search"
        />        
      </Form>
      <Navbar.Text>
    Create account <a href='#home'>It's free</a>
  </Navbar.Text>    
  </Container>
</Navbar>

        {Image()}
        
        <Nav className='newd' variant='tabs' defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">All Posts(132)</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Article</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2" disabled>Event</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2" disabled>Education</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2" disabled>Job</Nav.Link>
  </Nav.Item>

<Container className='DropContain' >
<DropdownButton  variant="light" title="Write a post">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
<Button variant='primary'>{group} Join Group</Button>
</Container>

</Nav>
</div>

    )
};



export default Body
