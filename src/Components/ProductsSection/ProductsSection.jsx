import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import {
  ButtonContainerStyled,
  ButtonPag,
  ProductsContainer,
} from "./ProductsSectionStyle";
import { INITIAL_LIMIT } from "../../utils/constants";

const ProductsSection = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  let products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const TotalProducts = useSelector((state) => state.products.totalProducts);
  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      {/* <SectionTitle
        style={{
          fontFamily: "var(--fontgrande)",
          fontSize: "1.5rem",
          width: "90%",

          display: "flex",
          justifyContent: "center",
          borderRadius: "0.4rem",
        }}
      >
        Nuestros productos
      </SectionTitle> */}
      <ProductsContainer>
        {Object.entries(products).map(([, items]) =>
          items.map((item) => {
            if (limit >= item.prodNumber || selectedCategory) {
              return <ProductCard key={item.prodNumber} {...item} />;
            }
            return null;
          })
        )}
      </ProductsContainer>
      {!selectedCategory && (
        <ButtonContainerStyled>
          <ButtonPag
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            secondary="true"
            disabled={INITIAL_LIMIT === limit}
          >
            -
          </ButtonPag>
          <ButtonPag
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={TotalProducts <= limit}
          >
            +
          </ButtonPag>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default ProductsSection;
