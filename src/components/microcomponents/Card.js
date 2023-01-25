import React from 'react'
import Heading from './Heading';

function Card({background, height}) {
  return (
    <div className={`w-full mt-3 p-4 bg-${background.toString()} h-[230px] rounded-2xl shadow-aestheticShadow`}>
      <Heading title="" />
    </div>
  );
}

export default Card