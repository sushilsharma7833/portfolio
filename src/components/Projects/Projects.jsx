import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import calculator from '../images/calculator.png';
import github from '../images/github.png';
import quiz from '../images/quiz.jpeg';
import link from '../images/link.jpeg';
import todoapp from '../images/todoapp.png';
import length from '../images/length.png';
import game from '../images/game.jpeg';


// Web projects
const webItem = [
  {
    link: 'https://coruscating-griffin-be76fe.netlify.app',
    title: 'QUIZ APP',
    techStack: 'HTML5,CSS3,JAVASCRIPT,NODEJS,EXPRESSJS',
    desc: 'Profilee is an open source profile link bio page builder',
    image: quiz,
    color: '#0FFFFF',
    githubLink: 'https://github.com/sushilsharma7833/Quizapp.git'
  },
  {
    link: 'https://startling-cat-e3fd68.netlify.app',
    title: 'Static LinkedIn Page',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: HTML5,CSS3,JAVASCRIPT',
    image: link,
    color: '#E5E483',
    githubLink: 'https://github.com/sushilsharma7833/static-linkedin-page.git'
  },
  {
    link: 'https://steady-concha-9ada64.netlify.app',
    title: 'Calculator',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: HTML5,CSS3,JAVASCRIPT',
    image: calculator,
    color: '#E5E483',
    githubLink: 'https://github.com/sushilsharma7833/Oasis_Infobyte_level-2_Task-1.git'
  },
  {
    link: 'melodic-palmier-71958e.netlify.app',
    title: 'To-Do app',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: HTML5,CSS3,JAVASCRIPT',
    image: todoapp,
    color: '#E5E483',
    githubLink: 'https://github.com/sushilsharma7833/Oasis_infobyte_level2_task-3.git'
  },

  {
    link: 'velvety-biscochitos-0bea7b.netlify.app',
    title: 'length-convertor',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: HTML5,CSS3,JAVASCRIPT',
    image: length,
    color: '#E5E483',
    githubLink: 'https://github.com/sushilsharma7833/InternPeTask-3.git'
  },
  {
    link: 'reliable-torte-9689f4.netlify.app',
    title: 'Stone-Papper-scissor game',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: HTML5,CSS3,JAVASCRIPT',
    image: game,
    color: '#E5E483',
    githubLink: 'https://github.com/sushilsharma7833/stonepapersicssorgame.git'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>

      {/* </ScrollAnimation> */}
    </div>
  );
}
