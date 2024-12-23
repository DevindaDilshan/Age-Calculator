import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

function TopNav() {
  return (

    <Navbar expand="lg" className="pt-3 pb-3 p-sm-4 bg-dark " data-bs-theme="dark">
      <Container className='justify-content-center'>
        <Navbar.Brand className=" fs-2" href="#">Age Calculator</Navbar.Brand>
      </Container>
    </Navbar>

  );
}

export default TopNav;