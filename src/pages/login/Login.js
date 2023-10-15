import React, { useState } from 'react'
import './Login.css'
import {FaFacebook} from 'react-icons/fa6'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Modal from '../../components/Modal'
import Signup from '../signup/Signup'
export default function Login({fun}) {
    const[open , setOpen] = useState(false);
  return (
    <div style={{}}>
    
      <div  className='start'>
    <p className='starttext'>  Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
    {/* <AiOutlineCloseCircle style={{top:'0', right:'0'}}/> */}
      </div>
      <div className='mb-5'>
<p className='cracc mx-4'>Sign In</p>
<p className='signin mt-2 mx-2' style={{color:'black'}}>Don’t have an account yet? <span style={{color:'blue' , cursor:'pointer'}} onClick={()=>{fun(1)}}>Create new for free!</span></p>
  
      </div>
      <div className='container'>
        <div className='row'>
     <div className='col-sm'>
     <div style={{}}>
        <input type="email" className="form-control formpalceholder" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" style={{height: '46px',
width: '320px'}}/>
        <input type="password" className="form-control formpalceholder" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" style={{height: '46px',
width: '320px'}}/>
       

<button className="btn btn-primary rounded-pill firstbutton" type="submit" style={{height: '40px' ,width: '320px' , marginTop:'19px' }}>Create Account</button>
<button className="btn  rounded-pill buttontext" type="submit" style={{height: '38px' ,width: '320px' , marginTop:'35px',color:'black'}}> <FaFacebook/> Sign up with Facebook </button>
<button className="btn  rounded-pill buttontext" type="submit" style={{height: '38px' ,width: '320px' , marginTop:'19px',color:'black'}}> <FcGoogle/> Sign up with Google</button>
<button className="btn  rounded-pill forgottext" type="submit" style={{width: '320px' , marginTop : '5px' ,color:'black'}}>  Forgot Password?</button>       
       
        </div>
     </div>
        <div className='col-sm'>
          <img src='https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png' alt='logo' style={{height: '320px',
width: '320px'}}/>
        </div>
        </div>
      </div>

    </div>
  )
}
