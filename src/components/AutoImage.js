import Carousel from "./Carousel"


const slides = [
  "./IMG_9119.jpeg",
  "./IMG_9120.jpeg",
  "./IMG_9122.jpeg",
]


function AutoImage() {

  return (
    <div className=" md:mt-3">
    <div className=" ">
      <div className="  relative m-auto ">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            <img  src={s} />
          )), ]}
        </Carousel >

      </div>
    </div>
    </div>
  )
}

export default AutoImage;