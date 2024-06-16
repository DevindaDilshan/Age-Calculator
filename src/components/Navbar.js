import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
  return (
    
      <Navbar className="p-4 bg-dark justify-content-center" data-bs-theme="dark">
          <Navbar.Brand className=" fs-2" href="#">Age Calculator</Navbar.Brand>
      </Navbar>
    
  );
}

export default TopNav;