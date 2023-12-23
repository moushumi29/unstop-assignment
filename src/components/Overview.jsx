import React from 'react'
import { SiDatabricks } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import { PiPaperclipHorizontalBold } from "react-icons/pi";

const Overview = () => {
  return (
    <div className='overview-container'>
      <div className='heading'>Assessments Overview</div>
      <div className='assessment-wrapper'>
        <div className='block'>
            <div className='title'>Total Assessment</div>
            <div className='inner-block' style={{paddingTop:"5px"}}>
                <div><SiDatabricks className='icons-overview' /></div>
                <div className='digit'>34</div>
            </div>
        </div>
        <div className='block' style={{paddingRight:"80px"}}>
            <div className='title'>Candidates</div>
            <div className='inner-block'>
                <div className='inner-wrap'>
                    <BsPersonFill className='icons-overview'/>
                    <div style={{paddingBottom:"10px"}}>
                    <div className='digit'>11,145 <span className='special-digit'>+89</span></div>
                    <div className='inner-text'>Total Candidate</div>
                    </div>
                </div>
                <div>
                    <div className='digit'>1,14 <span className='special-digit'>+89</span></div>
                    <div className='inner-text'>Who Attempted</div>
                </div>
            </div>
            
            {/*  */}
            {/* <PiPaperclipHorizontalBold /> */}
        </div>
        <div className='block'>
            <div className='title'>Candidates Source</div>
            <div className='inner-block' style={{paddingTop:"5px"}}>
            <div className='inner-wrap'>
                    <VscGlobe className='icons-overview' style={{color:"red", backgroundColor:"rgb(250, 234, 237)"}}/>
                    <div style={{paddingBottom:"10px"}}>
                    <div className='digit'>11,000 <span className='special-digit'>+89</span></div>
                    <div className='inner-text'>E-mail</div>
                    </div>
                </div>
                <div style={{borderRight:"1px solid lightgray", paddingRight:"20px"}}>
                    <div className='digit'>145 <span className='special-digit'>+89</span></div>
                    <div className='inner-text'>Social Share</div>
                </div>
                <div style={{paddingRight:"80px"}}>
                    <div className='digit'>145 <span className='special-digit'>+89</span></div>
                    <div className='inner-text'>Unique Link</div>
                </div>
            </div>
            
        </div>
        <div className='block' style={{border:"none"}}>
                <div className='title'>Total Purpose</div>
                <div className='inner-block'>
                <PiPaperclipHorizontalBold className='icons-overview'/>
                <div className='digit'>11</div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Overview
