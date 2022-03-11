import React from 'react'
import '../styles/YesNoButton.scss'

export default function YesNoButton(props) {
    return (
        <div className='d-flex flex-column align-items-center'>
            <p className='participation-text'>Participation</p>
            <div className='yn-button-container'>
                <div className='button-left'>
                    <p className='yn-text'>Non</p>
                </div>
                <div className='button-right'>
                    <p className='yn-text'>Oui</p>
                </div>
            </div>
        </div>
    )
}
