import React from 'react'
import Date from './Date'
import '../styles/LargeEvent.scss'
import Horloge from '../images/horloge.svg'
import Presentiel from '../images/presentiel.svg'
import User from '../images/user.svg'
import Status1 from '../images/status1.svg'
import Telecharger1 from '../images/telecharger1.svg'
import Euro from '../images/euro.svg'
import ArrowDown from '../images/arrow.svg'
import Liste from '../images/liste.svg'

export default function LargeEvent(props) {
    return (
        <div className='large-event-container'>
            <div>
                <div className='d-flex divider'>
                    <div>
                        <Date
                            month={'FEV'}
                            week={'LUNDI'}
                            day={'26'}
                            />
                    </div>
                    <div className='ms-3'>
                        <h4>CD 69: Comité Départamental du Rhône</h4>
                        <p className='event-title'>Journée d'élections</p>
                        <div className='d-flex flex-row align-items-center mt-1'>
                            <img className='icon-style' src={Horloge} alt='horloge'/>
                            <p className='event-text me-4'>09h00-10h30</p>
                        </div>
                    </div>
                </div>



                <div>
                    {/* ------------------- LIEU ----------------- */}
                    <div className='detail-container'>
                        <div className='detail-items'>
                            <img className='icon-style' src={Presentiel} alt='type'/>
                            <h5 className='space-text1'>Présentiel</h5>
                        </div>
                        <div className='detail-border'>
                            <h5 className='space-text1'>Localisation</h5>
                            <p className='text-detail space-text1'>6 Rue Charles Tardy, 69005, Lyon</p>
                         </div>
                    </div>

                    {/* ------------------- PARTICIPATION ----------------- */}
                    <div className='detail-container'>
                        <div className='detail-items'>
                            <img className='icon-style' src={User} alt='type'/>
                            <h5 className='space-text1'>Participation</h5>
                        </div>
                        <div className='detail-border'>
                            <div className='d-flex'>
                                <img className='icon-style space-icon' src={Status1} alt='type'/>
                                <h5 className='space-text2'>Je participe</h5>
                            </div>
                        </div>
                        <div className='detail-border'>
                            <div className='d-flex'>
                                <img className='icon-style space-icon' src={Telecharger1} alt='type'/>
                                <a className='text-detail'>Acceder aux documents</a>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- NOTE DE FRAIS ----------------- */}
                    <div className='detail-container'>
                        <div className='detail-items'>
                            <img className='icon-style' src={Euro} alt='type'/>
                            <h5 className='space-text1'>Notes de frais</h5>
                        </div>
                        <div className='detail-border'>
                            <h5 className='space-text1'>Montant</h5>
                            <p className='text-detail space-text1'>0,00€</p>
                        </div>
                        <div className='detail-border'>
                            <div className='d-flex'>
                                <img className='icon-style space-icon' src={Status1} alt='type'/>
                                <h5 className='space-text2'>Non généré</h5>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- LISTE D'INVITES ----------------- */}
                    <div className='detail-container'>
                        <input type='checkbox' id='inviteShow'/>
                        <label for='inviteShow' className='detail-items'>
                            <img className='icon-style' src={Liste} alt='type'/>
                            <h5 className='space-text1 me-2'>Liste d'invités</h5>
                            <img id='arrow-down' className='icon-style arrow-down' src={ArrowDown} alt='type'/>
                        </label>
                        <div className='text-detail detail-no-border liste-invites'>
                            <p className='m-0'>Robert ARMANI, Maria HERRERA, Nataly KENZO, Pierre CACHAREL, Jordan CARTIER, Yves SAINT LAURENT, Estelle GAUTIER, Hamal GUCCI, Jean-Pierre BALENCIAGA, Milan GUERLAIN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
