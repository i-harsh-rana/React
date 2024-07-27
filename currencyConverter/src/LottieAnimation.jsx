
import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1722086796804.json';

const LottieAnimation = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
    <div style={{ width: 650, height: 650}}>
      <Lottie animationData={animationData} />
    </div>
    </div>
    </>
  );
};

export default LottieAnimation;
