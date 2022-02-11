import React from 'react';
import './calendar-details.styles.scss'
import { HiPencil } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";


export const CalendarDetails = () => (
  <>
    <div className='header'>
      <h3 className='day'>Sunday</h3>
      <span className='date'>July 15, 2018</span>
    </div>
    <hr className="hr-top" />
    <p>
      <span className='time'>07:00 AM  </span>
      <span className='vertical'> |  </span>
      <a href="#" className="sessions">Find Sessions.</a>
    </p>
    <hr className="hr" />

    <p>
      <span style={{ display: 'flex' }}>
        <span className='time' style={{ flexGrow: 0.35}}>08:00 AM  </span>
        <span className='vertical' style={{ flexGrow: 0.35 }}> |  </span>

        <span style={{ display: 'flex', flexDirection: 'column', flexGrow: 80}}>
          <span>
            BR1058 Exchange Search and knowledge discovery until Storage Technologies
            </span>
            <span>
              08:00AM - 08:45AM
          </span>
        </span>

        <HiPencil className='edit' size='1.6em' style={{ flexGrow: 1 }}/>
        <FaTrash className='delete' size='1.4em' style={{ flexGrow: 1 }} />
      </span>
    </p>
    <hr className="hr" />

    <p>
      <span className='time'>09:00 AM  </span>
      <span className='vertical'> |  </span>
      <a href="#" className="sessions">Find Sessions.</a>
    </p>
    <hr className="hr" />

    <p>
      <span style={{ display: 'flex' }}>
        <span className='time' style={{ flexGrow: 0.35 }}>08:00 AM  </span>
        <span className='vertical' style={{ flexGrow: 0.35 }}> |  </span>

        <span style={{ display: 'flex', flexDirection: 'column', flexGrow: 80 }}>
          <span>
            BR1058 Exchange Search and knowledge discovery until Storage Technologies
          </span>
          <span>
            10:00AM - 10:45AM
          </span>
        </span>

        <HiPencil className='edit' size='1.6em' style={{ flexGrow: 1 }} />
        <FaTrash className='delete' size='1.4em' style={{ flexGrow: 1 }} />
      </span>
    </p>
    <hr className="hr" />

    <p>
      <span className='time'>11:00 AM  </span>
      <span className='vertical'> |  </span>
      <a href="#" className="sessions">Find Sessions.</a>
    </p>

  </>
)
