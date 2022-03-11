import React from 'react'
import '../styles/DocBox.scss'
import PP from '../images/pp-icon.png'

export default function DocBox(props) {
    return (
        <div className='doc-box-container'>
            <h4>Documents attachés</h4>
            <div className='file-item'>
                <img src={PP} alt='pptx'/>
                <p className='text-2 ms-2'>First Project</p>
            </div>
        </div>
    )
}
