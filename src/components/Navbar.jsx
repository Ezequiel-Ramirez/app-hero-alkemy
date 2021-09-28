import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const { user, login, logout } = useContext(UserContext);


    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
            <Container>
               <Link to="/" > <Navbar.Brand >{user ? `Hola ${user.name}` : "Bienvenid@s"}
                </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
                    <Nav className="m-auto">
                        {user &&<Link to="/team"  className="me-5">Mi equipo</Link>}

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