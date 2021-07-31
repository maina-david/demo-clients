import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

function Header() 
{
    let user = JSON.parse(localStorage.getItem("user-info"))
    const history = useHistory()
    function logOut () {

        localStorage.clear()
        history.push("/login")
    }
    return(
        <div>
  <Navbar bg="dark" variant="dark" className="mb-5">
    <Container>
    <Navbar.Brand href="#">CodeTest</Navbar.Brand>
    <Nav className="me-auto navbar-wrapper">
        {
            localStorage.getItem('user-info') ? 
            <>
            <Link to="/allClients">All Clients</Link>
            <Link to="/addClient">Add Clients</Link>
            </>
            :
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
        }
        
    </Nav>
            {localStorage.getItem('user-info') ? 
            <Nav>
            <NavDropdown title={user && user.user.name}>
                <NavDropdown.Item onClick={logOut}>
                    Logout
                </NavDropdown.Item>

            </NavDropdown>
        </Nav>
        :null
        
        }

    </Container>
  </Navbar>
        </div>
    )
}

export default Header