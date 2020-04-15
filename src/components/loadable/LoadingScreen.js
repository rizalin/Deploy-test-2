import React from 'react';

import { imagePath } from '../../utils/assetUtils';
import './loading-screen.scss';

export const LoadingScreen = (
  <div className="loading-screen">
    <img
      src={imagePath('Harisenin.com icon - Transparant.png')}
      alt="hari-senin"
    />
  </div>
);
