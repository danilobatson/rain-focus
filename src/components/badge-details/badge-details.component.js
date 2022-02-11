import React from 'react';
import './badge-details.styles.scss'
import { HiPencil } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { MdPrint } from "react-icons/md";


export const BadgeDetails = () => (
  <>
  <div className='card-header'>
    <h3>Badge Output</h3>
    <HiPencil className='pencil' size='2em'/>
  </div>
    <hr className="hr" />
    <p><b>First Name:</b> Allison</p>
    <p><b>Preferred First Name:</b> AI</p>
    <p><b>Last Name:</b> Profitt</p>
    <p><b>Company:</b> Bio-IT World</p>
    <p><b>Onsite - Badge Holders:</b> JVA</p>
    <p><b>Onsite - Aux:</b> 1</p>
    <br/>
    <div className='check-in'>
    <p className='check-in-p'><b>Check-in:</b>  09/16/16 7:51 AM</p>
        <FaTrash className='trash' size='1.4em'/>
        <MdPrint className='printer' size='1.4em'/>
    </div>

    </>
)
