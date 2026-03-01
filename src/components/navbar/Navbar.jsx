import React, {useState} from 'react'
import './navbar.css'

//Icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'


const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#works'>Portfolio</a></p>
    <p><a href='https://drive.google.com/file/d/1W9MqMa0Bq040LlabNihdAYG3hknmqh41/view?usp=sharing' target="_blank">My CV</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='portfolio-navbar'>
            <div className='portfolio-navbar-links'>
                
                <div className='portfolio-navbar-links-container'>
                    <Menu />
                </div>
                <div className='portfolio-navbar-ctabtn'>
                    <a href='#contact'>Contact</a>
                </div>
                <div className='portfolio-navbar-menu'>
                    {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='portfolio-navbar-menu-container scale-up-tr'>
                            <div className='portfolio-navbar-menu-container-links'>
                                <Menu />
                                <div className='portfolio-navbar-menu-container-links-ctabtn'>
                                    <a className='portfolio-navbar-menu-ctabtn' href='#contact'>Contact</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
