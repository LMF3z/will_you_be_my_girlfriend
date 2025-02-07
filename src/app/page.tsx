'use client';

import { useEffect, useState } from 'react';

import Input from '../lib/components/inputs/Input';
import { useModalNameStore } from '../lib/store/modal-name.store';
import { useNamePlayerStore } from '../lib/store/name-player.store';
import screens from '../lib/screens';
import Button from '../lib/components/button/Button';
import {
  generateNumBetweenParams,
  getPositionImages,
} from '@/lib/utils/functions';
import Image from 'next/image';
import { handleSendEmail } from '@/lib/utils/sned-email';

export default function Home() {
  const { name } = useNamePlayerStore();
  const { handleOpenModal, isOpen } = useModalNameStore();

  const [positionBtnNo, setPositionBtnNo] = useState({
    top: '40%',
    left: '30%',
  });
  const [positionScapeImage, setPositionScapeImage] = useState({
    top: '40%',
    left: '30%',
  });
  const [widthActualScreen, setWidthActualScreen] = useState<number>(0);
  const [showScapeImage, setShowScapeImage] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);
  const [numImages, _] = useState<number[]>(
    [...Array(100 - 0).keys()].map((x) => x + 100)
  );

  useEffect(() => {
    const screen = window.screen.availWidth;

    setWidthActualScreen(screen);

    if (screen < screens.mobile) {
      setPositionBtnNo({
        ...positionBtnNo,
        left: '10%',
      });
    } else {
      setPositionBtnNo({
        ...positionBtnNo,
        left: '30%',
      });
    }
  }, []);

  useEffect(() => {
    if (name === '') {
      handleOpenModal(true);
    }
  }, [name]);

  const handleHover = (e: any) => {
    const generatedTop = generateNumBetweenParams();
    const generatedLeft = generateNumBetweenParams();

    if (
      widthActualScreen < screens.mobile &&
      generatedTop < 70 &&
      generatedLeft < 70
    ) {
      setPositionBtnNo({
        top: `${String(generatedTop)}%`,
        left: `${String(generatedLeft)}%`,
      });
      setPositionScapeImage({
        top: `${String(generatedTop)}%`,
        left: `${String(generatedLeft)}%`,
      });
      setShowScapeImage(true);
    } else if (
      widthActualScreen > screens.mobile &&
      generatedTop < 80 &&
      generatedLeft < 80
    ) {
      setPositionBtnNo({
        top: `${String(generatedTop)}%`,
        left: `${String(generatedLeft)}%`,
      });
      setPositionScapeImage({
        top: `${String(generatedTop)}%`,
        left: `${String(generatedLeft)}%`,
      });
      setShowScapeImage(true);
    } else {
      handleHover(e);
    }

    setTimeout(() => {
      setShowScapeImage(false);
    }, 1000);
  };

  const getCurrentPositionImages = () => {
    const objPos = getPositionImages(widthActualScreen);

    if (objPos !== null) {
      return objPos;
    } else {
      getCurrentPositionImages();
    }
  };

  const handleClickYes = () => {
    setAccept(true);
    handleSendEmail(name);

    setTimeout(() => {
      setAccept(false);
    }, 20000);
  };

  return (
    <div className='w-full h-screen flex flex-col justify-between items-center px-5 py-5 gap-5'>
      {/* modal for name player */}
      {isOpen && (
        <div className='absolute z-50 top-0 left-0 w-full h-full bg-blue-950 flex justify-center items-center'>
          <Input />
        </div>
      )}

      <h1>¿Te gistaría ir por un café conmigo? {name}</h1>

      <div className='w-full h-full'>
        <Button
          startLabel='No, paso.'
          finalLabel='No, I pass. 2'
          style={positionBtnNo}
          onMouseMove={handleHover}
          classes='z-10'
        />
        <Button
          startLabel='Si, me gustaria.'
          finalLabel='Si, me gustaria. 2'
          style={{
            top: '40%',
            right: '10%',
          }}
          onClick={handleClickYes}
        />
      </div>

      {showScapeImage && (
        <div className='z-50'>
          <Image
            src={'/venellope.gif'}
            alt='logo'
            width={350}
            height={350}
            className='z-50 absolute rounded-lg'
            style={positionScapeImage}
          />
        </div>
      )}

      {accept && (
        <div className='z-50'>
          <Image
            src={'/ednamoda.gif'}
            alt='logo'
            width={500}
            height={500}
            className='z-50'
          />
        </div>
      )}

      {accept
        ? numImages.map((_, index) => {
            const styles = getCurrentPositionImages();

            return (
              <Image
                key={index}
                src={'/success.gif'}
                alt='logo'
                width={300}
                height={300}
                className='absolute top-[40%] right-[30%] w-[250px] h-[250px] z-40'
                style={styles}
              />
            );
          })
        : null}
    </div>
  );
}
