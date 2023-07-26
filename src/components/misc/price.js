import React from 'react';
import tw from 'twin.macro';
import styled from "styled-components";
import { Doughnut } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const MainPrice = tw.div`w-2/3`;

const ImgButtonContainer = tw.div`flex flex-col md:flex-row gap-4`;
const ChartMainContainer = tw.div`flex justify-center items-center rounded-lg w-1/2`;
const ChartContainer = tw.div`w-full h-96`;

const ContainerBotShow = tw.div`flex w-full justify-end mb-4`;
const ShareButton = tw.button`hover:shadow-sm text-blue-400 font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105`; // Posicionamos el botón en la parte superior derecha
const SelectedButtonText = tw.p`bg-blue-200 text-blue-800 pl-3 pr-3 py-2 inline-block rounded`;

const Image = tw.img`w-full h-full object-contain `;
const ButtonGroupImage = tw.div`flex flex-col gap-4 my-10 w-1/2`;
const WrapButton = tw.div`flex flex-row gap-4 justify-center w-full`;

const Button = tw.button`hover:shadow-sm text-blue-400 font-bold py-2 px-4 rounded-lg self-end transition duration-200 ease-in-out transform hover:scale-105`;


const Price = ({  }) => {

    return (
        <MainPrice>
            <ContainerBotShow>
            <ShareButton>Compartir</ShareButton>
            <SelectedButtonText>23.1%</SelectedButtonText>
            </ContainerBotShow>

            <ImgButtonContainer>
              <ButtonGroupImage>
              <Image src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/11436/2017-Hyundai-Tucson-front_11436_032_2400x1800_SA5_nologo.png?downsize=1000:*" alt="Imagen" />
                <WrapButton>
                <Button>Cambiar opciones</Button>
                <Button>Ver imágenes</Button>
                </WrapButton>
              </ButtonGroupImage>
              <ChartMainContainer>
              <ChartContainer>
              {/* Agregamos el gráfico circular aquí */}
              </ChartContainer>
              </ChartMainContainer>
            </ImgButtonContainer>

      </MainPrice>
  );
};

export default Price;