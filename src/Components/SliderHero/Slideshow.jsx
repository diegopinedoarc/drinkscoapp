import React from "react";
import {
  SlideContainer,
  SlideInfo,
  SlideInfoContainer,
  SliderButton,
  SliderWrapper,
  SlideTitle,
} from "./SlideshowStyle";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { Link } from "react-router-dom";

const slideImages = [
  {
    url: "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/backgbarrica_nrvrqq.jpg",
    caption: "Slide 1",
    price: "$5000",
    linkpromo: "contacto",
    title: "Envios a todo el pais",
    info: "",
    buttonInfo: "¡Consultanos!",
  },
  {
    url: "https://res.cloudinary.com/dpxe6utid/image/upload/v1677426918/drinksCo/img_10_glu6pj.jpg",
    caption: "Slide 2",
    price: "$5000",
    linkpromo: "",
    title: "Summer Deals",
    info: "Este verano refrescate con nuestros combos",
    buttonInfo: "¡Aprovechalos!",
  },
  {
    url: "https://res.cloudinary.com/dpxe6utid/image/upload/v1677427148/drinksCo/banner2_whoncn.png",
    caption: "Slide 3",
    price: "$5000",
    linkpromo: "",
    title: "Summer Deals",
    info: "Este verano refrescate con nuestros combos",
    buttonInfo: "¡Aprovechalos!",
  },
];
const Slideshow = () => {
  return (
    <div style={{ width: "100%" }}>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <SliderWrapper key={index}>
            <SlideContainer
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <SlideInfoContainer>
                <SlideTitle> {slideImage.title} </SlideTitle>
                <SlideInfo> {slideImage.info} </SlideInfo>
                <Link to={slideImage.linkpromo}>
                  <SliderButton> {slideImage.buttonInfo} </SliderButton>
                </Link>
              </SlideInfoContainer>
            </SlideContainer>
          </SliderWrapper>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
