import React, { useState } from 'react';
import tw from 'twin.macro';
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Review from '../components/misc/Review.js';
import Specs from '../components/misc/specs.js';
import Safety from '../components/misc/safety.js';
import Styles from '../components/misc/styles.js';
import Price from '../components/misc/price.js';

const MainContainer = tw.div`flex flex-col justify-start h-full rounded-lg mt-6 mb-16 max-w-screen-xl mx-auto`;

const TitleContainer = tw.div`flex flex-col items-start mt-8 max-w-screen-xl mx-auto `;
const MainTitle = tw.h2`text-xl font-bold`;
const SubTitleContainer = tw.div`flex flex-col md:flex-row items-center mt-2`;
const SubTitle = tw.h3`text-3xl font-bold`;
const SelectedButtonText = tw.p`text-3xl font-bold ml-2 flex-wrap break-words`;

const RatingsContainer = tw.div`flex flex-row gap-2 items-center max-w-screen-xl w-1/2`;
const FeedCont = tw.div`flex`;
const RatingItem = tw.div`flex items-center gap-1 w-full`;
const RatingRow = tw.div`flex flex-row gap-4`; // Nuevo contenedor con clase flex-row
const RatingNumber = tw.span`text-lg font-bold`;
const RatingText = tw.span`text-base`;
const TextFeed = tw.span`text-base text-blue-500 hover:border-b-2 border-blue-500`;
const RatingItemImage = tw.img`w-7 h-7`;

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
  
    return (
      <StyledTabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
        <StyledTabList>
          <SelectedStyledTab
            css={[activeTabIndex === 0 && tw`hover:bg-transparent font-semibold`]}
          >
            Price
            {activeTabIndex === 0 && <Indicator />}
          </SelectedStyledTab>
          <SelectedStyledTab
            css={[activeTabIndex === 1 && tw`hover:bg-transparent font-semibold`]}
          >
            Review
            {activeTabIndex === 1 && <Indicator />}
          </SelectedStyledTab>
          <SelectedStyledTab
            css={[activeTabIndex === 2 && tw`hover:bg-transparent font-semibold`]}
          >
            Specs and Features
            {activeTabIndex === 2 && <Indicator />}
          </SelectedStyledTab>
        </StyledTabList>
  
        <StyledTabPanel>
        <Price 
          
          />
        </StyledTabPanel>
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
        <Specs 
          SpecsData={SpecsData}
          specsDesc={specsDesc}

        />
          {/* Contenido de la opción Specs and Features */}
        </StyledTabPanel>
      </StyledTabs>
    );
  };

export default function Finalprice() {
    const breadcrumbItems = ['Home', 'Ford', 'Corolita', '2012', 'Styles'];
    const selectedStyle = ''; // Agrega el valor deseado para selectedStyle

    return (
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
        <RatingsContainer>
            <RatingRow> {/* Contenedor con clase flex-row */}
            {ratingsData.map((rating, index) => (
              <RatingItem key={index}>
                <RatingNumber>{rating.rating}</RatingNumber>
                <RatingItemImage src={rating.image} alt="Estrella" />
                <RatingText>{rating.text}</RatingText>
              </RatingItem>
            ))}
              </RatingRow>
            <FeedCont>
              <a href="https://autopana.vercel.app/" target="_blank" rel="noopener noreferrer">
                <TextFeed>Deja tu opinión</TextFeed>
              </a>
            </FeedCont>
          </RatingsContainer>
          <Options/>
        </MainContainer>
        <Footer />
      </AnimationRevealPage>
    );
  };