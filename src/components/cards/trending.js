import React, { useRef, useEffect } from 'react';
import tw from "twin.macro";
import "tailwindcss/tailwind.css"; // Importa los estilos de Tailwind CSS
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselWrapper = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden; /* Agregado */
margin-left:8px
`;

const SliderContainer = styled.div`
margin: 0 10px; /* Agregado */
max-width: 83%; /* Agregado */
padding: 0 8px; /* Agregado */

.slick-slide > div {
  margin: 20px 25px;
}
    
.slick-slide.slick-active {
  opacity:1;
}

.slick-prev:before {
  content: "<";
  color: red;
  font-size: 30px;
}

.slick-next:before {
  content: ">";
  color: red;
  font-size: 30px;
}
`;

const Container = tw.div`flex justify-between items-center w-4/5 mb-10 mt-4 max-w-screen-xl mx-auto`;
const Title = tw.h2`text-2xl font-bold text-left`;
const ButtonGroup = tw.div`flex flex-wrap justify-end`;
const Button = tw.button`text-lg bg-primary-500 text-white font-bold py-3 px-3 mr-0 ml-2 rounded mt-2 md:mt-0 
transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:shadow-md hover:scale-100 active:bg-blue-700 
active:text-black active:shadow-inner active:scale-90 `;
const ImageItem = tw.div`flex flex-col items-center rounded-lg  p-0 w-full mb-16
transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer`;
const BrandsContainer = tw.div`bg-gray-100 py-24 px-4 mt-12 mb-16 mx-auto rounded-xl max-w-screen-xl`;
const BrandsTitle = tw.h2`w-4/5 mx-auto text-2xl font-bold`;
const BrandsSubtitle = tw.h3`w-4/5 mx-auto text-lg text-gray-600`;
const BrandGrid = tw.div`gap-8 my-10 md:grid md:grid-cols-2 sm:grid-cols-2 grid grid-cols-1`;
const BrandItem = tw.div`flex items-center gap-4 max-w-xs mx-auto md:w-full`;
const BrandImage = tw.img`w-40 aspect-video`;
const BrandInfo = tw.div`flex flex-col`;

// Array de imágenes del apartado de "Mas buscados".
const imageData = [
  {
    image: "https://cdn.carbuzz.com/gallery-images/1600/620000/400/620476.jpg",
    title: "Mercedes Benz 2021",
    content: "29,000 mi",
    model: "GLE Coupe AWD",
    price: "$123,000",
  },
  {
    image: "https://cdn.jdpower.com/JDP_2023%20Mercedes-Benz%20GLC%20300%20SUV%20White%20Front%20Quarter%20View%20Action.jpg",
    title: "Mercedes Benz 2023",
    content: "1,000 mi",
    model: "AMG GLE Coupe 63",
    price: "$223,000",
  },
  {
    image: "https://i.gaw.to/content/photos/38/24/382445_2020_Audi_Q7.jpg",
    title: "Audi Q7 2020",
    content: "16,000 mi",
    model: "AWD 6-Cylinder Turbo",
    price: "$98,000",
  },
  {
    image: "https://www.marinoperformancemotors.com/imagetag/12612/4/l/Used-2015-Ferrari-458-Spider.jpg",
    title: "Ferrari Spider 2015",
    content: "5,000 mi",
    model: "AWD Turbo",
    price: "$320,000",
  },
  {
    image: "https://images.pistonheads.com/nimg/46812/blobid0.jpg",
    title: "Lamborghini Urus 2023",
    content: "3,000 mi",
    model: "AWD Turbo",
    price: "$450,000",
  },
  {
    image: "https://media.ed.edmunds-media.com/honda/cr-v/2023/oem/2023_honda_cr-v_4dr-suv_sport-hybrid_fq_oem_1_600.jpg",
    title: "Honda CR-V 2023",
    content: "3,000 mi",
    model: "AWD Turbo",
    price: "$30,000",
  },
  {
    image: "https://www.carscoops.com/wp-content/uploads/2023/04/Honda-S2000-1a.jpg",
    title: "Honda S2000 2007",
    content: "4,400 mi",
    model: "FWD",
    price: "$450,000",
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/captura-de-pantalla-2022-05-26-a-las-18-00-14-1653581303.jpg",
    title: "Toyota GT86 2014",
    content: "3,020 mi",
    model: "FWD",
    price: "$25,000",
  },
];


// Array de imágenes del apartado de "Marcas nuevas mas buscadas".
const brandData = [
  {
    image: "https://1000logos.net/wp-content/uploads/2018/03/Honda-logo-768x432.png",
    title: "Honda",
    subtitle: "Desde US$45,900",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2018/02/Toyota-logo.png",
    title: "Toyota",
    subtitle: "Desde US$33,000",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.png",
    title: "Kia",
    subtitle: "Desde US$16,490",
  },
  {
    image: "https://wallpaperaccess.com/full/2216146.png",
    title: "Hyundai",
    subtitle: "Desde US$18,995",
  },
];

const TrendingArticles = () => {
  
  
  const SliderRef = useRef(null);
  
  useEffect(() => {
    if (SliderRef.current) {
      SliderRef.current.slickGoTo(0);
    }
  }, []);
  const handlePrevClick = () => {
    if (SliderRef.current) {
      SliderRef.current.slickPrev();
    }
  };
  
  const handleNextClick = () => {
    if (SliderRef.current) {
      SliderRef.current.slickNext();
    }
  };


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <Title>Los más buscados</Title>
        <ButtonGroup>
          <Button onClick={handlePrevClick}><FaChevronLeft /></Button>
          <Button onClick={handleNextClick}><FaChevronRight /></Button>
        </ButtonGroup>
      </Container>
      <CarouselWrapper tw='max-w-screen-xl mx-auto'>
        <SliderContainer>
          <Slider
            {...settings}
            ref={SliderRef}
          >
            {imageData.map((data, index) => (
              <ImageItem key={index}>
                <img src={data.image} alt={`Imagen ${index + 1}`} tw="[aspect-ratio: 4/2.5] " />
                <div tw="bg-transparent w-full p-2 rounded-lg">
                  <h3 tw="text-lg font-bold">{data.title}</h3>
                  <p tw="text-gray-500">{data.content}</p>
                  <p tw="text-gray-700 font-bold mt-3">{data.model}</p>
                  <p tw="bg-blue-200 text-blue-800 mt-6 mb-3 pl-3 pr-3 py-2 inline-block rounded">{data.price}</p>
                </div>
              </ImageItem>
            ))}
          </Slider>
        </SliderContainer>
      </CarouselWrapper>
      <BrandsContainer>
        <BrandsTitle>Marcas con los mejores precios</BrandsTitle>
        <BrandsSubtitle>Estas son las marcas de vehiculos nuevos con el mejor precio del mercado.</BrandsSubtitle>
        <BrandGrid>
          {brandData.map((data, index) => (
            <BrandItem key={index}>
              <BrandImage src={data.image} alt={`Logo Marca ${index + 1}`} />
              <BrandInfo>
                <h3 tw="text-2xl font-bold">{data.title}</h3>
                <p tw="text-lg text-gray-500">{data.subtitle}</p>
              </BrandInfo>
            </BrandItem>
          ))}
        </BrandGrid>
      </BrandsContainer>
    </div>
  );
};

export default TrendingArticles;
