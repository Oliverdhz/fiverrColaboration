import React, { useState, useRef } from 'react';
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Review from '../components/misc/Review.js';
import Specs from '../components/misc/specs.js';
import Safety from '../components/misc/safety.js';
import Styles from '../components/misc/styles.js';

const MainContainer = tw.div`flex flex-col justify-start h-full rounded-lg mt-6 mb-16 max-w-screen-xl mx-auto`;

const BreadcrumbContainer = tw.div`
  flex items-center text-gray-500 mb-4 
  flex-wrap break-words max-w-screen-xl mx-auto
`;

const BreadcrumbItem = tw.span`mx-1`;

const Breadcrumb = ({ items }) => {
  const breadcrumbItems = items.slice(0, 5); // Mostrar solo los primeros 5 elementos

  return (
    <BreadcrumbContainer>
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span tw="mx-1">{'/'}</span>}
          <BreadcrumbItem>{item}</BreadcrumbItem>
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

const TitleContainer = tw.div`flex flex-col items-start mt-8 max-w-screen-xl mx-auto `;
const MainTitle = tw.h2`text-xl font-bold`;
const SubTitleContainer = tw.div`flex flex-col md:flex-row items-center mt-2`;
const SubTitle = tw.h3`text-3xl font-bold`;
const SelectedButtonText = tw.p`text-3xl font-bold ml-2 flex-wrap break-words`;

const RatingsContainer = tw.div`flex-col items-center gap-2 max-w-screen-xl w-1/2`;
const Divider = tw.div`border-b border-primary-500 w-4/6 ml-auto mb-1`;

const FeedCont = tw.div`flex justify-end`;
const RatingTitle = tw.div`text-xl mb-1 font-semibold`;
const RatingItem = tw.div`flex items-center gap-1 mb-2 w-full`;
const RatingRow = tw.div`flex flex-row gap-4`; // Nuevo contenedor con clase flex-row
const RatingNumber = tw.span`text-lg font-bold`;
const RatingText = tw.span`text-base`;
const TextFeed = tw.span`text-sm text-blue-500 hover:border-b-2 border-blue-500`;
const RatingItemImage = tw.img`w-7 h-7`;

const WrapImgsSpecs = tw.div`flex flex-row w-full gap-6`;
const WrapImgs = tw.div`flex flex-col w-3/4  rounded-lg`;
const ImageContainer = tw.div`flex flex-col border mb-1 items-start w-full rounded-lg`;
const MainImage = tw.img`w-full object-contain transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer`;
const SecImagesContainer = tw.div`flex flex-row items-start gap-2 w-full`;
const SecondaryImages = tw.div`flex items-start rounded-lg max-w-full transition-transform duration-100 ease-in-out hover:scale-105 cursor-pointer`;
const RoundedImage = tw.img`rounded-lg`;


const MainSpecs = tw.div`w-full  overflow-hidden relative`;

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Agregado */
  margin-left:8px
`;
const CarouselButton = tw.button`bg-gray-200 text-gray-800 px-4 py-2 rounded-md m-2 focus:outline-none hover:bg-gray-300`;
const ArrowButton = tw.button`
  absolute top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-800 p-3 rounded-md focus:outline-none
`;

const SliderContainer = styled.div`
  margin: 0 auto; /* Agregado */
  max-width: 100%; /* Agregado */
  padding: 0 8px; /* Agregado */
`;

const BrandsContainer = tw.div` px-4 my-8 mx-auto rounded-xl max-w-screen-xl`;
const BrandGrid = tw.div`flex flex-col gap-4 my-4 md:grid md:grid-cols-2 sm:grid-cols-2 grid grid-cols-1`;
const BrandItem = tw.div`flex items-center gap-4 max-w-xs mx-auto md:w-full`;
const BrandImage = tw.img`w-14 h-14 object-contain`;
const BrandInfo = tw.div`flex flex-col`;
const NextTitle = tw.div` px-4 text-xl font-bold`;
const ContButtonRating = tw.div`flex px-4 my-6 gap-4 mx-auto w-full rounded-xl max-w-screen-xl`;
const ContButtonsSpecs = tw.div`items-start rounded-xl w-1/2`;
const ButtonPriceBuild = styled.button`
  ${tw`bg-primary-500 hover:bg-blue-600 hover:shadow-lg text-white text-lg font-bold py-5 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-100 mb-4 w-full`}
  @media (max-width: 768px) {
    ${tw`w-full`}
`;
const ButtonSeeCar = tw.button`bg-gray-200 hover:border-gray-500 hover:shadow-lg text-black text-lg font-bold py-5 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-100 w-full`;


const SpecsCarousel = () => {
  const [currentYear, setCurrentYear] = useState(1999);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [showNavButtons, setShowNavButtons] = useState(true);


  const handleSlideChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
    setShowLeftButton(currentSlide > 0);
    setShowRightButton(currentSlide < (sliderRef.current?.innerSlider.state.slideCount - 8));
  };


  const handlePrevYear = () => {
    if (sliderRef.current) {
      const currentSlideIndex = sliderRef.current.innerSlider.state.currentSlide;
      const targetSlideIndex = currentSlideIndex - 6; // Retrocede los slidessegun la cantidad que se ponga
      sliderRef.current.slickGoTo(targetSlideIndex);
      setCurrentSlide(targetSlideIndex);
      setShowNavButtons(true);
    }
  };

  const handleNextYear = () => {
    if (sliderRef.current) {
      const currentSlideIndex = sliderRef.current.innerSlider.state.currentSlide;
      const targetSlideIndex = currentSlideIndex + 6; // Avanza los slides segun la cantidad que se ponga
      sliderRef.current.slickGoTo(targetSlideIndex);
      setCurrentSlide(targetSlideIndex);
      setShowNavButtons(true);
    }
  };
  
  const renderArrowButton = (direction) => {
    const isLeft = direction === 'left';
    const shouldShowButton = isLeft ? showLeftButton : showRightButton;

    return (
      shouldShowButton && (
        <ArrowButton onClick={isLeft ? handlePrevYear : handleNextYear} style={{ left: isLeft ? '0' : 'auto', right: isLeft ? 'auto' : '0' }}>
          {isLeft ? <FaChevronLeft /> : <FaChevronRight />}
        </ArrowButton>
      )
    );
  };

  const renderYears = () => {
    const years = [];
    for (let year = 1999; year <= 2023; year++) {
      years.push(
        <div key={year}>
          <CarouselButton
            onClick={() => setCurrentYear(year)}
            className={currentYear === year ? 'selected' : ''}
          >
            {year}
          </CarouselButton>
        </div>
      );
    }
    return years;
  };

  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    variableWidth: true,
    afterChange: handleSlideChange,
  };

  return (
    <CarouselWrapper>
      <SliderContainer>
        <Slider
          ref={sliderRef}
          {...settings}
        >
          {renderYears()}
        </Slider>
      </SliderContainer>
      {renderArrowButton('left')}
      {renderArrowButton('right')}
    </CarouselWrapper>
  );
  
};

  // Array de imágenes del apartado de "Mini especificaciones".
  const brandData = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/99/99729.png",
      title: "Fuel economy",
      subtitle: "24 - 25 combined mpg",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5102/5102888.png",
      title: "Seating",
      subtitle: "5",
    },
    {
      image: "https://user-images.githubusercontent.com/9069888/102001228-ce3ebb00-3cef-11eb-8349-0b0dd4fc4717.png",
      title: "Horsepower",
      subtitle: "164 - 182 hp",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/93/93392.png",
      title: "Cargo Volume",
      subtitle: "55.8 cu ft",
    },
  ];

    // Array de imágenes del apartado de "Especificaciones generales".
    const SpecsData = [
      {
        imageSpecsGen: "https://cdn-icons-png.flaticon.com/512/99/99729.png",
        titleSpecsGen: "Fuel economy",
        subtitleSpecsGen: "24 - 25 combined mpg",
      },
      {
        imageSpecsGen: "https://cdn-icons-png.flaticon.com/512/5102/5102888.png",
        titleSpecsGen: "Seating",
        subtitleSpecsGen: "5",
      },
      {
        imageSpecsGen: "https://user-images.githubusercontent.com/9069888/102001228-ce3ebb00-3cef-11eb-8349-0b0dd4fc4717.png",
        titleSpecsGen: "Horsepower",
        subtitleSpecsGen: "164 - 182 hp",
      },
      {
        imageSpecsGen: "https://cdn-icons-png.flaticon.com/512/93/93392.png",
        titleSpecsGen: "Cargo Volume",
        subtitleSpecsGen: "55.8 cu ft",
      },
      {
        imageSpecsGen: "https://png.pngtree.com/png-vector/20220622/ourlarge/pngtree-steel-jerry-can-glyph-icon-png-image_5280741.png",
        titleSpecsGen: "Fuel Type",
        subtitleSpecsGen: "Gas",
      },
      {
        imageSpecsGen: "https://cdn-icons-png.flaticon.com/512/93/93392.png",
        titleSpecsGen: "Warranty",
        subtitleSpecsGen: "4 years or 50000 miles",
      },
    ];

    // Array del apartado de "SpecsDesc".
    const specsDesc = [
      {
        maintitle: 'Interior del vehículo',
        items: [
          { title: 'Asientos', response: '5' },
          { title: 'Capacidad de carga', response: '500 litros' },
          { title: 'Capacidad de carga', response: '500 litros' },
          { title: 'Capacidad de carga', response: '500 litros' },
          { title: 'Capacidad de carga', response: '500 litros' },
        ],
      },
      {
        maintitle: 'Exterior del vehículo',
        items: [
          { title: 'Longitud', response: '4.5 metros' },
          { title: 'Anchura', response: '2.1 metros' },
          { title: 'Anchura', response: '2.1 metros' },
          { title: 'Anchura', response: '2.1 metros' },
          { title: 'Anchura', response: '2.1 metros' },
        ],
      },
      {
        maintitle: 'Economía de combustible',
        items: [
          { title: 'Ciudad', response: '14 mpg' },
          { title: 'Carretera', response: '19 mpg' },
          { title: 'Conjunto', response: '16 mpg' },
        ],
      },
      {
        maintitle: 'Actuación',
        items: [
          { title: 'Caballo de fuerza', response: '420 @ 5600 RPM' },
          { title: 'Torque', response: '460 @ 4100 rpm' },
          { title: 'Motor', response: 'V8, 6.2 Litros' },
        ],
      },
      {
        maintitle: 'Exterior del vehículo',
        items: [
          { response: 'Luces LED delanteras y traseras' },
          { response: 'Llantas de aleación de 18 pulgadas' },
          // Otros elementos exteriores
        ],
      },
      {
        maintitle: 'Exterior del vehículo',
        items: [
          { response: 'Luces LED delanteras y traseras' },
          { response: 'Llantas de aleación de 18 pulgadas' },
          // Otros elementos exteriores
        ],
      },
      {
        maintitle: 'Exterior del vehículo',
        items: [
          { response: 'Luces LED delanteras y traseras' },
          { response: 'Llantas de aleación de 18 pulgadas' },
          { response: 'Llantas de aleación de 18 pulgadas' },
          { response: 'Llantas de aleación de 18 pulgadas' },
          { response: 'Llantas de aleación de 18 pulgadas' },
          // Otros elementos exteriores
        ],
      },
    ];

    // Array del apartado de "rating".
  const ratingsData = [
    { image: 'https://png.pngtree.com/png-vector/20220926/ourmid/pngtree-shiny-gold-star-clipart-illustration-design-png-image_6216956.png', text: 'Experto', rating: '4.3' },
    { image: 'https://png.pngtree.com/png-vector/20220926/ourmid/pngtree-shiny-gold-star-clipart-illustration-design-png-image_6216956.png', text: 'Usuario', rating: '4.4' },
  ];

  const StyledTabs = tw(Tabs)`w-full my-12`;
  const StyledTabList = tw(TabList)`flex border-b-2`;
  const StyledTab = tw(Tab)`px-4 py-2 mr-3 text-black text-base font-medium focus:outline-none rounded-lg cursor-pointer relative
  transition-colors duration-300`;
  const StyledTabPanel = tw(TabPanel)`mt-4`;
  const SelectedStyledTab = tw(StyledTab)`hover:bg-gray-200`;
  const Indicator = tw.span`absolute top-1/2 left-0 w-1 h-full bg-blue-500 transform -translate-y-1/2 rounded-lg`;
  
  const Options = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    const handleTabSelect = (index) => {
      setActiveTabIndex(index);
    };

    // Para agregar mas Titulos y parrafos normales en review
    const additionalTextData = [
      { title: 'Used 2021 Cadillac Escalade Pricing', paragraph: 'The Kelley Blue Book Fair Purchase Price for any individual used vehicle can vary greatly according to mileage, condition, location, and other factors, but heres a general idea of what buyers are currently paying for used 2021 Cadillac Escalade models when purchasing from a dealership.' },
      { title: 'Interior Comfort', paragraph: 'The independent rear suspension does more than improve the ride quality of the new Escalade. It takes up less space than the live-axle arrangement of the 2020 Cadillac Escalade, so GM engineers were able to lower both rows of rear seats and make the whole area in back feel much roomier. While base Escalades have leatherette seating, all higher trims get leather. And everywhere you look, luxury abounds. All models have 3-zone climate control and power fronts seats – 12-way for lower trims and 16-way for the top trims. The 16-way seats even have a massage function. Center-row captain’s chairs are standard; if you need seats for eight, a center bench is a no-cost option.' },
      // Agrega más objetos de texto adicional según sea necesario
    ];

    // Para agregar los datos de las columnas pros, const, whats new... en review
    const ProsConsNewData = [
      { title: 'Pros', content: 'All-new for 2021\nRoomier, a bit longer\nAvailable diesel engine, air suspension' },
      { title: 'Cons', content: 'A bit longer than last year\nPlatinum models now exceed $100K' },
      { title: "What's New?", content: 'Everything: The Escalade is all-new for 2021\nRoomier inside, with a huge OLED infotainment screen\nAvailable diesel engine' },
    ];

    // Para agregar los datos titulo y texto de safety
    const textSafetydata = [
      { title: 'Automatic emergency braking', paragraph: 'Standard on all 2021 Cadillac Escalades, this technology automatically applies the brakes if a collision with a vehicle or a pedestrian is deemed imminent. If an accident isn’t prevented altogether, the system will reduce its severity. The automatic braking works in Reverse, too.' },
      { title: 'Lane-keeping assist', paragraph: 'The Escalade is a big vehicle that fills up its lane. With standard lane-keeping assist, this large Cadillac SUV will let its driver know when the Escalade is drifting out of its lane and then make gentle steering corrections (if necessary) to bring the vehicle back in line.' },
      { title: 'Rear Camera Mirror', paragraph: 'With the Rear Camera Mirror, which is standard on all Escalades except the base model, you always have an unobstructed view of what’s behind the vehicle, even if you’ve loaded the cargo area up to the headliner with camping gear. While it takes a while to get used to the Rear Camera Mirror, the wide-angle view it provides is excellent.' },
    ];
  
    return (
      <StyledTabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
        <StyledTabList>
          <SelectedStyledTab
            css={[activeTabIndex === 0 && tw`hover:bg-transparent font-semibold`]}
          >
            Review
            {activeTabIndex === 0 && <Indicator />}
          </SelectedStyledTab>
          <SelectedStyledTab disabled={true}
            css={[activeTabIndex === 1 && tw`hover:bg-transparent font-semibold`, { cursor: 'not-allowed' }]}
          >
            Compare
            {activeTabIndex === 1 && <Indicator />}
          </SelectedStyledTab>
          <SelectedStyledTab
            css={[activeTabIndex === 2 && tw`hover:bg-transparent font-semibold`]}
          >
            Specs and Features
            {activeTabIndex === 2 && <Indicator />}
          </SelectedStyledTab>
          <SelectedStyledTab
            css={[activeTabIndex === 3 && tw`hover:bg-transparent font-semibold`]}
          >
            Safety
            {activeTabIndex === 3 && <Indicator />}
          </SelectedStyledTab>
          <SelectedStyledTab
            css={[activeTabIndex === 4 && tw`hover:bg-transparent font-semibold`]}
          >
            Styles
            {activeTabIndex === 4 && <Indicator />}
          </SelectedStyledTab>
        </StyledTabList>
  
        <StyledTabPanel>
        <Review
          vehicleName="Nombre Vehiculo"
          vehicleYear={2023}
          reviewerName="Jaime Antonio"
          reviewDate=" Julio 06 del 2023"
          reviewerImage="https://epicerie.ithurria.com/images/account.png"
          InfoVehicle="Cadillac’s full-size 3-row luxury SUV has entered its fifth generation. This all-new 2021 Cadillac Escalade represents a huge technological leap over the current model, thanks to a new ladder frame with independent rear suspension and dramatically improved packaging that makes this luxurious family hauler much roomier inside, particularly in the second and third rows.

          Of note, the 2021 Cadillac Escalade comes with 2nd-row captain’s chairs standard, and a middle bench seat is a no-cost option. The standard Escalade has grown by about 7 inches, while the longer Escalade ESV is up by 2.5.
          
          The direct-injected 6.2-liter V8 is a carryover from last year, but the new Escalade now is available for the first time with a diesel engine.
          
          It’s the same smooth 3.0-liter turbodiesel inline-6 that gives the Chevy Silverado and GMC Sierra pickups such outstanding fuel economy, and, like the gasoline V8, it mates to a 10-speed automatic transmission. Rear-wheel-drive (2WD) and 4-wheel-drive (4WD) Escalades continue to be available.
          
          The main competition for the new Cadillac Escalade (base price, $76,195) remains the Lincoln Navigator, which starts at $75,825. Another large and luxurious 3-row SUV to consider is the Escalade’s cousin, the GMC Yukon XL in opulent Denali form. It starts at $72,395."
          additionalText={additionalTextData}
          ProsConsNewData={ProsConsNewData}
        />
        

        </StyledTabPanel>
        <StyledTabPanel>
          <h2>Compare Content</h2>
          {/* Contenido de la opción Compare */}
        </StyledTabPanel>
        <StyledTabPanel>
        <Specs 
          SpecsData={SpecsData}
          specsDesc={specsDesc}

        />
          {/* Contenido de la opción Specs and Features */}
        </StyledTabPanel>
        <StyledTabPanel>
          <Safety 
          vehicleName="Nombre Vehiculo"
          vehicleYear={2023}
          textSafety={textSafetydata}
          />
        </StyledTabPanel>
        <StyledTabPanel>
         <Styles
         vehicleName="Nombre Vehiculo"
         vehicleYear={2023}
         />
        </StyledTabPanel>
      </StyledTabs>
    );
  };

const Brand = () => {
  const breadcrumbItems = ['Home', 'Ford', 'Corolita', '2012', 'Styles'];
  const selectedStyle = ''; // Agrega el valor deseado para selectedStyle

  return (
    <div>
      <AnimationRevealPage>
        <Header />
        <React.Fragment>
          <Breadcrumb items={breadcrumbItems} />
          <TitleContainer>
            <MainTitle>Precio de vehículos usados</MainTitle>
            <SubTitleContainer>
              <SubTitle>Honda 2000</SubTitle>
              {selectedStyle && <SelectedButtonText>{selectedStyle}</SelectedButtonText>}
            </SubTitleContainer>
          </TitleContainer>
        </React.Fragment>
        <MainContainer>
          <WrapImgsSpecs>
            <WrapImgs>
              <ImageContainer>
                <MainImage src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/11436/2017-Hyundai-Tucson-front_11436_032_2400x1800_SA5_nologo.png?downsize=1000:*" alt="Imagen Principal" />
              </ImageContainer>
              <SecImagesContainer>
                <SecondaryImages>
                <RoundedImage src="https://file.kelleybluebookimages.com/kbb/base/evox/StJ/14242/2023-Hyundai-Sonata-interior-hero_14242_163_640x480.jpg" alt="Imagen Secundaria 1" />                </SecondaryImages>
                <SecondaryImages>
                <RoundedImage src="https://file.kelleybluebookimages.com/kbb/base/evox/StJ/11436/2017-Hyundai-Tucson-front-view_11436_118_640x480.jpg?downsize=1000:*" alt="Imagen Secundaria 2" />
                </SecondaryImages>
                <SecondaryImages>
                <RoundedImage src="https://file.kelleybluebookimages.com/kbb/base/evox/StJ/11436/2017-Hyundai-Tucson-side_11436_037_640x480.jpg?downsize=1000:*" alt="Imagen Secundaria 3" />
                </SecondaryImages>
              </SecImagesContainer>
            </WrapImgs>
            <MainSpecs>
            <SpecsCarousel /> {/* Agregar el carrousel de botones funcionales */}
            <BrandsContainer>
      <BrandGrid>
      {brandData.map((data, index) => (
      <BrandItem key={index}>
        <BrandImage src={data.image} alt={`Logo Marca ${index + 1}`} />
        <BrandInfo>
          <h3 tw="text-sm font-bold">{data.title}</h3>
          <p tw="text-sm text-gray-600">{data.subtitle}</p>
        </BrandInfo>
      </BrandItem>
        ))}
      </BrandGrid>
    </BrandsContainer>
    <NextTitle>Próximos planes: ¿Adquirir este vehículo?</NextTitle>
    <ContButtonRating>
    <ContButtonsSpecs>
    <ButtonPriceBuild>Construir y precio</ButtonPriceBuild>
    <ButtonSeeCar>Ver autos en venta</ButtonSeeCar>
    </ContButtonsSpecs>
    <RatingsContainer>
    <RatingTitle>Rating</RatingTitle>
    <RatingRow> {/* Contenedor con clase flex-row */}
            {ratingsData.map((rating, index) => (
              <RatingItem key={index}>
                <RatingNumber>{rating.rating}</RatingNumber>
                <RatingItemImage src={rating.image} alt="Estrella" />
                <RatingText>{rating.text}</RatingText>
              </RatingItem>
            ))}
              </RatingRow>
              <Divider />
            <FeedCont>
              <a href="https://autopana.vercel.app/" target="_blank" rel="noopener noreferrer">
                <TextFeed>Deja tu opinión</TextFeed>
              </a>
            </FeedCont>
          </RatingsContainer>
    </ContButtonRating>
    

            </MainSpecs>
          </WrapImgsSpecs>
          <Options/>
        </MainContainer>
        <Footer />
      </AnimationRevealPage>
    </div>
  );
};

export default Brand;
