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
                429 es un proyecto que nace de la pasión por la fotografía.
                Nos especializamos en fotografía de producto, ayudándo para que tu emprendimiento se destaque entre los demás.<br />
                Nuestro servicio está orientado a todo tipo de emprendimientos.
                En nuestro porfolio conviven grandes y pequeños negocios de gastronomía hasta negocios de productos esotéricos.<br />
                Cada ofício presenta un nuevo e interesante desafío a superar.
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