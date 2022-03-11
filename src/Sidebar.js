import React, { Fragment } from 'react';
import ProfilePic from './images/icon-profil.png';
import HomeM from './images/home-i.png';
import CalenM from './images/calen-i.png';
import NdfM from './images/NDF-i.png';
import DocM from './images/doc-i.png';
import LogoutM from './images/logout-i.png'
import './styles/Sidebar.scss'

export default function Sidebar(props) {
    return (
        <Fragment>
            <div>
                <label for='burgerConteneur' className='burgerConteneur'>☰</label>
                <input type='checkbox' id ='burgerConteneur' className='burgerConteneur'></input>

                <div className='sidebar-container'> 
                    <label for='burgerConteneur' className='burgerConteneur space-right'>✕</label>
                    <input type='checkbox' id ='burgerConteneur' className='burgerConteneur'></input>
                    <div className=''>
                        <img className='profilepic' src={ProfilePic} alt='profile'/>
                    </div>

                    <div className='btns-container'>
                        <div className='d-flex flex-column'>

                        
                            <div className='btn-sidebar'>
                                {/* <Link to='/'>  */}
                                    <img className='img-2 hid' src={HomeM} alt='home icon'/>

                                    <div className='hidden-btn'>
                                        <img className='img-3' alt='' src={HomeM}/>
                                        <p className='text-sidebar'>Accueil</p>
                                    </div>
                                {/* </Link> */}
                            </div>

                            <div className='btn-sidebar'>
                                {/* <Link to='/Calendrier'> */}
                                    <img className='img-2 hid' src={CalenM} alt='evenements icon'/>

                                    <div className='hidden-btn'>
                                        <img className='img-3' alt='' src={CalenM}/>
                                        <p className='text-sidebar'>Événements</p>
                                    </div>
                                {/* </Link> */}
                            </div>

                            <div className='btn-sidebar'>
                                {/* <Link to='/Notes_de_frais'> */}
                                    <img className='img-2 hid' src={NdfM} alt='notes de frais icon'/>

                                        <div className='hidden-btn'>
                                            <img className='img-3' alt='' src={NdfM}/>
                                            <p className='text-sidebar'>NDF</p>
                                        </div>
                                {/* </Link> */}
                            </div>

                            <div className='btn-sidebar'>
                                {/* <Link to='/'> */}
                                    <img className='img-2 hid' src={DocM} alt='documents icon'/>

                                        <div className='hidden-btn'>
                                            <img className='img-3' alt='' src={DocM}/>
                                            <p className='text-sidebar'>Documents</p>
                                        </div>
                                {/* </Link> */}
                            </div> 
                        </div>

                    </div>


                    <a className='btn-sidebar last' herf=''>
                        <img className='img-2' src={LogoutM} alt='logout icon'/>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
