import React from 'react-dom'
import './styles/app.scss'
import Sidebar from './Sidebar';
import SmallEvent from './components/SmallEvent';
import Calendar from './components/Calendar';
import LargeEvent from './components/LargeEvent';
import DocBox from './components/DocBox';


function App() {
  return (
    <div className="d-flex">
        <Sidebar/>
          <div className='w-100'>
            <h1>Calendrier</h1>
            <div className='w-100'>
              <div className='display'>
                <div className='space-adjust display2'>
                  <Calendar/>
                  <div className='d-flex justify-content-between align-items-center mt-3'>
                    <h4 className='event-prox-text'>Évenements à venir</h4>
                    <div className='event-prox-item'></div>
                  </div>
                  <SmallEvent/>
                  <SmallEvent/>
                  <SmallEvent/>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='event-prox-text'>Évenements passés</h4>
                    <div className='event-prox-item'></div>
                  </div>
                  <SmallEvent/>
                  <SmallEvent/>
                </div>
                <div className='space-adjust2'>
                  <LargeEvent/>
                  <DocBox/>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default App;
