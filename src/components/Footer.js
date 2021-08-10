import { Image }  from 'react-bootstrap'

const Footer = () => {
    return(
        <div className='contact'>
            <div className='contact-img'>
                <Image src={process.env.PUBLIC_URL+"/images/429Logo.png"} rounded /> 
            </div>
            <div className='contact-icon'>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook-f"></i>
            </div>
            <div className='contact-text'>
                ©2021 | 429.JPG.
            </div>
        </div>
    )
}

export default Footer
