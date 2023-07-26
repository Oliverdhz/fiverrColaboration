import React from 'react'
import tw from 'twin.macro';
import Slider from 'react-slick';

const Mainstyles = tw.div`justify-start w-2/3`;

const MainTitle = tw.h2`text-3xl font-bold`;
const ContainerTitle = tw.div`flex flex-row gap-2`;
const Subtitle = tw.p`text-3xl font-bold`;

const CardContainer = tw.div` justify-center items-center w-full`;
const Card = tw.div`flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg`;
const Title = tw.h2`text-lg font-bold mb-2`;
const Info = tw.p`text-base text-gray-700`

const Styles = ({ vehicleName, vehicleYear }) => {

    const data = [
        {
          title: 'Carta 1',
          items: [
            { subtitle: 'Subtitulo 1.1', info: 'Información 1.1' },
            { subtitle: 'Subtitulo 1.2', info: 'Información 1.2' },
          ],
        },
        {
          title: 'Carta 2',
          items: [
            { subtitle: 'Subtitulo 2.1', info: 'Información 2.1' },
            { subtitle: 'Subtitulo 2.2', info: 'Información 2.2' },
            { subtitle: 'Subtitulo 2.3', info: 'Información 2.3' },
          ],
        },
      ];


      // Configuración de react-slick para el carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

    return (
        <Mainstyles>
    <ContainerTitle>
      <MainTitle>Estilos de {vehicleName}</MainTitle>
      <Subtitle>{vehicleYear}</Subtitle>
    </ContainerTitle>
    <CardContainer>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Card key={index}>
            <Title>{item.title}</Title>
            {item.items.map((subItem, subIndex) => (
              <React.Fragment key={subIndex}>
                <Subtitle>{subItem.subtitle}</Subtitle>
                <Info>{subItem.info}</Info>
              </React.Fragment>
            ))}
          </Card>
        ))}
      </Slider>
    </CardContainer>
    </Mainstyles>

    );
};

export default Styles;