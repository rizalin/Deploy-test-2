import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAccordionToggle } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './custom-dropdown.scss';

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
export const CustomMenu = React.forwardRef(
  ({ className, 'aria-labelledby': labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          left: '-105px',
          minWidth: '9rem',
          top: '30px'
        }}
        className={className}
        aria-labelledby={labeledBy}
      >
        <div className="child-dropdown">
          <div>
            <NavLink to="/">Preview</NavLink>
          </div>
          <div>
            <NavLink to="/">Edit</NavLink>
          </div>
          <div>
            <NavLink to="/">Non-aktif</NavLink>
          </div>
          <div>
            <NavLink to="/">Hapus</NavLink>
          </div>
        </div>
      </div>
    );
  }
);

export function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <span onClick={decoratedOnClick} className="custom-toggle">
      {children}
    </span>
  );
}

export function FaqToggle({ eventKey }) {
  const OnClick = useAccordionToggle(eventKey);

  return (
    <div className="accordion-header" onClick={OnClick}>
      <span>Kamu bisa apasih</span>{' '}
      <span>
        <FontAwesomeIcon icon="chevron-down" />{' '}
      </span>
    </div>
  );
}

export function InboxToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <div>
      <span
        onClick={decoratedOnClick}
        style={{ color: '#0dad8e', cursor: 'pointer' }}
      >
        {children}
      </span>
      <span>
        <FontAwesomeIcon icon="chevron-down" className="ml-2" color="#0dad8e" />{' '}
      </span>
    </div>
  );
}
