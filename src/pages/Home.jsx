import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import Navbar from '../component/navbar';
import profile from '../images/me.jpg';
import linkedin from '../images/linkedin.png';
import Leaf from './Leaf.jsx'
import './home.css';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper" id='home'>
      <div className="home">
        <Leaf />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
            <img
              className="profile"
              alt="ok.kindness profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Kindness Okpugie</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I am a Full Stack Developer.',
                    'I love learning about new technologies.',
                    'I love meeting new people.',
                    'I want to expand my knowledge.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
              <div className="links">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
              </div>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
              </Link>
            </div>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home;
