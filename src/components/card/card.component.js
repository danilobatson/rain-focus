import React from 'react';
import './card.styles.scss'
import { BadgeDetails } from "../badge-details/badge-details.component";

export const Card = ({children}) => (
  <div class="container">
    <a class="card3" href="#">
      {children}
      <div class="dimmer"></div>
    </a>
  </div>
);

