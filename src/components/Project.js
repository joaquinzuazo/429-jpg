import React, { useState, useEffect } from 'react';
import {
  useParams,
  Redirect
} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import MenuBoot from './MenuBoot'
import Footer from './Footer'
import dataProjects from '../data/data';



const Project = ({imgFront, images, text}) =>{


    const [project, setProject] = useState({})
    const { paramsProject } = useParams()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    useEffect(() => {
        const aux = dataProjects.find((proj)=> proj.name===paramsProject)
        setProject(aux)
    }, [paramsProject, project])
    
    if(project === undefined){
        return <Redirect to='/*' />
    } 

    return(
        <>
        <div className='project'>
            <div className='header-project'>
                <MenuBoot />
            </div>

            <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {project.images && project.images.map((image)=>   
                <Carousel.Item key={image}>
                    <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{project.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                )}
            </Carousel>
            </div>


            {/*<img src={project.image} alt='img-project' className='project-img' />*/}
            <div className='project-text'>
                <div className='project-text-title'>
                    {project.name}
                </div>
                <div className='project-text-text'>
                    {project.text}
                </div>               
            </div>
            <Footer />
        </div>
        {/*<ParallaxProvider>
            
            <ParallaxBanner
                layers={[
                    {
                        image: project.image,
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
            <div className='project-text'>
                <div className='project-text-title'>
                    {project.name}
                </div>
                <div className='project-text-text'>
                    {project.text}
                </div>               
            </div>
            <Footer />
            </ParallaxProvider>*/}
    </>
    )
}

export default Project