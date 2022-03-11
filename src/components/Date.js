import React from 'react'
import '../styles/Date.scss'
import Clip from '../images/clip.png'
import Fold from '../images/fold.png'

export default function Date(props) {
    return (
        <div className='cal-icon-container'>
            <div className='month-container'>
                <div className='calendar-clip'>
                    <img className='clip-style' src={Clip} alt='clip'/>
                    <img className='clip-style' src={Clip} alt='clip'/>
                </div>
                <p className='month-style'>{props.month}</p>
                <p className='week-style'>{props.week}</p>
            </div>
            <div className='day-container'>
                <p className='day-style'>{props.day}</p>
                <div className='fold-container'>
                    <img className='fold-style' src={Fold} alt='fold'/>
                </div>
            </div>
        </div>

    )
}
