import React from 'react';
import tw from 'twin.macro';
import styled from "styled-components";
import Header from "./../headers/Light.js";
import Buscador from './../misc/Searcher.js';
import bg from './../../../public/8.jpg';



const HeroSection = styled.div(props => [
  `background-image: url(${bg.src});`,
  tw`w-[100vw] h-[500px] flex bg-white -mx-8 max-w-screen-3xl 3xl:mx-auto bg-no-repeat bg-cover bg-bottom`
]);

const HeroImage = styled.img`
  ${tw`w-full h-full object-cover`}`;

const SectionLeft = tw.div`flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto`;

const Heading = tw.h1`font-black text-white text-3xl md:text-5xl leading-snug max-w-3xl`;
const HighlightedText = tw.span`bg-primary-500 text-white px-4 md:text-6xl transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block text-white text-lg font-bold  my-4`;



const Hero = () => {
  return (
    <>
    <Header />
    <HeroSection>
      {/* <HeroImage src={bg} /> */}
        <SectionLeft>
      <Heading>En AutoPanas sabemos de <HighlightedText>Precios.</HighlightedText></Heading>
      <Description>Herramienta para encontrar el precio justo de cualquier vehiculo en el mercado dominicano</Description>
      <Buscador/>
      </SectionLeft>
    </HeroSection>
    </>
  );
};

export default Hero;
