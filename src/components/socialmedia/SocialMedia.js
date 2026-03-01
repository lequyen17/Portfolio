import React from 'react'
import './socialmedia.css'

//Material Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='socialmedia-icon' ><a href='https://github.com/lequyen17' target="_blank" ><GitHubIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.facebook.com/ha.le.quyen.301417/' target="_blank" ><FacebookIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.instagram.com/le_queenn17/' target="_blank" ><InstagramIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
        </div>
    )
}

export default SocialMedia
