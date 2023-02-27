import React from "react";
import {
  CateCardContainer,
  CateCardImg,
  CateCardTitle,
} from "./CategoriesCardStyle";
import * as categoriesActions from "../../redux/categories/categories-actions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export const CategoriesCard = ({ title, img, category }) => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();
  return (
    <motion.div whileTap={{ scale: 0.92 }}>
      <CateCardContainer
        selected={category === selectedCategory}
        onClick={() => dispatch(categoriesActions.selectCategory(category))}
      >
        <CateCardTitle> {title} </CateCardTitle>
        <CateCardImg
          src={
            "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/cardbacknegro_xg0oac.jpg"
          }
          alt={category}
        />
      </CateCardContainer>
    </motion.div>
  );
};

export default CategoriesCard;
