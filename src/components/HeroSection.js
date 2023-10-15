import React, { useState } from 'react'
import Card1 from './cards/Card1'
import MobileModal from './MoblieModal';
import MobileSignup from '../pages/signup/MobileSignup';
import MobileLogin from '../pages/login/MobileLogin';
import {BiSolidDownArrow} from 'react-icons/bi'
import {BsPeopleFill} from 'react-icons/bs'

import './HeroSection.css'

export default function HeroSection() {
  const [open , setOpen] =  useState(false);
  return (
    <div className=''>
      <div className='' >
        <img src={require('./heroback.jpg')} className='heroimg'/>
      {/* <div class="textonphoto">Computer Engineering</div> */}
      </div >
    <div className='fullhero'>
    <div className='' >
  <div className='d-none d-md-flex d-lg-flex optiondiv' style={{marginLeft : '40px' , justifyContent:'left'}}>
  <p className='m-2 firstword '>All posts(30)</p>
       <p className='m-2 optionword' >Events</p>
       <p className='m-2 optionword' >Article</p>
       <p className='m-2 optionword' >Education</p>
       <p className='m-2 optionword'  onClick={()=>{setOpen(true)}}>Job</p>
   {open ? <MobileModal onClose={()=>{setOpen(false)}}><MobileLogin/></MobileModal> : ""}
  
  <div className='flex flex-column'>
  <div style={{display:'flex' , justifyContent:'center' , marginLeft:'500px' , flexDirection:'row'}} className='d-none  d-lg-flex'>
  <button className='btn m-3 writepostbutton'>write a post <BiSolidDownArrow style={{marginLeft:"5px"}}></BiSolidDownArrow></button>
  <button className='btn btn-primary m-3 joinbutton'><BsPeopleFill style={{marginRight:'5px'}}/>Join Group</button>
  </div>
  
</div>
  </div>
       </div>
       <div className='d-md-none d-lg-none'>
       <p className='m-2 firstword '>All posts(30)</p>
       </div>
      <div className='d-flex flex-column mx-lg-5'>
        <div ><Card1/></div>
        <div ><Card1/></div>
        <div ><Card1/></div>
        <div ><Card1/></div>
        {/* <div className='m-2'><Card1/></div> */}
      </div>
    </div>

    </div>
  )
}
