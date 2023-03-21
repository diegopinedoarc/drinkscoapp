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
import { Fade } from "react-slideshow-image";

import { Link } from "react-router-dom";

const slideImages = [
  {
    url: "https://res.cloudinary.com/dpxe6utid/image/upload/v1679411566/drinksCo/banner-img-1_neu_rwewu5.jpg",
    caption: "Slide 1",
    price: "$5000",
    linkpromo: "contacto",
    title: "Las mejores bebidas",
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
    linkpromo: "blog",
    title: "Prepara tus tragos preferidos",
    info: "Visita nuestro blog y transformate en bartender de entrecasa",
    buttonInfo: "Ver blog",
  },
];
const Slideshow = () => {
  return (
    <div style={{ width: "100%" }}>
      <Fade>
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
      </Fade>
    </div>
  );
};

export default Slideshow;
