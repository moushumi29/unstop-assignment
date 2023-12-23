import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LuClipboardSignature } from "react-icons/lu";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { CiMedicalClipboard } from "react-icons/ci";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='box'>
                <MdOutlineDashboard className='icon' />
                <div>Dashboard</div>
            </div>
            <div className='box active'>
                <LuClipboardSignature className='icon' />
                <div>Assessment</div>
            </div>
            <div className='box'>
                <MdOutlineLibraryAddCheck className='icon' />
                <div>My Library</div>
            </div>
            <div className='box dashed'>
                <div className='highlight'>Admin</div>
                <CiMedicalClipboard className='icon'/>
                <div>Round Status</div>
            </div>
        </div>
    )
}

export default Sidebar
