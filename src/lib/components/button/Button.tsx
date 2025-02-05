'use client';

import { CSSProperties, MouseEventHandler } from 'react';

// import './button.css';

interface Props {
  startLabel: string;
  finalLabel: string;
  style?: CSSProperties;
  classes?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseMove?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const Button = ({
  startLabel,
  style,
  classes,
  onClick,
  onMouseMove,
}: Props) => {
  return (
    <button
      style={style}
      onClick={onClick}
      onMouseMove={onMouseMove}
      className={`absolute p-5 bg-slate-700 border border-blue-950 text-white ${classes}`}
    >
      {startLabel}
    </button>
    // <div
    //   className='border border-red-600'
    //   style={style}
    //   onMouseMove={onMouseMove}
    // >
    //   <div className='buttons'>
    //     <button className='btn'>
    //       <span></span>
    //       <p
    //         data-start={startLabel}
    //         data-text={startLabel}
    //         data-title={finalLabel}
    //       ></p>
    //     </button>
    //   </div>
    // </div>
  );
};

export default Button;
