import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import SvgDecoratorBlob1 from "./../../images/svg-decorator-blob-9.svg";
import { Container } from "./Layouts";
import Select4 from './Select4.js'
import { PrimaryButton as PrimaryButtonBase } from "./Buttons.js";

const PrimaryBackgroundContainer = tw.div` p-4 md:p-10 bg-[#ffffffBE] rounded-xl relative shadow-xl`

const SearcherContainer = tw.div`flex flex-col items-center`;

const SelectRow = styled.div`
  ${tw`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7`}`;


const SelectContainer = tw.div`inline-block justify-center items-center`;
// const SelectContainer = tw.div`flex items-center justify-center`;


/*
const PrimaryBackgroundContainer = tw.div`w-3/4 py-6 lg:py-8 xl:py-16 2xl:py-20 bg-white rounded-xl relative shadow-xl`

const SearcherContainer = tw.div`flex justify-center items-center max-w-screen-xl mx-auto `;

const Row = tw.div`px-4 sm:px-16 mx-auto relative z-10 flex-col lg:flex-row text-center lg:text-center`;
const SelectRow = tw.div`grid grid-cols-1 items-center justify-center md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-2 px-4 sm:px-16 mx-auto relative z-10 flex-col`;
const SelectContainer = tw.div`relative inline-block mx-2 items-center justify-center my-12`;

const ColumnContainer = tw.div`max-w-4xl mb-5`
const TextContainer = tw(ColumnContainer)`font-bold`;
const Subheading = tw.h6`text-primary-500 lg:text-5xl `;


*/

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`relative md:text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-500 opacity-10`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-500 opacity-15`

export default ({
  subheading = "",
  primaryButtonText = "Buscar",
  primaryButtonUrl = "https://timerse.com",

  pushDownFooter = true,
  eMarcas = [
    // ...
  ],

  eModelos = [
    // ...
  ],

  eAnos = [
    // ...
  ]
}) => {
  return (
    <PrimaryBackgroundContainer>
      <Container>
        <SearcherContainer>
          <SelectRow>
            <SelectContainer tw="lg:col-span-2">
              <Select4 label="Marca" optiones={eMarcas} />
            </SelectContainer>
            <SelectContainer tw="lg:col-span-3">
              <Select4 label="Modelo" optiones={eModelos} />
            </SelectContainer>
            <SelectContainer>
              <Select4 label="Año" optiones={eAnos} />
            </SelectContainer>
          <PrimaryButton buttonRounded={false} as="a" href={primaryButtonUrl}>
            {primaryButtonText}
          </PrimaryButton>
          </SelectRow>
        </SearcherContainer>
      </Container>
      </PrimaryBackgroundContainer>
  );
};
