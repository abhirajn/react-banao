import React from 'react'
import './Signup.css'
import {FaFacebook} from 'react-icons/fa6'
import {FcGoogle} from 'react-icons/fc'
import {AiFillCloseCircle } from 'react-icons/ai'
export default function MobileSignup() {
  return (
    <div style={{}} className=''>
      <div className='  ' style={{paddingBottom:'44px' , paddingTop:'10px'}}>
<p className='cracc' style={{float:'left'}}>Create Account</p>
{/* <AiFillCloseCircle /> */}
<div style={{float:'right'}}>
<AiFillCloseCircle size={30}/>
</div>
      </div>
    
     <div className=''>
     <div style={{}}>
      <div className='d-flex flex-row'>
      <input type="text" className="form-control formpalceholder" id="" aria-describedby="emailHelp" placeholder="First Name" style={{height: '46px',
width: '50%'}}/>
  <input type="text" className="form-control formpalceholder" id="" aria-describedby="emailHelp" placeholder="Last Name" style={{height: '46px' , width : '50%'}}/>
      </div>
        <input type="email" className="form-control formpalceholder" id="" aria-describedby="emailHelp" placeholder="Email" style={{height: '46px',
width: '100%'}}/>
        <input type="password" className="form-control formpalceholder" id="" aria-describedby="emailHelp" placeholder="Password" style={{height: '46px',
width: '100%'}}/>
        <input type="password" className="form-control formpalceholder" id="" aria-describedby="emailHelp" placeholder="Confirm password" style={{height: '46px',
width: '100%'}}/>

<div>
<button className="btn btn-primary rounded-pill mfirstbutton" type="submit" style={{height: '36px' ,width: '160px' , marginTop:'19px' }}>Create Account</button>
<button className="btn " type="submit" style={{height: '36px'  , marginTop:'19px',float:'right' }}>or Signin</button>
</div>
<button className="btn  rounded-pill buttontext" type="submit" style={{height: '38px' ,width: '100%' , marginTop:'35px',color:'black'}}> <FaFacebook/> Sign up with Facebook </button>
<button className="btn  rounded-pill buttontext" type="submit" style={{height: '38px' ,width: '100%' , marginTop:'10px',color:'black'}}> <FcGoogle/> Sign up with Google</button>      
  <div style={{display:'flex' , justifyContent:'center'}}> <p style={{height : '32px' , marginTop:'10px',color:'black'}} className='mfooter'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
    </div>    
        </div>
     </div>
        
      
    </div>
  )
}
