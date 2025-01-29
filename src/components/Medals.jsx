import React from 'react'
function Medals({ imagesc, name })
{
    return(
<div class="w-[300px] h-[230px] border-t-2 border-t-sky-600 ml-32  shadow-2xl border rounded-lg ">
            <div class="ml-10 mt-6  "><span class="text-5xl font-bold text-blue-950">{name}</span>
                <p class="mt-2">High-End Teaching and</p>
                <p> Research Labs</p>
             </div>
            <div class="flex justify-end mr-6 mt-4"><img src={imagesc} alt=""/>
            </div>
        </div>
    );
}
export default Medals;