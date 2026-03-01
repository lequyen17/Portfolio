import React from 'react'
import './workexperience.css'

//Material Icons
import WorkIcon from '@mui/icons-material/Work';
import { TimelineBlock } from '..';

function WorkExperience() {
    return (
        <div className='workexperience'>
            <div className='workexperience-heading'>
                <h2>Work Experience</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='FPTU Book Club' duration='2025 - Present' uni='Head of Public Relations Department' text="Led the media team in planning and executing communication campaigns to promote club activities and events. Developed content strategies, managed social media channels, and coordinated with other departments to ensure consistent brand messaging." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Skolareach' duration='2023 - 2024' uni='Logic & Mathematics Mentor' text="Provided structured explanations of mathematical and logical reasoning concepts to students. Designed clear problem-solving approaches and guided learners in developing analytical thinking skills." />

            </div>
        </div>
    )
}

export default WorkExperience
