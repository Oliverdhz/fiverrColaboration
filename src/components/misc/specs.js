import React from 'react';
import tw from 'twin.macro';

const MainSpecs = tw.div`w-2/3`;

const ContainerTitle = tw.div`flex flex-row gap-2`;
const Title = tw.h2`text-3xl font-bold`;

const MainImage = tw.img`w-128 object-contain h-96`;
const ContImageCar = tw.div`w-full flex justify-center items-center mb-4`;

const BrandsContainer = tw.div` my-8 mx-auto rounded-xl max-w-screen-xl`;
const BrandGrid = tw.div`flex flex-col gap-8 my-4 md:grid md:grid-cols-3 sm:grid-cols-3 grid grid-cols-1`;
const BrandItem = tw.div`flex items-center gap-4 max-w-xs mx-auto md:w-full`;
const BrandImage = tw.img`w-14 h-14 object-contain`;
const BrandInfo = tw.div`flex flex-col`;

const ContainerDesc = tw.div`my-8 `;
const Maintitle = tw.h2`text-lg font-bold my-3`;
const Subtitle = tw.h3`text-base font-semibold`;
const Response = tw.p`text-base text-gray-700 mb-4`;
const ContOrden = tw.div`grid grid-cols-2 gap-4`;

const SpecItem = ({ title, response }) => (
    <div>
      <Subtitle>{title}</Subtitle>
      <Response>{response}</Response>
    </div>
  );

  const ResponseItem = ({ response }) => (
    <Response><li>{response}</li></Response>

  );

const Specs = ({SpecsData, specsDesc}) => {
  return (
    <MainSpecs>
    <ContainerTitle>
      <Title>Specifications</Title>
      {/* Contenido específico para las especificaciones */}
    </ContainerTitle>
    <ContImageCar>
    <MainImage src="https://www.pngkey.com/png/full/219-2191140_2015-hyundai-tucson-front-hyundai-tucson-white-background.png" alt="Imagen Specs" />
    </ContImageCar>
    <BrandsContainer>
      <BrandGrid>
      {SpecsData.map((data, index) => (
      <BrandItem key={index}>
        <BrandImage src={data.imageSpecsGen} alt={`Logo Marca ${index + 1}`} />
        <BrandInfo>
          <h3 tw="text-sm font-bold">{data.titleSpecsGen}</h3>
          <p tw="text-sm text-gray-600">{data.subtitleSpecsGen}</p>
        </BrandInfo>
      </BrandItem>
        ))}
      </BrandGrid>
    </BrandsContainer>
    <ContainerDesc>
        {specsDesc.map((spec, index) => (
          <React.Fragment key={index}>
            <Maintitle>{spec.maintitle}</Maintitle>
            <ContOrden style={spec.items.some(item => item.title) ? { borderBottom: '1px solid #E2E8F0' } : null}>
              {spec.items.map((item, itemIndex) => {
                if (item.title) {
                  return (
                    <SpecItem key={itemIndex} title={item.title} response={item.response} />
                  );
                } else {
                  return (
                    <ResponseItem key={itemIndex} response={item.response} />
                  );
                }
              })}
            </ContOrden>
          </React.Fragment>
        ))}
      </ContainerDesc>
    </MainSpecs>
    
  );
};

export default Specs;
