import { Navbar, Container, Nav, Image }  from 'react-bootstrap'

const MenuBoot = ()=>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Image src="./images/429Logo.png" rounded />   
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav style={{textAlign:'center', color:'white'}}>
                        <div className='navbar-menu'>
                            <a href='/' className='navbar-menu-item'>
                                <i class="fas fa-camera-retro"></i><p>Proyectos</p>
                            </a>
                            <a href='/' className='navbar-menu-item'>
                                <i class="far fa-address-card"></i><p>Sobre nosotros</p>
                            </a>
                            <a href='/' className='navbar-menu-item'>
                                <i class="fas fa-id-card-alt"></i><p>Contacto</p>
                            </a>                            
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuBoot