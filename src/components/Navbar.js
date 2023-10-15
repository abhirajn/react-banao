import React, { useState } from 'react'
import './Navbar.css'
import Signup from '../pages/signup/Signup'
import Modal from './Modal';
import Login from '../pages/login/Login';
import LoginModal from './LoginModal';
import MobileModal from './MoblieModal';
import MobileSignup from '../pages/signup/MobileSignup';
import MobileLogin from '../pages/login/MobileLogin';
export default function Navbar() {
  const[sign , setSign] = useState(0);
  const[signup , setSignup] = useState(false);
  const[login , setLogin] = useState(false);
  return (
    
    <div className="box ">
<div className="rectangle d-none d-md-block d-lg-block">
    <div className='container'>
        <div className='row'>
<div className='col-sm '>
<div className='whole'>

</div>
</div>

<div className='col-sm'>
<div className='searchbar d-sm-none d-md-block '>
<div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">🔍</span>
      </div>
      <input type="text" class="form-control" placeholder="Search for your favorite groups in ATG" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
</div>
</div>
<div className='col-sm'>
<div className="label">
<p className="create-account-it-s">
<span className="text-wrapper">Create account. </span>
<span className="span cursor-pointer" onClick={()=>{setSign(1)}}>It’s free!</span>
{sign === 1 ? <Modal onClose={() => setSign(0)}><Signup fun={setSign}/></Modal> : ""}
{sign === 2 ? <LoginModal onClose={() => setSign(0)}><Login fun={setSign}/></LoginModal> : ""}
</p>
</div>
</div>
</div>
</div>
</div>

<div className=' my-1 d-md-none d-lg-none' style={{display:'flex' }}>
<div className='newwhole' >

</div>
  <div style={{marginLeft:'10px', height:'200px'}} >
  <button className='btn btn-primary  mx-1' onClick={()=>{setLogin(true)}}>Login</button>
  <button className='btn btn-primary my-1' onClick={()=>{setSignup(true)}}>Sign up</button>
  {signup ? <MobileModal onClose={() => setSignup(false)}><MobileSignup/></MobileModal> : ""}
{login ? <MobileModal onClose={() => setLogin(false)}><MobileLogin/></MobileModal> : ""}
  </div>
</div>
</div>
  )
}
