import React from 'react';
import './experience.css'

const Experience = () => {
  return (
    <>
      <section className='section-experience' id='experience'>
        <div className="experience-head">
          <h2>Experience</h2>
        </div>
        <div className="underline"></div>
        <div className='section-container'>
          <div className='box-cont'>
            <div className='top'>
              <h4>Chatbox</h4>
            </div>
            <div className='bottom'>
              <div>
                <span>A web app that allows user to chat, connect and meet people anywhere around the world.</span>
              </div>
              <div className='bullet'>
                <ul>
                  <li>Created And Developed by Me.</li>
                  <li>Deployed And Ready To use</li>
                </ul>
              </div>
              <div className='experience-link'>
                <button>React</button>
                <button>Css</button>
                <button>React</button>
                <button>Firebase</button>
              </div>
              <div className='experience-demo'>
                <button>Live Demo</button>
              </div>
            </div>
          </div>
          <div className='box-cont'>
            <div className='topblue'>
              <h4>BookStack</h4>
            </div>
            <div className='bottom'>
              <div>
                <span>A web app that allows user to create, rent and borrow books to people around the world.</span>
              </div>
              <div className='bullet'>
                <ul>
                  <li>Created And Developed by Me.</li>
                  <li>Deployed And Ready To use</li>
                </ul>
              </div>
              <div className='experience-link'>
                <button>React</button>
                <button>Css</button>
                <button>Node.js</button>
                <button>Postgres</button>
              </div>
              <div className='experience-demo'>
                <button>Live Demo</button>
              </div>
            </div>
          </div>
          <div className='box-cont'>
            <div className='top'>
              <h4>My_Portfolio</h4>
            </div>
            <div className='bottom'>
              <div>
                <span>A personal website about me built with React.js.</span>
              </div>
              <div className='bullet'>
                <ul>
                  <li>Created And Developed by Me.</li>
                  <li>Deployed And Ready To use</li>
                </ul>
              </div>
              <div className='experience-link'>
                <button>React</button>
                <button>Scss</button>
                <button>Nodejs</button>
                <button>Firebase</button>
              </div>
              <div className='experience-demo'>
                <button>Live Demo</button>
              </div>
            </div>
          </div>
          <div className='box-cont'>
            <div className='topblue'>
              <h4>QuizApp</h4>
            </div>
            <div className='bottom'>
              <div>
                <span>A web app that allows user to answer question and get rewards.</span>
              </div>
              <div className='bullet'>
                <ul>
                  <li>Created And Developed by Me.</li>
                  <li>Deployed And Ready To use</li>
                </ul>
              </div>
              <div className='experience-link'>
                <button>Html</button>
                <button>Css</button>
                <button>React</button>
                <button>Firebase</button>
              </div>
              <div className='experience-demo'>
                <button>Live Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Experience;
