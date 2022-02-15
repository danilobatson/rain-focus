import React, { useState, useEffect } from 'react';
import './table-details.styles.scss'
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';


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
      <table style={{ width: 'auto'}}>
        <tr>
          <th className="sessions" style={{ width: 'auto' }}>
            <Checkbox
              className='check'
              checked={allChecked} onChange={selectAll}
              sx={{
                color: purple[800],
                '&.Mui-checked': {
                  color: purple[600],
                },
                '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
              }}
            />
          </th>

          <th className="sessions" style={{ width: '10%' }}>File Name</th>
          <th className="sessions" style={{ width: 'auto' }}>File Type</th>
          <th className="sessions" style={{ width: '12%' }}>File Create Date</th>
          <th className="sessions" style={{ width: '6%' }}>Published Status</th>
          <th className="sessions" style={{ width: 'auto' }}>Sessions Name</th>
          <th className="sessions" style={{ width: '6%' }}>Sessions Code</th>
          <th className="sessions" style={{ width: '6%' }}>Sessions Status</th>
        </tr>
        <tr>
          <Checkbox
            checked={check} onChange={select}
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
              '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
            }}
          />
          <td>New Microsoft PowerPoint Presentation_150473403361001aMvB.pptx</td>
          <td> Presentation  </td>
          <td> September 06, 2017 | 02:40 PM</td>
          <td>Not Published</td>
          <td>Reject Data Integration until Column-oriented databases</td>
          <td>BR1000</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <Checkbox
            checked={check} onChange={select}
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
              '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
            }}
          />          <td>Portugal (2)_15121542334140018toT.pptx</td>
          <td> Presentation  </td>
          <td> December 01, 2017 | 10:50 AM</td>
          <td>Not Published</td>
          <td>Promise Data virtualization for Hadoop</td>
          <td>BR1003</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <Checkbox
            checked={check} onChange={select}
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
              '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
            }}
          />          <td>Portugal (2)_1512542334140018toT_1512162178268001wXbS.pptx</td>
          <td> Presentation  </td>
          <td> December 01, 2017 | 01:02 PM</td>
          <td>Not Published</td>
          <td>Promise Data virtualization for Hadoop</td>
          <td>BR1003</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <Checkbox
            checked={check} onChange={select}
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
              '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
            }}
          />          <td>Session Scanning Training.pptx</td>
          <td> Presentation  </td>
          <td> April 16, 2018 | 10:36 AM</td>
          <td>Not Published</td>
          <td>Reach in-memory data fabric unlike PIG</td>
          <td>BR1005</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <Checkbox
            checked={check} onChange={select}
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
              '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
            }}
          />          <td>PPT TEST2_1498603851830001mOeD_1517269636907001D3OS.pptx</td>
          <td> Presentation  </td>
          <td> April 16, 2018 | 12:50 PM</td>
          <td>Not Published</td>
          <td>Reach in-memory data fabric unlike PIG</td>
          <td>BR1005</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <Checkbox
            checked={check} onChange={select}
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
              '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
            }}
          />          <span class="checkmark"></span>
          <td>Presentation1_1499782389871001Qvcf.pptx</td>
          <td> Presentation  </td>
          <td> July 11, 2017 | 07:13 AM</td>
          <td>Not Published</td>
          <td>Participate Stream analytics throughout SkyTree</td>
          <td>BR1019</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <Checkbox
            checked={check} onChange={select}
            sx={{
              color: purple[800],
              '&.Mui-checked': {
                color: purple[600],
              },
              '& .MuiSvgIcon-root': { fontSize: '1.17rem' }
            }}
          />          <td>Sweet Preso.pptx</td>
          <td> Presentation  </td>
          <td> November 13, 2017 | 02:59 PM</td>
          <td>Published</td>
          <td>Add Data intergration upon Column-oriented databases</td>
          <td>BR1020</td>
          <td>Accepted</td>
        </tr>
      </table>

    </>
  )
}
