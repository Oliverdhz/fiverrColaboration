import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/Light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Category from "../components/forms/StyleSelector.js";

import Coupe from "../images/bodystyles/Coupe.png";
import Convertible from "../images/bodystyles/Convertible.png";
import Sedan from "../images/bodystyles/Sedan.png";
import Hatchback from "../images/bodystyles/Hatchback.png";
import Wagon from "../images/bodystyles/Wagon.png";
import SUV from "../images/bodystyles/SUV.png";
import Pickup from "../images/bodystyles/Pickup.png";
import Minivan from "../images/bodystyles/Minivan.png";
import Sport from "../images/bodystyles/Sport.png";

export default function CarCategory() {

  //all car body types and its images
  const carBodyTypes = [
    {
      name: 'Coupe',
      img: Coupe,
    },
    {
      name: 'Convertible',
      img: Convertible,
    },
    {
      name: 'Sedan',
      img: Sedan,
    },
    {
      name: 'Hatchback',
      img: Hatchback,
    },
    {
      name: 'Wagon',
      img: Wagon,
    },
    {
      name: 'SUV',
      img: SUV,
    },
    {
      name: 'Camioneta',
      img: Pickup,
    },
    {
      name: 'Minivan',
      img: Minivan,
    },
    {
      name: 'Sport',
      img: Sport,
    },
  ]



  return (
    <AnimationRevealPage>
      <Header />
      <Category
        title="Elige una categoria"
        bodyTypes={carBodyTypes}
        isCarCategoryPage={true} // Pasa la prop "isCarCategoryPage" como `true` en la página CarCategory
      />
      <Footer />
    </AnimationRevealPage>
  );
};