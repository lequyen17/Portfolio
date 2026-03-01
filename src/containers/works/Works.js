import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images



import Project from '../../assets/projects/wrs.jpg'



function Works() {
    return (
        <div className='works section-margin' id='works'>
        <h1 className='gradient-text'>Portfolio</h1>
        <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={Project} title="Warehouse Rental System" 
                subTitle="Full-stack developer" 
                text="A warehouse rental management system supporting warehouse, storage unit, renter, and rental request management." 
                codeLink="https://github.com/lequyen17/WarehouseRentalSystem" />
            </div>
        </div>
    )
}

export default Works
