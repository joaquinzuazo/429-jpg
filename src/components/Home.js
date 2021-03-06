import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import {
    Link
  } from "react-router-dom";
import MenuBoot from './MenuBoot'
import Footer from './Footer'


const Home = () =>{
    return(
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        image: '/images/Ceremonia_1.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='header'>
                    <MenuBoot />
                </div>
            </ParallaxBanner>
            <ParallaxBanner
                layers={[
                    {
                        image: '/images/Artemisa_3.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='text'>
                    <Link to='/projects/Artemisa' >
                        <h2> - PORTFOLIO -</h2>
                        <h3>Artemisa</h3>
                    </Link>
                </div>
            </ParallaxBanner>  
            {/*<ParallaxBanner
                layers={[
                    {
                        image: '/images/Bruane_2.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='text'>
                    <Link to='/projects/Bruane' >
                        <h2>- PORTFOLIO -</h2>
                        <h3>Bruane</h3>
                    </Link>
                </div>
            </ParallaxBanner> */}
            <div className='home-text'>
                <div className='home-text-title'> 
                    429.JPG |
                </div>
                <div className='home-text-text'>
                429 es un proyecto que nace de la pasi??n por la fotograf??a.
                Nos especializamos en fotograf??a de producto, ayud??ndo para que tu emprendimiento se destaque entre los dem??s.<br />
                Nuestro servicio est?? orientado a todo tipo de emprendimientos.
                En nuestro porfolio conviven grandes y peque??os negocios de gastronom??a hasta negocios de productos esot??ricos.<br />
                Cada of??cio presenta un nuevo e interesante desaf??o a superar.
                </div>
            </div>
            <ParallaxBanner
                layers={[
                    {
                        image: '/images/Ceremonia_3.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='text'>
                    <Link to='/projects/Ceremonia' >
                        <h2>- PORTFOLIO -</h2>
                        <h3>Ceremonia del cacao</h3>
                    </Link>
                </div>
            </ParallaxBanner>  
            <Footer />
        </ParallaxProvider>
    )
}

export default Home