import React, { useState, useEffect } from 'react';
import './table-details.styles.scss'
import { HiPencil } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";


export const TableDetails = () => {
  const [allChecked, setAllChecked] = useState(false)
  const [check, setCheck] = useState(false)

  const selectAll = () => {
    setAllChecked(!allChecked)
    setCheck(!check)
  }

  const select = () => {
    setAllChecked(!allChecked)
    setCheck(!check)
  }


  return (
  <>
    <div className='header'>
        <input type="checkbox" checked={allChecked} onChange={selectAll}  />
      <span class="checkmark"></span>
      <span className="sessions">File Name</span>
      <span className="sessions">File Type</span>
      <span className="sessions">File Create Date</span>
      <span className="sessions">Published Status</span>
      <span className="sessions">Sessions Name</span>
      <span className="sessions">Sessions Code</span>
      <span className="sessions">Sessions Status</span>


    </div>
    <hr className="hr-top" />

    <p className='table-data'>
        <input type="checkbox" checked={check} onChange={select}/>
      <span class="checkmark"></span>
      <span>New Microsoft PowerPoint Presentation_150473403361001aMvB.pptx</span>
      <span> Presentation  </span>
      <span> September 06, 2017 | 02:40 PM</span>
      <span>Not Published</span>
      <span>Reject Data Integration until Column-oriented databases</span>
      <span>BR1000</span>
      <span>Accepted</span>
    </p>
    <hr className="hr" />

    <p className='table-data'>
        <input type="checkbox" checked={check} />
      <span class="checkmark"></span>
      <span>Portugal (2)_15121542334140018toT.pptx</span>
      <span> Presentation  </span>
      <span> December 01, 2017 | 10:50 AM</span>
      <span>Not Published</span>
      <span>Promise Data virtualization for Hadoop</span>
      <span>BR1003</span>
      <span>Accepted</span>
    </p>
    <hr className="hr" />

    <p className='table-data'>
        <input type="checkbox" checked={check} />
      <span class="checkmark"></span>
      <span>Portugal (2)_1512542334140018toT_1512162178268001wXbS.pptx</span>
      <span> Presentation  </span>
      <span> December 01, 2017 | 01:02 PM</span>
      <span>Not Published</span>
      <span>Promise Data virtualization for Hadoop</span>
      <span>BR1003</span>
      <span>Accepted</span>
    </p>
    <hr className="hr" />

    <p className='table-data'>
        <input type="checkbox" checked={check} />
      <span class="checkmark"></span>
      <span>Session Scanning Training.pptx</span>
      <span> Presentation  </span>
      <span> April 16, 2018 | 10:36 AM</span>
      <span>Not Published</span>
      <span>Reach in-memory data fabric unlike PIG</span>
      <span>BR1005</span>
      <span>Accepted</span>
    </p>
    <hr className="hr" />

    <p className='table-data'>
        <input type="checkbox" checked={check} />
      <span class="checkmark"></span>
      <span>PPT TEST2_1498603851830001mOeD_1517269636907001D3OS.pptx</span>
      <span> Presentation  </span>
      <span> April 16, 2018 | 12:50 PM</span>
      <span>Not Published</span>
      <span>Reach in-memory data fabric unlike PIG</span>
      <span>BR1005</span>
      <span>Accepted</span>
    </p>
    <hr className="hr" />

    <p className='table-data'>
        <input type="checkbox" checked={check} />
      <span class="checkmark"></span>
      <span>New Microsoft PowerPoint Presentation_150473403361001aMvB.pptx</span>
      <span> Presentation  </span>
      <span> July 11, 2017 | 07:13 AM</span>
      <span>Participate Stream analytics throughout SkyTree</span>
      <span>Not Published</span>
      <span>BR1019</span>
      <span>Accepted</span>
    </p>
    <hr className="hr" />

    <p className='table-data'>
        <input type="checkbox" checked={check} />
      <span class="checkmark"></span>
      <span>Sweet Preso.pptx</span>
      <span> Presentation  </span>
      <span> November 13, 2017 | 02:59 PM</span>
      <span>Published</span>
      <span>Add Data intergration upon Column-oriented databases</span>
      <span>BR1020</span>
      <span>Accepted</span>
    </p>

    </>
  )
}
