'use client';

import { useModalNameStore } from '../../store/modal-name.store';
import { useNamePlayerStore } from '../../store/name-player.store';
import './input.css';

const Input = () => {
  const { name, handleChange } = useNamePlayerStore();
  const { handleOpenModal } = useModalNameStore();

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
        onKeyUp={(e) => {
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
            alert('Enter your real name');
          }
        }}
      />
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
