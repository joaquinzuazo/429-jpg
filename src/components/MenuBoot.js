import { Navbar, Container, Nav, Image }  from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";

const MenuBoot = ()=>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Image id='img-w'  src={process.env.PUBLIC_URL + "/images/429LogoB.png"} rounded />
                <Image id='img-b' src={process.env.PUBLIC_URL + "/images/429Logo.png"} rounded />   
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav style={{textAlign:'center', color:'white'}}>
                        <div className='navbar-menu'>
                            <Link to='/' className='navbar-menu-item'>
                                <i class="fas fa-home"></i><p>Home</p>
                            </Link>
                            <Link to='/projects/Alquimia' className='navbar-menu-item'>
                                <i class="fas fa-camera-retro"></i><p>Portfolio</p>
                            </Link>
                            <Link to='/' className='navbar-menu-item'>
                                <i class="far fa-address-card"></i><p>Sobre nosotros</p>
                            </Link>                         
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuBoot