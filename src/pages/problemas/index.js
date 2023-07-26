import React, { useState, useRef } from "react";
import tw, { css, styled } from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import { motion } from "framer-motion";
import Header from "../../components/headers/Light.js";
import Cards from "../../components/cards/General.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Image from "next/image";

import SvgDecoratorBlob1 from "../../images/Vector.svg";
import SvgDecoratorBlob2 from "../../images/dot-pattern.svg";
import ProblemIMG from "../../images/utility/problem1.png";
import Link from 'next/link';

//Marcas
import toyota from "../../images/brands/toyota.png";
import acura from "../../images/brands/acura.png";
import chevrolet from "../../images/brands/chevrolet.jpg";
import dodge from "../../images/brands/dodge.png";
import hyundai from "../../images/brands/hyundai.png";
import lexus from "../../images/brands/lexus.png";
import mazda from "../../images/brands/mazda.png";
import mercedes from "../../images/brands/mercedes-benz.png";
import mitsubishi from "../../images/brands/mitsubishi.png";
import porsche from "../../images/brands/porsche.png";
import tesla from "../../images/brands/tesla.png";

//Dealers
import dealer1 from "../../images/dealers/deale1.jpg";
import dealer2 from "../../images/dealers/deale2.png";
import dealer3 from "../../images/dealers/deale3.png";

//Mecanicos
import mec1 from "../../images/mech/mec1.jpg";
import mec2 from "../../images/mech/mec2.png";
import mec3 from "../../images/mech/mec3.jpg";

const smooth = tw`transition duration-300 ease-in-out transform`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-1/2 -translate-y-40 rotate-180 -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-12 translate-y-10 -z-10`}
`;
const DecoratorBlob3 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 left-0 bottom-0 transform -translate-x-14 translate-y-64 -z-10`}
`;

const mecanico = [{
  name: 'SK Performance',
  img: mec1,
  tier: 1,
  address: 'Av. 27 de Febrero # 419, Santo Domingo',
  phone: '(809) 221-2222',
  description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
},
{
  name: 'Anaky Racing',
  img: mec2,
  tier: 1,
  address: 'Av. 27 de Febrero # 419, Santo Domingo',
  phone: '(809) 221-2222',
  description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
},
{
  name: 'SK Performance',
  img: mec3,
  tier: 1,
  address: 'Av. 27 de Febrero # 419, Santo Domingo',
  phone: '(809) 221-2222',
  description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
},
]

const dealer = [{
  name: 'Altamira Auto Import',
  img: dealer1,
  tier: 1,
  address: 'Av. 27 de Febrero # 419, Santo Domingo',
  phone: '(809) 221-2222',
  description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
},
{
  name: 'Cleaner Studio',
  img: dealer2,
  tier: 1,
  address: 'Av. 27 de Febrero # 419, Santo Domingo',
  phone: '(809) 221-2222',
  description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
},
{
  name: 'Espaillat Motors',
  img: dealer3,
  tier: 1,
  address: 'Av. 27 de Febrero # 419, Santo Domingo',
  phone: '(809) 221-2222',
  description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
}
]

const Portrait = () => {

  const Results__Title = () => {
    return (
      <p tw=" mt-7 mb-2 text-center">
        <b tw="text-primary-500 text-xl sm:text-4xl font-black">Conoce tú vehiculo! <br /></b>
        <b tw="text-primary-700 text-lg sm:text-3xl">Descubre los problemas comunes de todas las marcas.</b>
      </p>
    )
  }

  return (
    <div tw="relative flex flex-wrap justify-center bg-gray-100 px-6 sm:px-10 h-[415px] -mx-8 max-w-screen-3xl 3xl:mx-auto ">
      <DecoratorBlob1 tw="z-50" />
      <DecoratorBlob2 tw="z-50" />

      <div tw="relative z-20 w-full sm:max-w-[850px] mt-3 mb-6 sm:mb-3 sm:max-h-[150px]">
        <Results__Title />
        <Image src={ProblemIMG} tw="block w-[100%] sm:w-[40%] mx-auto z-10 " alt="Totoya" />
      </div>
    </div>
  )
}

const Brands = () => {
  const models = useRef(null);

  const Brand = ({ name = '', tier = 0, description = '', img }) => {
    return (

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9, transition: { duration: 0 } }}

        tw="relative max-w-[330px] w-1/2 px-4 h-full sm:w-6/12 md:w-6/12 lg:w-4/12 2xl:w-1/5 3xl:w-2/12 drop-shadow-md hover:(cursor-pointer drop-shadow-xl) text-center " css={[smooth]}>
        <Link href="/problemas/modelos">
          <div tw="w-full relative bg-white overflow-hidden sm:mr-10 rounded-2xl pointer-events-none select-none  p-[2px] h-full ">
            <div tw="flex justify-center items-center border-2 rounded-2xl border-gray-300 bg-transparent py-4 h-full w-full ">
              <Image src={img} alt="Carro" style={{ scale: "0.8" }} tw="aspect-4/3" />
            </div>

          </div>
          <h3 tw="mb-4 font-bold text-lg">{name}</h3>
        </Link>
      </motion.div>
    )
  }

  const brands = [
    {
      name: 'Toyota',
      img: toyota,
    },
    {
      name: 'Mercedes-Benz',
      img: mercedes,
    },
    {
      name: 'Acura',
      img: acura,
    },
    {
      name: 'Chevrolet',
      img: chevrolet,
    },
    {
      name: 'Dodge',
      img: dodge,
    },
    {
      name: 'Hyundai',
      img: hyundai,
    },
    {
      name: 'Lexus',
      img: lexus,
    },
    {
      name: 'Mazda',
      img: mazda,
    },
    {
      name: 'Mitsubishi',
      img: mitsubishi,
    },
    {
      name: 'Porsche',
      img: porsche,
    },
    {
      name: 'Tesla',
      img: tesla,
    },

  ]


  return (
    <div tw="flex flex-col w-screen -mx-8 sm:(px-10 w-3/4) pt-5 max-w-screen-xl 3xl:mx-auto">
      <h4 tw="mt-6 px-8 text-3xl font-bold text-primary-700 capitalize">Marcas</h4>

      <motion.div
        ref={models}
        tw="flex w-full flex-wrap pt-8 "
      >
        {brands.map((model, i) => <Brand {...model} key={i} />)}
        <DecoratorBlob3 />

      </motion.div>


    </div>
  )
}

const Dealers = () => {
  const dealers = useRef(null);

  const Dealer = ({ name = '', address = '', phone = '', description = '', img }) => {
    return (
      <div tw="relative max-h-[100] lg:min-w-[330px] w-full lg:w-4/12 hover:scale-105 hover:cursor-pointer px-4 drop-shadow-md" css={[smooth]}>
        <div tw="w-full relative bg-gray-200 border border-gray-300 overflow-hidden sm:mr-10 mb-10 rounded-lg max-h-[100]">
          <div tw="flex justify-center items-center bg-white w-full h-full ">
            <Image src={img} tw="" alt="Carro" style={{ objectFit: "contain" }} />
          </div>
          <div tw="p-4">
            <h3 tw="mb-1 font-bold text-lg">{name}</h3>
            <p>{address} <br />{phone} </p>
          </div>
        </div>
      </div>
    )
  }

  const dealer = [{
    name: 'Altamira Auto Import',
    img: dealer1,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  },
  {
    name: 'Cleaner Studio',
    img: dealer2,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  },
  {
    name: 'Espaillat Motors',
    img: dealer3,
    tier: 1,
    address: 'Av. 27 de Febrero # 419, Santo Domingo',
    phone: '(809) 221-2222',
    description: 'This model sufre de aa lot of problems that i don’t know but is the worst.',
  }
  ]

  return (
    <div tw="flex flex-col w-screen -mx-8 sm:w-3/4 px-5 sm:px-10 pt-5 max-w-screen-xl 3xl:mx-auto">
      <h4 tw="mt-6 px-8 text-3xl font-bold text-primary-700 capitalize ">Dealers recomendados</h4>
      <motion.div
        ref={dealers}
        tw="flex w-full flex-wrap pt-8 overflow-x-hidden overflow-y-hidden"
        animate={{ height: true ? 'auto' : 370 }}
        transition={{ duration: 0.5, easeOutIn: [0.04, 0.62, 0.23, 0.98] }}
      >
        {dealer.map((model, i) => <Dealer {...model} key={i} />)}
      </motion.div>
      {/* <ShowMoreBtn /> */}
    </div>)
}

// const Mecanicos = () => {
//   const [showMore, setShowMore] = useState(false);

//   const mecanicos = useRef(null);

//   const handleBtn = (val) => {
//     mecanicos.current.scroll({
//       top: 0,
//       behavior: "smooth"
//     });
//     setShowMore(val);
//   }

//   const Mecanico = ({ name = '', tier = 0, address ='', phone ='', description = '', img }) => {
//     return (
//       <div tw="relative max-h-[100] lg:min-w-[330px] w-full lg:w-4/12 hover:scale-105 hover:cursor-pointer px-8 drop-shadow-md" css={[smooth]}>
//         {/* <div tw="absolute top-[-12px] left-[22px] flex justify-center bg-blue-600 rounded-full px-2 text-3xl text-white font-bold w-[45px] z-20">
//           {tier}
//         </div> */}
//         <div tw="w-full relative bg-gray-200 border border-gray-300 overflow-hidden sm:mr-10 mb-10 rounded-lg max-h-[100]">
//           <div tw="flex justify-center items-center bg-white w-full h-full ">
//             <Image src={img} tw="aspect-4/3" alt="Carro" style={{ objectFit: ""}} />
//           </div>
//           <div tw="p-4">
//             <h3 tw="mb-1 font-bold text-lg">{name}</h3>
//             <p>{address} <br/>{phone} </p>
//           </div>
//         </div>
//       </div>
//     )
//   }


//   return (
//     <div tw="flex flex-col w-3/4 px-5 sm:px-10 pt-5 max-w-screen-3xl mx-auto">
//       <h4 tw="mt-6 px-8 text-3xl font-bold text-primary-700 capitalize">Mecánicos recomendados</h4>
//       <motion.div
//         ref={mecanicos}
//         css={[showMore ? tw`` : tw``]}
//         tw="flex w-full flex-wrap max-sm:justify-center pt-8 overflow-x-hidden overflow-y-hidden"
//         animate={{ height: true ? 'auto' : 370 }}
//         transition={{ duration: 0.5, easeOutIn: [0.04, 0.62, 0.23, 0.98] }}
//       >
//         {mecanico.map((model, i) => <Mecanico {...model} key={i} />)}
//       </motion.div>
//     </div>)
// }

export default function Problemas() {
  return (
    <AnimationRevealPage >
      <Header />
      <Portrait />
      <Link href="/">
        <div tw="hidden sm:block absolute right-[5%] mt-[5%] sm:w-1/6 w-full h-full border max-w-screen-xl ">
          <div tw="border rounded-lg bg-red-400 h-full min-h-[200px] overflow-hidden "></div>
        </div>
      </Link>
      <Brands />
      <Dealers />
      <Cards data={mecanico} title={"Mecanicos Recomendados"} />

      <Footer />
    </AnimationRevealPage>
  );
}