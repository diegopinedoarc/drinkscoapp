import React from "react";
import Slideshow from "../../Components/SliderHero/Slideshow";
import SubHero from "../../Components/SubHero/SubHero";
import Ofertas from "../../Components/Ofertas/Ofertas";
import {
  ButtonVisit,
  DivVisit,
  HomeWrapper,
  ProdContainerRef,
  VisitTitle,
} from "./HomeStyle";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import BannerDestacados from "../../Components/BannerDestacados/BannerDestacados";
import BannerProductos from "../../Components/BannerProductos/BannerProductos";
import { Link } from "react-router-dom";

// import { useRef } from "react";

const Home = () => {
  // const productsRef = useRef();
  // const doScroll = () => {
  //   window.scrollTo(
  //     productsRef.current.getBoundingClientRect().x,
  //     productsRef.current.getBoundingClientRect().y
  //   );
  // };
  return (
    <HomeWrapper>
      <Slideshow />
      <SubHero />
      <BannerDestacados />
      <Ofertas />
      <BannerProductos />
      <CategoriesSection />
      <ProdContainerRef>
        <ProductsSection />
      </ProdContainerRef>
      <DivVisit>
        <VisitTitle> ¡¡No te olvides de visitar nuestro blog!!</VisitTitle>
        <Link to="blog" style={{ fontSize: "1.2rem" }}>
          <ButtonVisit> Visitar</ButtonVisit>
        </Link>
      </DivVisit>
    </HomeWrapper>
  );
};

export default Home;
