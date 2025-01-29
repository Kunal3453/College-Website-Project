import React from 'react'
function Leader({owner})
{
    return( 
<div className="flex gap-2 ml-20 mt-10 border border-black bg-red-400">
<div className="w-[300px] h-[270px]">
    <div className='w-[200px] h-[270px]'>
<img  src={owner} alt="" />
</div>
</div>
<div className=' flex flex-col '>
    <div className='w-[800px] h-[270px]'>
        <p className='mt-3 text-red-700 font-semibold'>Shri Honourable Jaiprakash Gaurji</p>
        <p className='mt-3 text-sky-700 font-semibold'>Founder of Jaypee University Anoopshahr</p>
        <p className='text-gray-700'>His Excellency, the President of India had nominated Shri Jaiprakash Gaur as Chairman of<br/>
             the Board of Governors of the Indian University of Technology, Roorkee with effect from 
             24th May, 05 for a period of 3 years. Shri Gaur was once again appointed Chairman of IIT,
              Roorkee for another tenure of 3 years from 24th May, 2008 andafter serving for 8 months 
              he stepped down from the Chairmanship in February, 2009..</p>
              <button className="px-3 py-1 bg-black text-white hover:text-yellow-700"> Read More</button>
    </div>
</div>
</div>

    );
}
export default Leader;