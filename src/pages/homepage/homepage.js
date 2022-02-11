import React from 'react';
import {Card} from "../../components/card/card.component";
import {IndexCard} from "../../components/index-card/index-card.component";

import { BadgeDetails } from '../../components/badge-details/badge-details.component'
import { CalendarDetails } from '../../components/calendar-details/calendar-details.component'
import { TableDetails } from '../../components/table-details/table-details.component'

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
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
);

export default HomePage;
