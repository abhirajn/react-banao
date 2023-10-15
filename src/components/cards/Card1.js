import React from 'react'
import './Cards.css'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import {BiSolidShareAlt} from 'react-icons/bi'
export default function Card1() {
  return (
   
        <div className="card my-3" style={{}}>
  <img className='cardimgg card-img-top' src='https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1698019200&Signature=LQh7Y8TD6k~KmnKxB3bBv1HOqAl2gIw0cgBcWm83-ZN~154eQBa7AkuheCGIrTSUMy1Gw6ny3ZFONJOySrnKhDqXf4KSZAqT1CfBVZvhYEVOjOJW4lS6E5Ug9CuN~83bLFDpPdzL2AgEmqTp~a4PnFtGo8eB6Pgeq3gms0DZAqwtxsQZAoZ4VziakdKic66iHgoX~qg8ezJyZx4d4WDWe4hzm5rpGlLx5s46yN4jHhERXS9Xp0yo1eVRxKQRzPTmAhtm1SATbZr8IvLBbX5C5N~dS5voxaerB4J~TUclVWJzDHLSWBhbUSGzoQcdt1CePJH-6hF-v02gzaRcJrKkZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  alt="post photo" style={{height:'260px'}}/>
  <div className="card-body">
  <div className="text-wrapper card1text ">✍️ Article</div>
    <div className='d-flex'>
    <p className="card-title card1title">What if famous brands had regular fonts? Meet RegulaBrands!</p>
    <BsThreeDots size={30}/>
    </div>
    <p className="card-text carddes">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
    <div className=' '>
      <div className='userdiv d-flex'>
      <img src='https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1698019200&Signature=LhWeX4gn9VgyH0q8VohK1mfz0vbrbAB-RI-L1mIWCZhKOIf7sO~s5vzZ-Qxfpsf9l4WI8OP8w2hRR3Hf9VsVAVa7xFjVE1ruBmVpIxdmRKvMxM49SxT7W6jO2dRJw7dYscdJlw7gdF9GIs1G4qemc~TS-TYzm1ZcKE2ucEknM3bHsu8sOctmCvafvP4AKAQyO4n5tTGSoOvjY~i4W1RDxXgT8BqEVayaMCDO9vL8IECd2K0zPbjnM1k1mORmRt2EXXxTwJHyvMU-6TPCyivkUls6ZEy6E5uq69ax3l4yiJgoohLDtrm0klj5woPvP3x7mSdCCrMV36CT~vNB1jdWRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className='cardimg rounded-circle'/>
      <p className='username mt-3 mx-2'>Sarthak Kamra</p>
      </div>
      <div className='views mt-3'><AiOutlineEye size={20} />1.4k views <BiSolidShareAlt size={20} style={{marginLeft:'4px'}}/></div>
      
    </div>
  </div>
</div>
   
  )
}
