import { useState } from "react";
// import{FiPhoneCall} from 'react-icons/Fi'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useRef } from 'react';
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone, BsBank } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import emailjs from '@emailjs/browser';
// import Container from "react-bootstrap/Container";
// service_49qguid', 'template_v2xyokn', form.current, '_CS5cVKXtNvM7lVFW

const ContactUs = () => {

const Serv= process.env.REACT_APP_MY_SERV_ID
const Tempid= process.env.REACT_APP_MY_TEMP_ID
const Pubkey= process.env.REACT_APP_MY_PUB_ID

console.log(Serv)
 const form = useRef();
 const [loading, setIsloading] = useState(false)
 const [result, setResult] = useState("")
 const sendEmail = (e) => {

  e.preventDefault();

  setIsloading(true);

  emailjs.sendForm({Serv}, {Tempid}, form.current, {Pubkey})

   .then((result) => {


    setIsloading(false);
    setTimeout(() => {
     setResult("Thanks for Contacting us, message successfully se")

   
    }, (1000))

   }, (error) => {
    console.log(error.text);
    setTimeout(() => { setResult("Unable to send ") }, 1000);
    setIsloading(false);


   });
  e.target.reset()
  setResult("")
 };



 return (
  <div className="Contact-Hero bg-black">
   <div className="container py-5 px-6  mx-auto ">
    <h3 className="mt-5  pt-5 text-2xl font-bold text-yellow-400 text-center">Contact Us For more details</h3>
    <p className="py-6 text-white   text-base text-center">Donate by contacting us through the form provided, we would appreciate your concern  </p>

    <div className="grid grid-cols=1 md:grid-cols-2">

     <div className="contact-sec  space-y-12 flex flex-col mt-5 pt-4 mx-4">
     

     <div className="item-1 flex justify-start pe-3">
       <div className="ico-items bg-yellow-400 mt-2 flex w-[30px] h-[30px] rounded-full items-center justify-center px-2 ">
       < GrLocation/>

       </div>

       <div className="item-info ps-3">
        <h4 className="pt-1 text-yellow-400">Address</h4>
        <p className="py-1  max-w-md text-white">Plot 122, Off SureStart School, by F01, Kubwa, Extension III, F.C.T, Abuja</p>
       </div>
      </div>
     
      



      <div className="item-1 flex justify-start pe-3">
       <div className="ico-items bg-yellow-400 mt-2 flex items-center justify-center " style={{ width: "30px", borderRadius: "50%", height: "30px" }}>
        <BsTelephone />

       </div>

       <div className="item-info ps-3">
        <h4 className="pt-1 text-yellow-400">Phone</h4>
        <p className=" text-white">+234-8100-100-489</p>
       </div>
      </div>



      <div className="item-1 flex justify-start pe-3">
       <div className="ico-items bg-yellow-400 mt-2 flex items-center justify-center" style={{ width: "30px", borderRadius: "50%", height: "30px" }} >
        <BiEnvelope />
       </div>


       <div className="item-info ps-3">
        <h4 className="pt-1 fs-5 text-yellow-400">Email</h4>
        <p className=" text-white">nicholasmotivatesinitiative"gmail.com</p>
       </div>
      </div>


      
      <div className="item-1 flex justify-start pe-3">
       <div className="ico-items bg-yellow-400 mt-2 flex items-center justify-center" style={{ width: "30px", borderRadius: "50%", height: "30px" }} >
        <BsBank />
       </div>


       <div className="item-info ps-3">
        <h4 className="pt-2 fs-5 text-yellow-400">Account Name:</h4>
        <p className=" text-white">NicholasMotivates initiative</p>
        <h4 className="pt-2 fs-5 text-yellow-400">Bank:</h4>
        <p className="pt-2 text-white">Bank: GTB</p>

        <h4 className="pt-2 fs-5 text-yellow-400">Account Number:</h4>
        <p className=" text-white">0654144850</p>

       </div>
      </div>
     </div>


     <div className="form">

      <form className="   px-10 my-5 mx-3 bg-white shadow-lg " ref={form} onSubmit={sendEmail}>
       < h3 className=" font-bold  text-lg ps-5 py-3 text-black ">Send Message</h3>

       <p className=" text-base text-green-500 ps-5 py-2 text-gray-500">{result} </p>


       <div className="email-send flex flex-col ">
        <label className="pt-3 pb-2 ps-5" for="text">Name</label>
        <input type="text" className="ps-5  border border-b-yellow-500 shadow-md border-double py-2 mt-2 w-[300px] text-base  rounded-lg " name="user_name" placeholder="Name"></input>

       </div>


       <div className="email-send flex  flex-col ">
        <label className="pt-3 pb-2 ps-5" for="text">Email</label>
        <input type="Email" className="py-2  border border-b-yellow-400 shadow-md border-double  ps-5 mt-2 w-[300px] text-base  rounded-lg " name="user_email" required placeholder="Email"></input>

       </div>


       <div className="email-send flex flex-col ">
        <label className="pt-3 pb-2 ps-5" for="text">Message</label>
        <textarea className="w-[300px] h-[200px]   text-gray-400 ps-5 py-5  border border-b-yellow-500 shadow-md border-double text-base" name="message" placeholder="Message" cols="6"
         rows="3"></textarea>
       </div>


       <div className="email-send flex flex-col ">

        {!loading && <input type="submit" className=" hover:bg-black hover:text-white font-bold text-base flex place-self-start rounded-md  px-5 py-2 my-3 bg-yellow-400 text-black" value="Send" />}
        {loading && <input type="submit" className="text-base flex place-self-start rounded-md px-5 py-2  my-3 bg-yellow-400" disabled value="Sending" />}
       </div>


      </form>



     </div>

    </div>
   </div >

  </div >
 );
};
export default ContactUs;