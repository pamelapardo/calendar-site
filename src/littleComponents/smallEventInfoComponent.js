import React from 'react'
import Horloge from '../images/horloge.svg'
import Presentiel from '../images/presentiel.svg'
import '../styles/smallEvent.scss'

export default function SmallEventInfoComponent(props) {
    return (
        <div className='small-event-component-container'>
            <div className='ms-3 d-flex flex-column justify-content-around small-event-component-container'>
                <div className='d-flex flex-row flex-wrap'>
                    <h4 className='me-2'>{props.instance}</h4>
                    <p className='event-title'>{props.title}</p>
                </div>

                <div className='d-flex flex-row'>
                    <div className='d-flex flex-row align-items-center mt-1'>
                        <img className='icon-style' src={Horloge} alt='horloge'/>
                        <p className='event-text me-4'>{props.time}</p>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <img className='icon-style' src={Presentiel} alt='presentiel'/>
                        <p className='event-text'>{props.type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
