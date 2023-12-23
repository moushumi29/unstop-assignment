import React from 'react'
import { BiMobile } from "react-icons/bi";
import Overview from './Overview';
import MyAssessmentPage from './MyAssessmentPage';

const AssessmentPage = () => {
  return (
    <div className='assessment-page'>
      <div className='top-bar'>
        <div className='text-wrapper'>
        <div className='asses-text'>Assessment</div>
        <div className='my-asses-text'>My Assessments</div>
        </div>
        <div>
        <BiMobile style={{fontSize:"24px"}}/>
        </div>
      </div>
      <Overview/>
      <MyAssessmentPage/>
    </div>
  )
}

export default AssessmentPage
