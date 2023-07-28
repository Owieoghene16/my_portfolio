import React from 'react';
import ronald from '../images/ronalds.png';
import useOpenMe from '../utils/useOpenMe';
import './company.css'

const Company = () => {
  const {
    openInNewTab,
  } = useOpenMe();

  return (
    <>
      <section className='section-experience' id='company'>
        <div className="experience-head">
          <h2>Company</h2>
        </div>
        <div className="underline"></div>
        <div className='section-container'>
          <div className='company-section'>
            <div class='company-left'>
              <img alt='project' src={ronald} />
            </div>
            <div class='company-right'>
              <h2>Ronalds Partners</h2>
              <div className='bullet-number'>
                <ul>
                  <li>Full Stack Developer.</li>
                  <li>MERN.</li>
                </ul>
              </div>
              <span>
              A company that has sustained a good reputation in dispensing quality and professional immigration consulting and overseas education 
              placement services to clients and prospective students in Nigeria and across the world.
              </span>
              <div className='company-link'>
                <button>React</button>
                <button>Express</button>
                <button>Mongodb</button>
                <button>Nodejs</button>
              </div>
              <div className='company-live'>
                <button 
                  onClick={()=>openInNewTab('http://ronald-partners.net/')}>
                  See Project
                </button>
              </div>
            </div>
          </div>
        </div>
        { /* <div className='section-container'>
          <div className='company-section'>
            <div class='company-left'>
              <img alt='project' src={ronald} />
            </div>
            <div class='company-right'>
              <h2>SuruFoods</h2>
              <div className='bullet-number'>
                <ul>
                  <li>Backend Developer.</li>
                  <li>2023</li>
                </ul>
              </div>
              <span>
              A company that is dedicated to provide and connect people with food vendor and farmer .
              </span>
              <div className='company-link'>
                <button>Nodejs</button>
                <button>Express</button>
                <button>Mongodb</button>
                <button>React Native</button>
              </div>
              <div className='company-live'>
                <button>See Project</button>
              </div>
            </div>
          </div>
        </div> */ }
      </section>
    </>
  )
};

export default Company;
