import React from 'react'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { RxCross2 } from "react-icons/rx";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const AnimatedForm = ({ open, setOpen }) => {
    
  const handleClose = () => {
    setOpen(false);
  }
    
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <div className='dialog-wrapper'>
          <div className='heading-wrapper'>
            <div className='heading' style={{fontWeight:"700", fontSize:"22px"}}>Create new assessment</div>
            <div style={{fontSize:"24px"}} onClick={handleClose}><RxCross2/></div>
          </div>
          <div className='input-div'>
            <label>Name of assessment</label>
            <input type='text' placeholder='Type Here' />
          </div>
          <div className='input-div'>
            <label>Purpose of the assessment</label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className='input-div'>
            <label>Description</label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className='input-div'>
            <label>Skills</label>
            <div className='skill'>
              <div>UI/UX and Design <RxCross2/></div>
              <div>No. of Question <RxCross2/></div>
              <div>Web Development <RxCross2/></div>
              <div>UI/UX and Design <RxCross2/></div>
              <div>Web Development <RxCross2/></div>
            </div>
            <input type='text' placeholder='Type here'/>
          </div>
          <div className='input-div'>
            <label>Duration of assessment</label>
            <input type='time' placeholder='HH : MM'/>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default AnimatedForm
