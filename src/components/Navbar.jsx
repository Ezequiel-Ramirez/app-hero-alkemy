import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    const { user, login, logout } = useContext(UserContext);

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
            <Container>
                <Navbar.Brand href="#home">{user ? `Hola ${user.name}` : "Bienvenid@s"}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
                    <Nav className="m-auto">
                        {user && <Nav.Link href="#deets" className="me-5">Mi equipo</Nav.Link>}

                        {
                            user ? <button className="btn btn-primary " onClick={logout}>Cerrar Sesión</button>
                                :
                                <button className="btn btn-primary " onClick={login}>Iniciar Sesión</button>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar