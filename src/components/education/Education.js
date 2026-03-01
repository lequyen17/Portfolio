import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


import educationPhoto from '../../assets/fpt.jpg'

function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock
                    icon={<SchoolIcon fontSize='large' />}
                    title='University'
                    duration='Oct 2023 - Present'
                    uni='Đại Học FPT Hà Nội'
                    image={educationPhoto}
                text={
  <>
    Software Engineering <br />
    Awarded a 100% Full-Tuition Scholarship (4-year program) <br />
    Excellent Student – Summer 2025 <br />
    GPA: 8.6/10
  </>
}
  />

                
                
            </div>
        </div>
    )
}

export default Education
