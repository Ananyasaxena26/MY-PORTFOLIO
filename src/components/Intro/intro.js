import React from 'react'
import './intro.css';
import bg from '../../assests/image.png';
import btnImg from '../../assests/hireme.png'
import {Link}  from 'react-scroll';

const Intro = () => {
  return (
   
      <section id ="intro "> 
           <div className='introContent'>

            <span className='hello'>Hello</span>
            <span className='introText'> I am< span className='introName'> Ananya</span><br/>Website Designer<br/></span>
            <p className='introPara'> I am a skilled web designer with expericnce in creating <br/> visually appealing and user frinedly websites</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>

           </div>
           <img src={bg} alt="Profile" className='bg'/>
              
                 
      </section> 
    
  )
}

export default Intro;
