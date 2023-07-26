import React from 'react'
import tw from 'twin.macro';

const MainSafety = tw.div`justify-start w-2/3`;

const MainTitle = tw.h2`text-3xl font-bold`;
const ContainerTitle = tw.div`flex flex-row gap-2`;
const Subtitle = tw.p`text-3xl font-bold`;

const ContextraTitle = tw.div`flex flex-row gap-2 my-4`;
const ExtraTitle = tw.h2`text-xl font-semibold`;
const ExtraSubtitle = tw.p`text-xl font-semibold`;

const ParaTitle = tw.h3`text-lg font-bold my-3`;
const Paragraph = tw.p`text-base text-gray-700 mb-4`;


const Safety = ({ vehicleName, vehicleYear, textSafety }) => {
    return (
        <MainSafety>
    <ContainerTitle>
      <MainTitle>Seguridad de {vehicleName}</MainTitle>
      <Subtitle>{vehicleYear}</Subtitle>
    </ContainerTitle>
    <ContextraTitle>
    <ExtraTitle>Tecnología de seguridad del {vehicleName}</ExtraTitle>
      <ExtraSubtitle>{vehicleYear}</ExtraSubtitle>
    </ContextraTitle>
    {textSafety && textSafety.map((text, index) => (
          <React.Fragment key={index}>
            <ParaTitle>{text.title}</ParaTitle>
            <Paragraph>{text.paragraph}</Paragraph>
          </React.Fragment>
        ))}
    </MainSafety>

    );
};

export default Safety;