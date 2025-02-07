'use client';

import { KeyboardEvent, MouseEvent } from 'react';
import { useModalNameStore } from '../../store/modal-name.store';
import { useNamePlayerStore } from '../../store/name-player.store';
import './input.css';

const Input = () => {
  const { name, handleChange } = useNamePlayerStore();
  const { handleOpenModal } = useModalNameStore();

  const handleClickMobile = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (
      ['estefany', 'esthefany', 'estefanhy', 'estefhany'].includes(
        name.toLowerCase()
      )
    ) {
      handleOpenModal(false);
      console.log(e);
      return;
    }

    if (
      !['estefany', 'esthefany', 'estefanhy', 'estefhany'].includes(
        name.toLowerCase()
      )
    ) {
      alert('Ingresa tu nombre real.');
      return;
    }
  };

  const handleClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.code === 'Enter' &&
      ['estefany', 'esthefany', 'estefanhy', 'estefhany'].includes(name)
    ) {
      handleOpenModal(false);
      return;
    }

    if (
      e.code === 'Enter' &&
      !['estefany', 'esthefany', 'estefanhy', 'estefhany'].includes(name)
    ) {
      alert('Ingresa tu nombre real.');
    }
  };

  return (
    <div className='wave-group'>
      <input
        required={true}
        type='text'
        className='input'
        value={name}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onKeyUp={handleClick}
      />
      <button
        onClick={handleClickMobile}
        className='lg:hidden w-[200px] mt-3 p-3 bg-slate-700 border border-blue-950 text-white'
      >
        Ok
      </button>
      <span className='bar'></span>
      <label className='label'>
        <span className='label-char' style={{ '--index': 0 }}>
          N
        </span>
        <span className='label-char' style={{ '--index': 1 }}>
          o
        </span>
        <span className='label-char' style={{ '--index': 2 }}>
          m
        </span>
        <span className='label-char' style={{ '--index': 3 }}>
          b
        </span>
        <span className='label-char' style={{ '--index': 4 }}>
          r
        </span>
        <span className='label-char' style={{ '--index': 5 }}>
          e
        </span>
      </label>
    </div>
  );
};

export default Input;
