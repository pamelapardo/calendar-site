import React from 'react'
import './styles/InfoBox.scss'

export default function InfoBox(props) {
    return (
        <div>
            <div class="info-container">
                <div className='row1'>
                    <h5>{props.name}</h5>
                </div>
                <div className='w-100 row2'>
                    <div className='input-style'>
                        <label for='title'>Titre <span>(ce titre apparaîtra sur la photo du carousel)</span></label>
                        <input className='input-space' type='text' id='title' name='title' placeholder="Titre"/>
                    </div>
                    <div className='info-content w-100'>
                        <div className='input-style  width-1'>
                            <label for='link'>Lien d'information</label>
                            <input type='text' id='link' name='link' placeholder="Lien de l'information"/>
                        </div>
                        <div className='input-style width-1'>
                            <label for='image'>Lien de l'image <span>(ou télécharger une image)</span></label>
                            <input type='text' id='image' name='image' placeholder="Lien de l'image"/>
                            {/* <input type='file' id='custom-file'><img src=' ' alt='upload-icon'/></input> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
