
import Navbar from "./Navbar"
import AutoImage from './AutoImage';
import { Link } from "react-router-dom";
import CardProgram from "./CardProgram";
import Medals from "./Medals";
import Placement from "./Placement";
import { Swiper, SwiperSlide } from 'swiper/react';
import './Header.css'
import FooterOne from './FooterOne';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,FreeMode, Pagination,Navigation} from 'swiper/modules';

import Leader from "./Leader";
import PlaceOriginal from "./PlaceOriginal";
function Home()
{
    return(
<div>
 <Navbar/>
 <AutoImage/>
 <Link to="https://api.whatsapp.com/send/?phone=%2B917055922888&text&type=phone_number&app_absent=0">
 <img className="w-[60px] fixed
          right-0
          bottom-0
          mr-[10px]" src="./whatsapp.webp" alt="Chatpot"></img>
          </Link>
    <div className=" flex  flex-col md:flex-row gap-2 w-full mt-2">
        <div class="md:w-[900px]  flex justify-center items-center flex-col md:mt-3">

            <div className="text-sm md:mt-5  text-gray-800 md:mr-12">
                <div>
                    <h1 className=" ml-5 md:ml-0 text-sky-500 "><span class="text-4xl ">OUR</span> <span
                            class=" ml-1 text-4xl  font-semibold">INFRASTRUCTURE</span></h1>
                </div>
                <div class="ml-2 mt-5 md:ml-0">Jaypee University Anoopshahr (JUA) is a multidisciplinary university established by
                    the Govt.of U.P.</div>
                <div class="ml-2 md:ml-0">Act No 8 of 2014. Based on the sanction received vide Govt. of Uttar Pradesh letter No
                    347/Sattar-1-2014-</div>
                <div class="ml-2 md:ml-0 mt-1"> 20(4)/2011 the University started functioning in 2014.</div>
                <div class="border-t-4 border-t-green-500 md:mt-4"></div>
                <div class="mt-4 flex flex-row gap-12">
                    <div class="hover:cursor-pointer "><img class="border border-black" src="./hostalsmall_0.jpg"
                            alt=""/>
                        <h1 class=" font-medium text-base text-center">CAMPUS</h1>
                    </div>
                    <div class="hover:cursor-pointer "><img class="border border-black"
                            src="./technical-hub-thumb_1_0.jpg" alt=""/>
                        <h1 class=" font-medium text-base text-center">HOSTEL</h1>
                    </div>
                    <div class="hover:cursor-pointer "><img class="border border-black"
                            src="./labsmallsizethumb_0.jpg" alt=""/>
                        <h1 class=" font-medium text-base text-center">LABS</h1>
                    </div>
                </div>

                <div class="flex flex-row gap-12 md:mt-7">
                    <div class="cursor-pointer"><img class="border border-black" src="./visual-arts-thumb.jpg"
                            alt=""/>
                        <h1 class=" font-medium text-base text-center">VISUAL ARTS</h1>
                    </div>
                    <div class="cursor-pointer"><img class="border border-black"
                            src="./performing-arts-thumb_0_1.jpg" alt=""/>
                        <h1 class=" font-medium text-base text-center">PERFORMING ARTS</h1>
                    </div>
                    <div class="cursor-pointer"><img class="border border-black" src="./sports-thumb_1_1.jpg"
                            alt=""/>
                        <h1 class=" font-medium text-base text-center">GAMES & SPORTS</h1>
                    </div>
                </div>
            </div>
        </div>   
        <div class="md:mt-7 border-2 border-blue-700 overflow-y-scroll mr-2  ">
            <div class=" border-b-2 border-b-blue-700 flex  ">
                <h1 class="mt-2 text-sky-600 font-semibold ml-11 md:ml-3 text-lg">ANNOUNCEMENTS</h1>
                <img class="ml-3 mr-4" src="./anou-icon.jpg" alt=""/>
            </div>
            <marquee behavior="" direction="up">
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Announcement of independence Day</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Registration Date</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">International guest Lecture on 16-May-2023</Link> </div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Agnipath Scheme Poster</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Odd Semester Result Out</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Announcement of independence Day</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Registration Date</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">International guest Lecture on 16-May-2023</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Agnipath Scheme Poster</Link></div>
                <div class=" hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Odd Semester Result Out</Link></div>
            </marquee>
        </div>
        <div class="mt-7 ml-6 border-2 border-red-500 overflow-y-scroll ">
            <div class=" border-b-2 border-b-red-500 flex  ">
                <h1 class="mt-2 text-red-600 font-semibold  ml-10 md:ml-4 text-xl">IMPORTANT INFORMATION</h1>
                <img class="ml-2 mr-4 w-[40px] " src="./1200px-OOjs_UI_icon_alert_destructive.svg.png" alt=""/></div>
               <marquee behavior="" direction="up">
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Announcement of independence Day</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Registration Date</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">International guest Lecture on 16-May-2023</Link> </div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Agnipath Scheme Poster</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Odd Semester Result Out</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Announcement of independence Day</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Registration Date</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">International guest Lecture on 16-May-2023</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Agnipath Scheme Poster</Link></div>
                <div class="hover:text-red-400 ml-6 md:ml-0 mt-3 mb-3"><Link to="\Card">Odd Semester Result Out</Link></div>
            </marquee>
        </div>
    </div>
    <div className="text-center text-4xl mt-10 font-semibold"><span className="text-yellow-500">NEWS</span> AND <span className="text-blue-800">EVENTS</span> </div>
    <div className="mt-10 ml-14 ">
    <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
         <div className="w-[300px] h-[200px]    ">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./mou_ceremony.png" alt="" />
            </div>
            TCS MOU CEREMONY
            </SwiperSlide>
            </div>
            <div className="w-[300px] h-[200px]">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./district_level.png" alt="" />
            </div>
           Distict Level Science Exhibition
            </SwiperSlide>
            </div>
            <div className="w-[300px] h-[200px]">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./teachers_day_celebration.jpeg" alt="" />
            </div>
           Teachers Day Celebration
            </SwiperSlide>
            </div>
            <div className="w-[300px] h-[200px]">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./chandrayaan-3-news-live.jpg" alt="" />
            </div>
         Live Streaming Chandryaan-3 Landing
            </SwiperSlide>
            </div>
            <div className="w-[300px] h-[200px] ">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./mou_ceremony.png" alt="" />
            </div>
            TCS MOU CEREMONY
            </SwiperSlide>
            </div>
            <div className="w-[300px] h-[200px]">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./district_level.png" alt="" />
            </div>
           Distict Level Science Exhibition
            </SwiperSlide>
            </div>
            <div className="w-[300px] h-[200px]">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./teachers_day_celebration.jpeg" alt="" />
            </div>
           Teachers Day Celebration
            </SwiperSlide>
            </div>
            <div className="w-[300px] h-[200px]">
        <SwiperSlide >
           <div className="w-[300px] h-[180px]">
            <img src="./chandrayaan-3-news-live.jpg" alt="" />
            </div>
         Live Streaming Chandryaan-3 Landing
            </SwiperSlide>
            </div>
        </Swiper>
        </div>
<h1 class="text-center text-rose-700 text-5xl mt-20 font-semibold "><span
            class="border-b-2 border-b-yellow-400">EXPLORE OUR PROGRAMS</span></h1>
            <div class="flex flex-col md:flex-row mt-24   ml-5 w-full  ">
                <CardProgram imageSrc="./30ee5f08498e9286b01fb46927b281c1.jpg"/>
                <div class=" flex ml-5 ">
                 <CardProgram imageSrc=" ./452cd75c4b41dd4db711a2796eaac637.jpg"/>
               
                </div>
                <div class=" flex ml-5">
                <CardProgram imageSrc="./eb14be291a280fb203cf4c9cda4bd406.jpg"/> 
                </div>
                <div class=" ml-5 ">
                <CardProgram imageSrc="./18493d1b27cef1c93c9a443a2f899ac8.jpg"/> 
                </div>
            </div>
            <h1 class="text-center font-semibold text-4xl mt-20"><span class="text-red-600">Research </span><span
            class="text-blue-900 border-b-4 border-b-red-500"> Excellence</span></h1>
<div class="flex  flex-col md:flex-row gap-6 mt-16 mb-12 ">
    <Medals imagesc="./medal1.png"name="60+" />
    <Medals imagesc="./medal2.png" name="100+"/>
    <Medals imagesc="./medal3.png" name="₹50Lakh"/>
    <Medals imagesc="./medal4.png" name="10+"/>
</div>
<div class="text-center text-5xl mt-16  "><span class="text-yellow-500 py-3">Key</span> <span
            class="text-blue-900 border-b-2 border-b-yellow-400 font-semibold">Recuriters</span></div>
             <div class="flex flex-col md:flex-row gap-2 ml-4 justify-center items-center mt-16  ">
                <Placement photo="./logo5.png"/>
                <Placement photo="./logo6.jpg"/>
                <Placement photo="./logo7.png"/>
                <Placement photo="./logo8.jpg"/>
             </div>
             <div class="flex  flex-col md:flex-row gap-2 mt-5 justify-center items-center   ml-6">
             <Placement photo="./logo4.jpg"/>
                <Placement photo="./logo9.jpg"/>
                <Placement photo="./logo11.jpg"/>
                <Placement photo="./logo10.png"/>
                </div >
                <div className="text-center mt-10 text-5xl  font-semibold"><span className="text-yellow-500">Placed </span><span className="text-blue-900 border-b-2 border-b-yellow-400">Student</span></div>
                <div className="mt-12 ml-10 ">
              <PlaceOriginal/>
      </div>
      <div class="text-center text-5xl mt-16  "><span class="text-yellow-500 py-3">Our</span> <span
            class="text-blue-900 border-b-2 border-b-yellow-400 font-semibold">Leadership</span></div>
      <div className="mt-10 ml-5 mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Leader owner="./jaiprakash-gaur1.jpg"/></SwiperSlide>
        <SwiperSlide><Leader owner="./ShriManojGaurji.jpg"/></SwiperSlide>
        <SwiperSlide><Leader owner="./vcsir.jpg"/></SwiperSlide>
        <SwiperSlide><Leader owner="./V.P.Kallimani.jpg"/></SwiperSlide>
    
      </Swiper>
      </div >
      <div class="text-center text-5xl mt-16  "><span class="text-yellow-500 py-3">Our</span> <span
            class="text-blue-900 border-b-2 border-b-yellow-400 font-semibold">Sister institutions</span></div>
      <div className="mt-12 flex gap-16 ml-24 mb-2">
        <div className="flex flex-col"><img src="./jiit.jpg" alt="" />
       <h1 className="text-center text-2xl font-semibold">JIIT</h1>
        </div>
        <div ><img src="./juet.jpg" alt="" />
        <h1 className="text-center text-2xl font-semibold">JUET</h1>
        </div>
        <div><img src="./juit.jpg" alt="" />
        <h1 className="text-center text-2xl font-semibold">JUIT</h1></div>
      </div>
      <FooterOne/>
      
</div>
    );
}
export default Home;