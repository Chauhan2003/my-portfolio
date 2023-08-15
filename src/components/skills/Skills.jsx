import React from 'react'
import "./Skills.css"
import Frontend from './FullStack'
import Backend from './Software'

const Skill = () => {
  return (
    <section className='skills section' id='skills'>

      <h2 className='section__title'>
        Skills
      </h2>
        <span className='section__subtitle'>My technical Level</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    
    </section>
  )
}

export default Skill
