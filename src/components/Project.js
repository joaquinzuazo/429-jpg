import React, { useState, useEffect } from 'react';
import {
  useParams,
  Redirect
} from "react-router-dom";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import MenuBoot from './MenuBoot'
import Footer from './Footer'
import dataProjects from '../data/data';


const Project = ({imgFront, images, text}) =>{

    const [project, setProject] = useState({})
    const { paramsProject } = useParams()

    useEffect(() => {
        const aux = dataProjects.find((proj)=> proj.name===paramsProject)
        setProject(aux)
    }, [paramsProject])
    
    if(project === undefined){
        return <Redirect to='/*' />
    } 

    return(
        <ParallaxProvider>
            
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
        </ParallaxProvider>
    )
}

export default Project