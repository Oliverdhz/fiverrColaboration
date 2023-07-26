import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import tw, { css, styled } from "twin.macro";

const smooth = tw`transition duration-300 ease-in-out transform`;

const Cards = ({ data, title, wideCard=false}) => {
  const cardRef = useRef(null);

  const Card = ({ name = '', tier = 0, address = '', phone = '', description = '', img }) => {
    return (
      <div tw="relative max-h-[100] lg:min-w-[330px] w-full lg:w-4/12 hover:scale-105 hover:cursor-pointer px-8 drop-shadow-md" css={[smooth]}>
        <div tw="w-full relative bg-gray-200 border border-gray-300 overflow-hidden sm:mr-10 mb-10 rounded-lg max-h-[100]">
          <div tw="flex justify-center items-center bg-white w-full h-full">
            <Image src={img} tw="aspect-4/3" alt="Carro" style={{ objectFit: '' }} />
          </div>
          <div tw="p-4">
            <h3 tw="mb-1 font-bold text-lg">{name}</h3>
            <p>
              {address} <br />
              {phone}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (                 
    <div tw="flex flex-col w-screen sm:w-3/4  -mx-8 sm:px-10 pt-5 max-w-screen-xl 3xl:mx-auto" css={[wideCard && tw`w-full`]}>
      <h4 tw="mt-6 px-8 text-3xl font-bold text-primary-700 capitalize">{title}</h4>
      <motion.div
        ref={cardRef}
        tw="flex w-full flex-wrap pt-8 overflow-x-hidden overflow-y-hidden"
        animate={{ height: true ? 'auto' : 370 }}
        transition={{ duration: 0.5, easeOutIn: [0.04, 0.62, 0.23, 0.98] }}
      >  
        {data.map((model, i) => (
          <Card {...model} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default Cards;
