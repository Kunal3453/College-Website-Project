import React from 'react'
import { faAmazonPay, faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './Header.css';
// import Card from './Card';
import { Link } from "react-router-dom";
import Navbartwo from './Navbartwo';
import SearchBar from './SearchBar';
function Navbar()
{
    return(
        <div className=" header">
        <div className="hidden md:flex flex-row gap-14  bg-gradient-to-r from bg-rose-600 to-rose-700 h-8  text-white rounded-md ">
                     <Link to="/Card" className='ml-6 text-lg hover:text-orange-400'>Carrers</Link>
                     <Link to="/Signup" className='ml-6 text-lg hover:text-orange-400'>Alumni</Link>
                     <Link to="/Card" className='ml-6 text-lg hover:text-orange-400'>Resources</Link>
                     <Link to="/Card" className='ml-6 text-lg hover:text-orange-400'>faculty Members</Link>
                     <Link to="/Card" className='ml-6 text-lg hover:text-orange-400'>International student Cell</Link>
                     <Link to="/Card" className='ml-6 text-lg hover:text-orange-400'>Login</Link>
                     <Link to="/Card" className='ml-6 text-lg hover:text-orange-400'>Contact Us</Link>
                <Link to="/Card" > <FontAwesomeIcon icon={faInstagram} beat /></Link>
              <Link to="/Card"> <FontAwesomeIcon icon={faFacebook} beat /></Link>
              <Link to="/Card"> <FontAwesomeIcon icon={faLinkedin} beat /></Link>
              <Link to="/Card"><FontAwesomeIcon icon={faWhatsapp} beat /></Link>
            </div>
            <div className="flex flex-row w-full mt-2 ">
                <div>
            <img className=" ml-3 h-[80px] w-[450px] md:w-[300px] md:h-[100px] " src={process.env.PUBLIC_URL + '/jua.jpg'} alt=""/></div>
            <div className="flex justify-center ml-28 w-[2550px] ">
                <div className="flex flex-col font-serif">
                <div className="text-black md:text-3xl w-full  md:text-indigo-950">JAYPEE UNIVERSITY ANOOPSHAHR , UP , INDIA</div>
                <div className=" text-black md:text-3xl mt-2 md:text-indigo-950">जेपी विश्वविद्यालय अनूपशहर , उ. प्र. , भारत</div>
                <div className="hidden md:text-blue-600">ESTABLISHED UNDER UP ACT NO 8 OF 2014</div>
             </div>
             
             
             </div>
            
           <div className="hidden md:flex flex-row justify-end w-full "><SearchBar/><img class="w-[130px] mr-3" src={process.env.PUBLIC_URL + '/logo2.jpg'} alt=""/></div>
            </div>
            <div className="flex "></div>
            <div className="flex flex-row gap-14   font-semibold text-white bg-rose-500  ">
<Link to="/Home" className='"hover:bg-red-500 rounded-md p-[1px] relative group ml-6'>HOME
                               
                    </Link>
                <div className="hidden md:flex gap-10">
                    <Link to="/About" className="hover:bg-red-500 rounded-md p-[1px] relative group ">ABOUT<FontAwesomeIcon className="ml-1" icon={faCaretDown}/><Navbartwo/></Link>
                    <Link to="/About" className="hover:bg-red-500 rounded-md p-[1px] relative group">R&D<FontAwesomeIcon className="ml-1" icon={faCaretDown}/><Navbartwo/></Link>
                    <Link to="/About" className="hover:bg-red-500 rounded-md p-[1px] relative group">ACADEMICS<FontAwesomeIcon className="ml-1" icon={faCaretDown}/><Navbartwo/></Link>
                    <Link to="/About" className="hover:bg-red-500 rounded-md p-[1px] relative group">TRAINING &PLACEMENT<FontAwesomeIcon className="ml-1" icon={faCaretDown}/><Navbartwo/></Link>
                    <Link to="/About" className="hover:bg-red-500 rounded-md p-[1px] relative group">FOR STUDENT<FontAwesomeIcon className="ml-1" icon={faCaretDown}/><Navbartwo/></Link>
                    <Link to="/About" className="hover:bg-red-500 rounded-md p-[1px] relative group">DOWNLOAD<FontAwesomeIcon className="ml-1" icon={faCaretDown}/> <Navbartwo/></Link>
                    <Link to="https://buy.stripe.com/test_eVa14y9msedxePubII" className="hover:bg-red-500 rounded-md p-[1px] relative group">BUY T_SHIRT<FontAwesomeIcon className=" ml-1 bg-sky-300" icon={faAmazonPay}/></Link>
                    <Link to="http://125.19.185.49:8080/JaypeeU/" className="hover:bg-red-500 rounded-md p-[1px] relative group">WEBKIOSK<FontAwesomeIcon  className="ml-1 bg-yellow-400"  icon={faUser}/></Link>        
                                
                    <Link to="/Signup"><button className="bg-yellow-400 px-3 py-1 rounded-xl animate-bounce text-orange-500 hover:text-white ml-4">APPLY
                        NOW</button></Link>
                        
                </div>
                <div className="ml-72 md:hidden "><button ><FontAwesomeIcon icon={faBars} /></button></div>
            </div>
        </div>
          
    );
}
export default Navbar;