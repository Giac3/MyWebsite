 import {BiHomeSmile} from 'react-icons/bi'
 import {MdOutlineHistoryEdu, MdOutlineWork} from 'react-icons/md'
 import {AiOutlineMail} from 'react-icons/ai'
 import {FaGamepad} from 'react-icons/fa'
 import TypeWriterEffect from 'react-typewriter-effect'
 import './App.js'
import { useState } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


 const NavBar = () => { 
   const [terminalText, setTerminalText] = useState('Press one of the Nav Buttons');

   const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (

      
         <div className="fixed top left-0 h-screen w-16 m-0 flex flex-col bg-black text-white shadow-md border-r-2 border-blue-300">

            <button onClick={() => setTerminalText(' cd Home')}>
            <NavBarIcon icon={<BiHomeSmile size='28'/>} text={'% Home'}/>
            </button>

            <button onClick={() => setTerminalText(' cd My-History')}>
            <NavBarIcon icon={<MdOutlineHistoryEdu size='28'/>} text={'% My-History'}/>
            </button>

            <button onClick={() => setTerminalText(' cd My-Work')}>
            <NavBarIcon icon={<MdOutlineWork size='28'/>} text={'% My-Work'}/>
            </button>

            <button onClick={() => setTerminalText(' cd Play-A-Game..')}>
            <NavBarIcon icon={<FaGamepad size='28'/>} text={'% Play-A-Game..'}/>
            </button>

            <button onClick={() => setTerminalText(' cd Contact-Me')}>
            <NavBarIcon icon={<AiOutlineMail size='28'/>} text={'% Contact-Me'}/>
            </button>

            <div class="header transition-all duration-300 ease-linear -z-40 w-screen hover:border-t-2 border-orange-500">
  <h1>(base) giacomopessotto@Giacomos-Website ~ % </h1>
  <h2 id='terminal-text'>{terminalText}</h2>
</div>

<div className='sliderview -z-40'>
            <Slider {...settings}>
          <div className='card'>
            <h3 className='card-top text-green-700'> ./Home.js</h3>
            <p className='card-bottom'>Hello, Thanks for visiting my website</p>
          </div>
          <div className='card'>
            <h3 className='card-top text-green-700'> ./My-History.js</h3>
            <p className='card-bottom'>Hello</p>
          </div>
          <div className='card'>
            <h3 className='card-top text-green-700'> ./My-Work.js</h3>
            <p className='card-bottom'>Hello</p>
          </div>
          <div className='card'>
            <h3 className='card-top text-green-700'> ./Play-A-Game.js</h3>
            <p className='card-bottom'>Hello</p>
          </div>
          <div className='card'>
            <h3 className='card-top text-green-700'> ./Contact-Me.js</h3>
            <p className='card-bottom'>Hello</p>
          </div>
          
          
        </Slider>

      </div>
            
         </div>
    );
 };


 const NavBarIcon = ({ icon, text}) => (
    <div className="navbar-icons group">
        {icon}

        <span class="navbar-tooltip group-hover:scale-100 group-hover:animate-bounce ">
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Menlo', color: 'white' }}
            startDelay={100}
            cursorColor="white"
            text={text}
            typeSpeed={100}
          />
        </span>
    </div> 
 );


 export default NavBar; 