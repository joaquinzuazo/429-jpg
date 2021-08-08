import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import MenuBoot from './MenuBoot'


const Home = () =>{
    return(
        <ParallaxProvider>
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: './images/Artemisa.jpg',
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
                className="your-class"
                layers={[
                    {
                        image: './images/Alquimia.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='chumma'>
                    <h1>Banner Children</h1>
                </div>
            </ParallaxBanner>  
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: './images/Ceremonia.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='chumma'>
                    <h1>Banner Children</h1>
                </div>
            </ParallaxBanner> 
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: './images/Alquimia.jpg',
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='chumma'>
                    <h1>Banner Children</h1>
                </div>
            </ParallaxBanner>  
        </ParallaxProvider>
    )
}

export default Home