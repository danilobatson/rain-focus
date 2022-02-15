import React from 'react';
import {Card} from "../../components/card/card.component";
import {IndexCard} from "../../components/index-card/index-card.component";
import Drawer from '@mui/material/Drawer';
import { purple } from '@mui/material/colors';
import { HiPencil } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { BadgeDetails } from '../../components/badge-details/badge-details.component'
import { CalendarDetails } from '../../components/calendar-details/calendar-details.component'
import { TableDetails } from '../../components/table-details/table-details.component'

import './homepage.styles.scss';

const HomePage = () => {

  return (
  <div className='homepage'>
    <Drawer variant="permanent"
        anchor="left" sx={{
        '& .MuiDrawer-paper': {
          width: '7%',
          boxSizing: 'border-box',
        },
        }}>
        <div style={{display: 'flex', width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', }}>
        <HiPencil className='edit' size='1.4em' />
          <FaTrash className='delete' size='1.4em' />
          <HiPencil className='edit' size='1.4em' />
          <FaTrash className='delete' size='1.4em' />
          <HiPencil className='edit' size='1.4em' />
          <FaTrash className='delete' size='1.4em' />
          <HiPencil className='edit' size='1.4em' />
          <FaTrash className='delete' size='1.4em' />
          <HiPencil className='edit' size='1.4em' />
          <FaTrash className='delete' size='1.4em' />
          <HiPencil className='edit' size='1.4em' />
          <FaTrash className='delete' size='1.4em' />
          <HiPencil className='edit' size='1.4em' />
          <FaTrash className='delete' size='1.4em' />
        </div>
      </Drawer>
    <Card>
      <BadgeDetails />
    </Card>

    <IndexCard >
      <CalendarDetails />
    </IndexCard>

    <IndexCard >
      <TableDetails />
    </IndexCard>
  </div>

  )
}


export default HomePage;
