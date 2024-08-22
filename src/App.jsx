import React from 'react'
import './App.css'
import css from './assets/images/CSS-Logo.png'
import bootstrap from './assets/images/bootstrap.png'
import html from './assets/images/html.png'
import java from './assets/images/java-Logo.jpg'
import javascript from './assets/images/javaScript-Logo.png'
import mysql from './assets/images/mysql-logo.png'
import reactjs from './assets/images/react-js.jpg'
import nodejs from './assets/images/node-js.png'
import adaimavu from './assets/images/adaimavu.png'
import hss from './assets/images/hss.png'
import portfolio from './assets/images/portfolio.png'
export default function App() {
  return (
    <>
    <div className='nav-bar'>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-12'>
    <div className='col-md-4'></div>
    <div className='col-md-6'>
    <div className='nav-links'>
    <ul>
    <b>
    <li><a href='#about'>About</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#contact'>contact</a></li>
    </b>
    </ul>
    </div>
    </div>
    <div className='col-md-2'>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='pannel'>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-12'>
    <div className='col-md-6'>
    <p className='person-name'>Mareeswari A</p>
    <p className='person-domain'>Full Stack Web Developer</p>
    <button className='btn' type='button'><a href='#contact'>contact Me</a></button>
    </div>
    <div className='col-md-6'>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div id='about' className='about'>
    <div className='container-fluid'>
    <div className='row'>
    <p className='abt'>About</p>
    <p className='person-about'>
    I am Mareeswari, a full-stack web developer with a strong foundation in both front-end and back-end technologies. My skill set includes HTML, CSS, JavaScript, Bootstrap, React, Node.js, and MySQL. I specialize in creating dynamic and responsive web applications, with a focus on delivering user-friendly experiences and efficient backend solutions. Whether it's building interactive interfaces or managing databases, I bring a comprehensive approach to web development.  
    </p>
    </div>
    </div>
    </div>
    <div className='my-skills'>
<div className='container'>
<p className='skills'>My Skills</p>
<div className='row'>
<div className='col-md-12'>
<div className='col-md-3'>
<div className='category'>
<img src={html} width={50}/>
<p className='html'><b>HTML</b></p>
</div>
</div>
<div className='col-md-3'>
<div className='category'>
<img src={css} width={75}/>
<p className='css'><b>CSS</b></p>
</div>
</div>
<div className='col-md-3'>
<div className='category'>
<img src={javascript} width={75}/>
<p className='js'><b>JavaScript</b></p>
</div>
</div>
<div className='col-md-3'>
<div className='category'>
<img src={nodejs} width={50}/>
<p className='nodejs'><b>Node.js</b></p>
</div>
</div>
<div className='col-md-3'>
<div className='category'>
<img src={ bootstrap} width={50}/>
<p className='bootstrap'><b>Bootstrap</b></p>
</div>
</div>
<div className='col-md-3'>
<div className='category'>
<img src={mysql} width={50}/>
<p className='mysql'><b>MySQL</b></p>
</div>
</div>
<div className='col-md-3'>
<div className='category'>
<img src={reactjs} width={50}/>
<p className='nextjs'><b>React.js</b></p>
</div>
</div>
<div className='col-md-3'>
<div className='category'>
<img src={java} width={75}/>
<p className='java'><b>Core Java</b></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div id='portfolio' className='portfolio'>
<div className='container'>
<p className='port'>Portfolio</p>
<div className='row'>
<div className='col-md-12'>
<div className='col-md-4'>
<div className='portfolio-port'>
<a href=''>
<img src={adaimavu} width={300} height={200}/>
</a>
</div>
</div>
<div className='col-md-4'>
<div className='portfolio-port'>
<a href='https://github.com/Mareesreema/Soaps'>
<img src={hss} width={300} height={200}/>
</a>
</div>
</div>
<div className='col-md-4'>
<div className='portfolio-port'>
<a href='/home'>
<img src={portfolio} width={300} height={200}/>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
    <div id='contact' className='contact-me'>
    <div className='container'>
    <p className='cont'>Contact Me</p>
    <div className='row'>
    <div className='col-md-12'>
    <div className='col-md-6'>
    <p className='mail'>mareesreema2002@gmail.com</p>
    </div>
    <div className='col-md-6'>
    <p className='location'>chennai,India</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
