import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import AnimatedForm from '../AnimatedForm';

const NewAssessment = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
    };
  return (
    <div className='box-container' onClick={handleClickOpen}>
      <div className='box-wrapper'>
        <IoMdAdd className='add-icon'/>
        <div className='heading' style={{marginBottom:"10px"}}>New Assessment</div>
        <div className='text'>From here you can add questions of multiple types like MCQs, subjective (text or paragraphs)!</div>
      </div>
      <AnimatedForm open={open} handleClose={handleClose}/>
    </div>
  )
}

export default NewAssessment
