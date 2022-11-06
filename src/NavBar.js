 import {BiHomeSmile} from 'react-icons/bi'
 import {MdOutlineHistoryEdu, MdOutlineWork} from 'react-icons/md'
 import {AiOutlineMail} from 'react-icons/ai'
 import {FaGamepad} from 'react-icons/fa'
 
 const NavBar = () => {
    return (
         <div className="fixed top left-0 h-screen w-16 m-0 flex flex-col bg-slate-500 text-white shadow-md">
            
            <NavBarIcon icon={<BiHomeSmile size='28'/>} text={'Home Page'}/>
            <NavBarIcon icon={<MdOutlineHistoryEdu size='28'/>} text={'My History'}/>
            <NavBarIcon icon={<MdOutlineWork size='28'/>} text={'My Work'}/>
            <NavBarIcon icon={<FaGamepad size='28'/>} text={'Play a game..'}/>
            <NavBarIcon icon={<AiOutlineMail size='28'/>} text={'Contact Me'}/>
         </div>
    );
 };

 const NavBarIcon = ({ icon, text}) => (
    <div className="navbar-icons group">
        {icon}

        <span class="navbar-tooltip group-hover:scale-100">
            {text}
        </span>

    </div> 
 );


 export default NavBar; 