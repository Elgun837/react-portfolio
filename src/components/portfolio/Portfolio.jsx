import React from 'react'
import './portfolio.css'
import IMAGE1 from '../../assets/portfolio1.jpg'
import IMAGE2 from '../../assets/portfolio2.jpg'
import IMAGE3 from '../../assets/portfolio3.jpg'
import IMAGE4 from '../../assets/portfolio4.jpg'
import IMAGE5 from '../../assets/portfolio5.png'
import IMAGE6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id:1,
        Image:IMAGE1,
        title:'This is portfolio item title',
        github:'https://github.com/Elgun837',
        demo:'https://github.com/Elgun837'
    },
    {
        id:2,
        Image:IMAGE2,
        title:'This is portfolio item title',
        github:'https://github.com/Elgun837',
        demo:'https://github.com/Elgun837'
    },
    {
        id:3,
        Image:IMAGE3,
        title:'This is portfolio item title',
        gthub:'https://github.com/Elgun837',
        demo:'https://github.com/Elgun837'
    },
    {
        id:4,
        Image:IMAGE4,
        title:'This is portfolio item title',
        github:'https://github.com/Elgun837',
        demo:'https://github.com/Elgun837'
    },
    {
        id:5,
        Image:IMAGE5,
        title:'This is portfolio item title',
        github:'https://github.com/Elgun837',
        demo:'https://github.com/Elgun837'
    },
    {
        id:6,
        Image:IMAGE6,
        title:'This is portfolio item title',
        github:'https://github.com/Elgun837',
        demo:'https://github.com/Elgun837'
    }

]



const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id, Image, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                            <img src={Image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <a href={github} className='btn btn-primary'>GitHub</a>
                            <a href={demo} className='btn'>Live Demo</a>
                        </article>
                    )
                })
            }


        </div>
    </section>
  )
}

export default Portfolio