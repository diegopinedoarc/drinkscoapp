import { recetas } from "../../data/recetas";

const INITIAL_STATE = {
  recetas: recetas,
};

const recetasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recetasReducer;
