import React, { useState } from "react";
import {
  BarraItem,
  BarraList,
  BlogHeroContainer,
  BlogSubTitle,
  BlogTitle,
  BlogWrapper,
  ContainerRecetas,
  ContainerTips,
  TipsInfo,
} from "./BlogStyle";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import CardRecetas from "../../Components/CardRecetas/CardRecetas";

const Blog = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const recetas = useSelector((state) => state.recetas.recetas);

  return (
    <BlogWrapper>
      <BlogHeroContainer>
        <BlogTitle>Bienvenido a nuestro Blog</BlogTitle>
        <BlogSubTitle>¡Bartender de entrecasa!</BlogSubTitle>
      </BlogHeroContainer>

      <ContainerTips>
        <BlogSubTitle>Las primeras botellas</BlogSubTitle>
        <TipsInfo>
          Primero tenes que tener los ingredientes para beber lo que a vos te
          gusta. Compra primero las botellas de tu receta favorita; despues iras
          sumando botellas y recetas a tu repertorio. A continuacion te dejo mis
          recomendados para armar una barra basica.
        </TipsInfo>
        <BlogSubTitle>Barra basica</BlogSubTitle>
        <TipsInfo>
          Podes Armar una barra basica con tan solo 4 botellas de lo que mas te
          gusta beber, mas algunos mixers. Elegi tus favoritos de esta lista de
          basicos
        </TipsInfo>
        <TipsInfo>
          <BarraList>
            <BarraItem>Whiskey Americano (Bourbon o Tennessee) </BarraItem>
            <BarraItem>Vodka</BarraItem>
            <BarraItem>Bitter aromatico angostura</BarraItem>
            <BarraItem>Vermut Rosso</BarraItem>
            <BarraItem>Bitter Rojo</BarraItem>
            <BarraItem>Aperol</BarraItem>
            <BarraItem>Cynar</BarraItem>
            <BarraItem>Licor Cointreau</BarraItem>
            <BarraItem>Gin london dry</BarraItem>
          </BarraList>
        </TipsInfo>
      </ContainerTips>
      <ContainerRecetas>
        <Paper square>
          <Tabs
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
            value={tabIndex}
            onChange={handleTabChange}
          >
            <Tab label="Recetario 1">#1</Tab>
            <Tab label="Recetario 2">#2</Tab>
            <Tab label="Recetario 3">#3</Tab>
          </Tabs>
          <Box sx={{ padding: 2 }}>
            {/* {tabIndex === 1 && <Box></Box>}
            {tabIndex === 2 && <Box></Box>} */}
            {recetas.map(
              (receta) =>
                tabIndex === receta.recetaNumber && (
                  <Box>
                    <CardRecetas key={receta.id} {...receta} />
                  </Box>
                )
            )}
          </Box>
        </Paper>
      </ContainerRecetas>
    </BlogWrapper>
  );
};

export default Blog;
