import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () =>{
    
    const user = { name: "Luis"}
    
    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
            <Container>
                <Navbar.Brand href="#home">{user ? `Hola ${user.name}` : "Bienvenid@s"}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">              
                    <Nav className="m-auto">
                        <Nav.Link href="#deets">Mi equipo</Nav.Link>
                        {
                            user?<button className="btn btn-primary">Cerrar Sesión</button>
                            :
                            <button className="btn btn-primary">Iniciar Sesión</button>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)
    }
export default NavBar