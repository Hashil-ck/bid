import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile';

function NavBar() {
  return (
    <Navbar  expand="lg" className="bg-blue-950 text-white ">
      <Container  fluid>
        <Navbar.Brand className='text-white border-2 p-1' href="#">BID WINNER</Navbar.Brand>
        <Navbar.Toggle className='text-white' aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="me-auto  ms-auto my-2 my-lg-0"
            style={{ maxHeight: '400px' }}
            navbarScroll
          >
            <Nav.Link className='text-white  font-semibold mx-3' href="#action1">Dashboard</Nav.Link>
            <Nav.Link className='text-white  font-semibold mx-3' href="#action2">Jobs</Nav.Link>
            <Nav.Link className='text-white  font-semibold mx-3' href="#action3">Calendar</Nav.Link>
            <Nav.Link className='text-white  font-semibold mx-3' href="#action4">Cost Catalog</Nav.Link>
            <Nav.Link className='text-white  font-semibold mx-3' href="#action5">Database</Nav.Link>
            <Nav.Link className='text-white  font-semibold mx-3' href="#action6">Tutorials</Nav.Link>
          </Nav>
          <Nav>
          <Nav className='border-2 me-3 p-1 rounded mb-1 cursor-pointer' ><Profile/></Nav>

            <Button variant="outline-light"><i class="fa-solid fa-bell" style={{color:'white'}}></i></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
