import React from 'react'

function CardProgram({ imageSrc })
{
    return(
            <div class="ml-4 w-[320px] mb-4  rounded-2xl shadow-xl hover:scale-105 "><img
                class="border-b-8 border-b-rose-700 rounded-t-lg" src={imageSrc} 
                alt=""/>
            <div class="ml-6 mt-3"><span class=" text-2xl font-bold text-rose-800">B.Tech Programs</span>
                <div class="mt-2">
                    <p>Explore our Engineering programs for Enginerrs.</p>
                </div>
                <div class="mt-2"><i class="fa-solid fa-caret-right mr-1" style={{color: '#a6b5ce'}}></i>Computer Science
                    and Engineering</div>
                <div class="mt-2"><i class="fa-solid fa-caret-right mr-1" style={{color: '#a6b5ce'}}></i>Electronics and
                    Communication</div>
                <div class="mt-2"><i class="fa-solid fa-caret-right mr-1 " style={{color: '#a6b5ce'}}></i>Mechanical
                    Engineering</div>
                <div><button
                        class="px-6 py-2 text-white rounded-2xl bg-rose-800 ml-2 mt-8 mb-4 hover:bg-slate-50 hover:text-red-600 hover:border border-red-600">LEARN
                        MORE</button></div>
            </div>
        </div>

    );
}
export default CardProgram;