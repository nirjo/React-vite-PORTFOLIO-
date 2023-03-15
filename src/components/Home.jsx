import React from 'react'
import profileImg from '../assets/profileImg.png'
import { FaBeer, } from 'react-icons/fa';
// import { FaTwitter,FaDribble,FaBehance } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
<section>
    <div className="home" >
        <div className="home__contianer ">
            <p className="home__subtitle text-cs">
            Hello , <span> My name Is</span>

            </p>
            <h1 className='home__title text -cs'>
            <span>NirmalRaj </span>
            Joseph
            </h1>
<p className='home__job'>
    <span className='text-cs'>I Am </span><b>FrontEnd Developer </b> 
</p>


<div className='home__img-wrapper'>
<div className='home__banner'>
<img src={profileImg} alt="" className='home__profile' />

</div>
</div>


<p className='home__text'>
 From Pondicherry, india. I have rich experience in frontend design and development , also im good at nodejs backend.

</p>


<div className='home__socials'>
    <a href=''className='home__social-link'>
    <FaBeer />
    </a>
    <a href=''className='home__social-link'>
    <FaBeer />
    </a>
    <a href=''className='home__social-link'>
    <FaBeer />
    </a>
</div>
<div className='home__btns'>
    <a href='' className='btn text-cs'>
       <button >
       Download CV
       </button>
       </a>

    <a href='' className='hero__link text-cs'>
        my Skills
    </a>
</div>
        </div>
    </div>
</section>
  )
}

export default Home