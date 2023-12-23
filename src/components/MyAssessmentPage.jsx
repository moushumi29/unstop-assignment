import React from 'react'
import NewAssessment from './helper/NewAssessment'
import MathAssessment from './helper/MathAssessment'
import MultipleMail from './helper/MultipleMail'

const MyAssessmentPage = () => {
  return (
    <div style={{padding:"20px"}}>
      <div className='heading'>My Assessment</div>
      <div  className='assessment-box'>
      <NewAssessment/>
      <MathAssessment/>
      <MultipleMail/>
      </div>
      
    </div>
  )
}

export default MyAssessmentPage
