import React from 'react';
import './index-card.styles.scss'
import { BadgeDetails } from "../badge-details/badge-details.component";

export const IndexCard = ({children}) => (
  <div class="container">
    <a class="index-card" href="#">
      {children}
      <div class="dimmer"></div>
    </a>
  </div>
);
