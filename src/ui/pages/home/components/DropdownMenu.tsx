import React, { useRef, useState } from 'react';

import useOutclick from '../../../../utils/useOutclick';

import forwardIcon from '../../../images/forward-icon.png';

type DropdownProps = React.PropsWithChildren<{
  title: string;
}>

const DropdownMenu: React.FC<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useOutclick(ref, isOpen, toggleIsOpen);

  return (
    <div
      ref={ref}
      key={props.title}
      className="filter__wrapper"
      onClick={toggleIsOpen}
    >
      <p className="filter__name">
        {props.title}
      </p>
      <img
        src={forwardIcon}
        className="filter__icon"
      />
      {isOpen && props.children}
    </div>
  );
};

export default DropdownMenu;
