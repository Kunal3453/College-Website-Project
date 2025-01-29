import React from 'react'
import { Link } from "react-router-dom";
function Navbartwo()
{
    return(
<div className=" absolute hidden border  group-hover:block text-white bg-rose-500">
                        <div className='flex gap-3 '>
                            <div>
<div className='flex flex-col border-r-2 ml-2 mb-2'>
  <Link to="/Home">  <div className='mt-2'>Home</div></Link>
   <Link to="/About"><div className='mt-2'>About</div></Link>
   <Link to="/Card"><div className='mt-2'>Contact us</div></Link>
   <Link to="/About"><div className='mt-2'>Placements</div></Link>
   <Link to="/Card"><div className='mt-2'>Faculty</div></Link>
</div>
                            </div>
                            <div>
                            <div className='flex flex-col ml-2 border-r-2'>
                            <Link to="/Home">  <div className='mt-2'>Home</div></Link>
   <Link to="/About"><div className='mt-2'>About</div></Link>
   <Link to="/Card"><div className='mt-2'>Contact us</div></Link>
   <Link to="/About"><div className='mt-2'>Placements</div></Link>
   <Link to="/Card"><div className='mt-2'>Faculty</div></Link>
</div>
                            </div>
                            <div>
                            <div className='flex flex-col ml-2 mr-2'>
                            <Link to="/Home">  <div className='mt-2'>Home</div></Link>
   <Link to="/About"><div className='mt-2'>About</div></Link>
   <Link to="/Card"><div className='mt-2'>Contact us</div></Link>
   <Link to="/About"><div className='mt-2'>Placements</div></Link>
   <Link to="/Card"><div className='mt-2'>Faculty</div></Link>
</div>
                            </div>
</div>
                        </div>
    );
}
export default Navbartwo;