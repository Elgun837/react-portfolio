import React from 'react'
import './about.css'
import Me_1 from '../../assets/Me-2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me_1} alt="About image" />
          </div>
        </div>
        <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>100+ Worlwide</small>
          </article>
          <article className='about__card'>
            <VscFolder className="about__icon" />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore ex iure ad assumenda, vero, vel explicabo laudantium quod magni consequuntur officia aliquam nobis officiis!
        </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk </a>
      </div>

      </div>
      
      
    </section>
  )
}

export default About