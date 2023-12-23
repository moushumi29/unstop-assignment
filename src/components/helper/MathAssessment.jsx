import React from 'react'
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { HiMiniPaperClip } from "react-icons/hi2";
import lp from "../../assests/lp-mail.png"

const MathAssessment = () => {
  return (
    <div className='math-container'>
        <div className='icon-wrapper'>
            <PiSuitcaseSimpleLight className='icons-overview'/>
            <BsThreeDotsVertical style={{fontSize:"22px", color:"rgb(28, 85, 138)"}}/>
        </div>
        <div className='heading' style={{margin:"10px 0px"}}>Math Assessment</div>
        <div style={{borderBottom:"1px dashed rgb(179, 199, 216)", paddingBottom:"10px"}}>
            <span className='job-text'>Job</span>
            <span className='text'>
                <SlCalender/> 20 Apr 2023
            </span>
        </div>
        <div className='info-wrapper'>
            <div>
                <div className='zero-text'>00</div>
                <div className='text' style={{margin:"0px"}}>Duration</div>
            </div>
            <div>
                <div className='zero-text'>00</div>
                <div className='text' style={{margin:"0px"}}>Questions</div>
            </div>
            <div className='text-btn'>
                <HiMiniPaperClip/>
                <span> Share</span>
            </div>
            <img src={lp} alt='mail-lp' style={{width:"70px"}}/>
        </div>
      
    </div>
  )
}

export default MathAssessment
