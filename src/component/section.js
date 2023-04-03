import React from 'react';

const Section = (props) => {
  return (
    <section className='section-title' id='about'>
        <h1 className="section-title-head">{props.title}</h1>
        <div className="underline"></div>
      {props.children}
    </section>
  )
};

export default Section;
