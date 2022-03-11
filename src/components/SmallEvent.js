import React from 'react'
import Date from './Date'
import '../styles/smallEvent.scss'
import SmalEventInfoComponent from '../littleComponents/smallEventInfoComponent'
import YesNoButton from '../littleComponents/YesNoButton'

export default function SmallEvent(props) {
    return (
        <div className='small-event-shadow'>
            {/* COLOR ETIQUETTE */}
            <div className='color-1'/>

            {/* EVENT DETAILS */}
            <div className='small-event-container'>
                <div className='d-flex align-items-center'>
                    <Date
                        month={'FEV'}
                        week={'LUNDI'}
                        day={'26'}
                    />
                    
                    <SmalEventInfoComponent
                        instance={"CD 69: Comité Départamental du Rhône"}
                        title={"Journée d'elections"}
                        time={"09h00-10h30"}
                        type={"Présentiel"}
                    />
                </div>

                <YesNoButton/>
            </div>
        </div>
    )
}
