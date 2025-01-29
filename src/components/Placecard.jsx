import React from 'react'
function Placecard({place})
{
    return(
<div class="w-[300px]  rounded-md border bg-gray-500">
    <div className="h-[270px] ">
  <img
    src={`${process.env.PUBLIC_URL}/${place}`}
    alt="Laptop"
    class=" h-[200px] w-full rounded-md object-cover"
  />
  </div>
  <div class="p-4">
    <h1 class="text-lg font-semibold">Placed in <span className="text-red-800">Adobe</span> </h1>
    <p class="mt-3 text-sm text-black">
      I am Pursuing Btech from JUA. and I am cracked Adobe By Jua Culture and their faculty,
      debitis?
    </p>
    <button
      type="button"
      class="mt-4 rounded-sm bg-black px-7 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read More
    </button>
  </div>
</div>
    );
}
export default Placecard;