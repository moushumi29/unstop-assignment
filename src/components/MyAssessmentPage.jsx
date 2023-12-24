import React, { useState } from 'react'
import NewAssessment from './helper/NewAssessment'
import MathAssessment from './helper/MathAssessment'
import MultipleMail from './helper/MultipleMail'
import AnimatedForm from './helper/AnimatedForm'

const MyAssessmentPage = () => {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
      setOpen(true);
    };

  return (
    <div style={{padding:"20px"}}>
      <div className='heading'>My Assessment</div>
      <div  className='assessment-box'>
      <NewAssessment handleOpen={handleClickOpen}/>
      <MathAssessment/>
      <MultipleMail/>
      </div>
      <AnimatedForm  open={open} setOpen={setOpen}/>
    </div>
  )
}

export default MyAssessmentPage
