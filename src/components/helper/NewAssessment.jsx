import React from 'react'
import { IoMdAdd } from "react-icons/io";

const NewAssessment = ({ handleOpen }) => {
   

  return (
    <div className='box-container' onClick={handleOpen}>
      <div className='box-wrapper'>
        <IoMdAdd className='add-icon'/>
        <div className='heading' style={{marginBottom:"10px"}}>New Assessment</div>
        <div className='text'>From here you can add questions of multiple types like MCQs, subjective (text or paragraphs)!</div>
      </div>
    </div>
  )
}

export default NewAssessment
