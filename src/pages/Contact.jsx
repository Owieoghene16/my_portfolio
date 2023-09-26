import React from 'react';
import Twitter from '../images/twitter.png';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import useContactMe from '../utils/useContactMe';
import useOpenMe from '../utils/useOpenMe';
import './contact.css';

const Contact = () => {
  const {
    nameText,
    emailText,
    messageText,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
  } = useContactMe();
  const {
    openInNewTab,
  } = useOpenMe();

  return (
    <>
      <section className='section-contact' id='contact'>
        <div className='contact-head'>
          <h2>Contact</h2>
        </div>
        <div className='underline'></div>
        <div className='contact-info'>
          <div className='contactForm'>
            <div className='row2'>
              <div className='col-50'>
                <input 
                  type='text' 
                  placeholder='Name' 
                  name='name'
                  value={nameText}
                  onChange={handleNameChange}
                />
              </div>
              <div className='col-50'>
                <input 
                  type='text' 
                  placeholder='Email' 
                  name='email'
                  value={emailText}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className='row2'>
              <div className='col100'>
                <textarea 
                  placeholder='Message'
                  name='message'
                  value={messageText}
                  onChange={handleMessageChange}
                ></textarea>
              </div>
            </div>
            <div className='row2'>
              <div className='col100'>
                <button onClick={()=>openInNewTab('mailto:kindnessokpugie1@gmail.com')}>Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-pic'>
          <div className='pic-cont'>
            <div className='contact-images' 
              style={{backgroundImage: `url(${Linkedin})`}} 
              onClick={()=>openInNewTab('https://www.linkedin.com/in/kindness-okpugie-754b20232/')}
            ></div>
            <div 
              className='contact-images' 
              style={{backgroundImage: `url(${Github})`}} 
              onClick={()=>openInNewTab('https://github.com/Owieoghene16')}
            ></div>
            <div 
              className='contact-images' 
              style={{backgroundImage: `url(${Twitter})`}} 
              onClick={()=>openInNewTab('https://twitter.com/owieoghene')}
            ></div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Contact;
