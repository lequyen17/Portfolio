import React from 'react'

//Custom components
import { Footer, Works,  Hero, Resume, SocialMedias } from './containers'
import { Contact, Navbar  } from './components'

import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navbar />
                <Hero />
            </div>
            <SocialMedias />
            <Resume />
            <Works />
            <Contact />
            <Footer />

        </div>
    )
}

export default App
