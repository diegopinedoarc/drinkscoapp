import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ofertasReducer from "./ofertas/ofertas-reducer";
import categoriesReducer from "./categories/categories-reducer";
import productsReducer from "./products/products-reducer";
import cartReducer from "./cart/cart-reducer";
import userReducer from "./user/user-reducer";
import ordersReducer from "./ordenes/order-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  ofertas: ofertasReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
