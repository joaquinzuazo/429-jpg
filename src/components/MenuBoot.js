import { Navbar, Container, NavDropdown, Nav, Image }  from 'react-bootstrap'

const MenuBoot = ()=>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Image src="./images/429Logo.png" rounded />   
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav style={{textAlign:'center', color:'white'}}>
                        <div className='navbar-menu'>
                            <div className='navbar-menu-item'>
                                <p>Proyectos</p>
                            </div>
                            <div className='navbar-menu-item'>
                                <p>Sobre nosotros</p>
                            </div>
                            <div className='navbar-menu-item'>
                                <p>Contacto</p>
                            </div>                            
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuBoot