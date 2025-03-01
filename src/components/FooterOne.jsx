import React from 'react'
function FooterOne()
{
  return(
<footer class="w-full mt-10 bg-rose-500 h-[500px]">

  <div class="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
    <div class="w-full px-4 md:w-1/2 lg:px-0">
      <h1 class="max-w-sm text-3xl text-white font-bold mt-16">Subscribe to our Newsletter</h1>
      <form action="" class="mt-4 inline-flex w-full items-center md:w-3/4">
        <input
          class="flex h-10 w-full rounded-md  border-red-900 border-4 bg-white px-3 py-2 text-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Email"
        />
        <button
          type="button"
          class="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </form>
    </div>
    <div class="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
      <div class="mb-8 lg:mb-0">
        <p class="mb-6 text-2xl font-semibold text-gray-950 mt-7  ">Company</p>
        <ul class="flex flex-col space-y-4 text-[14px] font-medium text-white text-lg">
          <li>About us</li>
          <li>Company History</li>
          <li>Our Team</li>
          <li>Our Vision</li>
          <li>Press Release</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div class="mb-8 lg:mb-0">
        <p class="mb-6 text-2xl font-semibold text-gray-950 mt-7 ">Company</p>
        <ul class="flex flex-col space-y-4 text-[14px] font-medium text-white text-lg">
          <li>About us</li>
          <li>Company History</li>
          <li>Our Team</li>
          <li>Our Vision</li>
          <li>Press Release</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div class="mb-8 lg:mb-0">
        <p class="mb-6 text-2xl font-semibold text-gray-950 mt-7 ">Company</p>
        <ul class="flex flex-col space-y-4 text-[14px] font-medium text-white text-lg">
          <li>About us</li>
          <li>Company History</li>
          <li>Our Team</li>
          <li>Our Vision</li>
          <li>Press Release</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </div>
  <div className='text-center mt-16 text-xl font-semibold'>© 2022 Jaypee University Anoopshahr. All Rights Reserved.</div>

</footer>

  );
}
export default FooterOne;