import React from 'react'
import {
  Button, Nav, Navbar, Form, FormControl,
} from 'react-bootstrap'


const MyNavBar = () => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#mynotes">My TODOs</Nav.Link>
        <Nav.Link href="#history">History</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="What do I have to do?" className="mr-sm-2" />
        <Button variant="outline-success">Search my TODOS</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)
export default MyNavBar
