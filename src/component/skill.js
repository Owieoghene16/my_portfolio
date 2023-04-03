import React from 'react'
import skillData  from '../data';

const Skills = () => {

  return (
    <>
      <div className='progress-div'>
        <h2>Skills</h2>
        {
          skillData.map(item => (
            <div className="progress-bar" key={item.id}>
              <div className="progress-head">
                <span>{item.name}</span>
              </div>
              <div className="progress-detail">
                <div className='progress-border' style={{width: item.span}} >
                  <span>{item.span}</span>
                </div>
              </div> 
            </div>
          ))
        }
      </div>
    </>
  )
};

export default Skills;
