


import Gall  from "./gall";
const Gallery = () => {
 return (
  <div className="About bg-yellow-100">

   





   <section className="Principles bg-green-50">
    <div className="container   mx-auto px-6 ">
    
 
   

     <div className=" grid gap-5  over-flow-hidden grid-cols-1 py-8 service-points   md:grid-cols-3">
      {Gall.map(val => {

       return (<div className="  bg-white shadow-xl  hover:bg-white hover:text-gray-300 p-4" key={val.id} >
        <img className="w-full" src={val.Icon} alt='girl'></img>

        <h5 className=' text-base text-left pt-2 text-gray-700 font-bold  '>{val.headtext}</h5>
        <p className=' text-base text-left  pt-2 hover:text-black font-medium text-gray-600 py-2 ' >


         {val.bodytext}</p>
        <div className="under bg-yellow-500  h-50"></div>
       </div>
       )


      })}
     </div>



    </div>
   </section>



   
  </div>
 )

}

export default Gallery;














