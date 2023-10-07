
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Carouselitem=()=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return(
        <>
        <section className='bg-white '>
        <div className='mx-auto container '>
        <div className="flex py-2 mb-3 px-2 flex-row items-center justify-center ">



</div>
        <Carousel responsive= {responsive}
         transitionDuration={1000}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet",  "mobile"]}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
  
>



  return (

  
    <div className='   ' >

<div className="gallery-items ">
  <img src="/Parners.png" alt="gridtems" className="w-1/2"></img>
</div>

<div className="gallery-items    ">
  <img src="/Parners1.png" alt="gridtems" className="w-1/2" ></img>
</div>

<div className="gallery-items ">
  <img src="/Parners2.png" alt="gridtems" className=" w-1/2"></img>
</div>

<div className="gallery-items  ">
  <img src="/Parners3.png" alt="gridtems" className=" w-1/2"></img>
</div>

</div>
)



</Carousel>
</div>
</section>;
        </>
    )
}

export default Carouselitem;