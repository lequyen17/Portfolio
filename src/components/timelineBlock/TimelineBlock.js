import React from 'react'
import './timelineblock.css'

function TimelineBlock({ icon, title, duration, uni, text, image }) {
    return (
        <div className={`timeline-block ${image ? 'timeline-block--with-image' : ''}`}>
            <div className='timeline-icon'>
                {icon}
            </div>

            <div className='timeline-header'>
                <h2>{title}</h2>
                <p>{duration}</p>
            </div>

            <div className='timeline-content'>
                {image && (
                    <div className='timeline-content-photo'>
                        <img src={image} alt='' />
                    </div>
                )}
                <div className='timeline-content-text'>
                    <h3>{uni}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TimelineBlock
