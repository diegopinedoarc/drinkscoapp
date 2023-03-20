export let recetas = [];
let receta = class {
  constructor(name, id, description, info, img, recetaNumber, productos) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.img = img;
    this.info = info;
    this.recetaNumber = recetaNumber;
    this.productos = productos;
  }
};
let createAddRecipe = (
  name,
  id,
  description,
  info,
  img,
  recetaNumber,
  productos
) => {
  return recetas.push(
    new receta(name, id, description, info, img, recetaNumber, productos)
  );
};
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (recetas.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

createAddRecipe(
  "Bloody Mary",
  idRandom(),
  "Se puede hacer directo en el vaso o se puede batir suavemente: yo lo preparo en la coctelera, pasandolo de un vaso al otro un par de veces.",
  "Coloca el juego de lima, la salsa inglesa, la salsa picante, y sal de apio en la coctelera. Revolve y agrega hielo. Suma el vodka y completa con jugo de tomate frio. Bati suavemente y cola sobre hielo nuevo. Decora con una rama de apio.",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679274022/drinksCo/blodymary_vy1m6f.webp",
  random(0, 2),
  [
    "1 oz de jugo de lima -",
    " 1 cucharada de salsa inglesa -",
    " pimienta negra -",
    " sal de apio -",
    " salsa picante a gusto -",
    " 2ox de vodka -",
    " jugo de tomate -",
    " garnish: rama de apio -",
  ]
);
createAddRecipe(
  "Tom Collins",
  idRandom(),
  "Originalmente se hacia directo en el vaso con gin dulce tip Old Tom. Yo lo prefiero batido, con gin tipo london dry y almibar",
  "Bati el gin, el limon y el almibar. Colá en vsio largo sobre hielo nuevo y termina con un dash de soda. Decorá con la rodaja de limon y la cereza",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679274353/drinksCo/tomcollins_dvdqlp.webp",
  0,
  [
    " 2oz de Gin tipo london dry -",
    " 1oz de jugo de limon -",
    " 1oz de almibar simple -",
    " soda -",
    " garnish: rodaja de limon y cereza -",
  ]
);
createAddRecipe(
  "Mint Julep",
  idRandom(),
  "Un clasico del sur de los Estados Unidos, es el cocel oficial del Derby de Kentucky",
  "En el fondo del vaso machacá suavemente la menta junto al almibar. Agregá hielo roto, suá el bourbon y revolvé para integras sabores. Agregá más hielo y decorá con una ramita de menta.",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679274731/drinksCo/mintjulep_eadvzv.webp",
  random(0, 2),
  [
    " 2oz de bourbon -",
    " 1/2 oz de almibar -",
    " 2 dashes de bitter angostura -",
    " hojas de menta -",
  ]
);
createAddRecipe(
  "Negroni",
  idRandom(),
  "Creado en 1919 por Fosco Scarselli en el café Casoni de florencia, supuestamente para el conde Negroni",
  "Verté todos los ingredientes en un vaso corto sobre un hielo extra grande y revolve un poco. También es muy común refrescarlo, tecnica que lo diluye, haicendolo más fácil de beber. Decora con una rodaja de naranja",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679275261/drinksCo/negroni_cy42ic.jpg",
  2,
  [
    " 1 oz de gin -",
    " 1 oz de vermut rosso -",
    " 1oz de campari -",
    " garnish: twist o rodaja de naranja -",
  ]
);
createAddRecipe(
  "Old Fashioned",
  idRandom(),
  "Una de las recetas más antiguas que existe. Originariamente se llamaba Whisky Cocktail y se hacia con 2 terrones de azúcar embebidos en bitter angostura, que se machacaban con una rodaja de naranja. Lego se agregaba hielo, bourbon y se decoraba",
  "Agregá todo directo en el vaso corto sobre hielo en cubitosm revolvé un poco y terminá con el twist. La cereza es opcional",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679275650/drinksCo/oldfashi_c6v6sx.jpg",
  random(0, 2),
  [
    " 2oz de bourbon -",
    " 1 cucharada de almibar -",
    " 2 dashes de bitter angostura -",
    " garnish: rodaja de naranja -",
  ]
);
createAddRecipe(
  "Aperol Piletero",
  idRandom(),
  "El Aperol Spritz por su bajo contenido alcohólico, es el compañero ideal de una tarde en la pileta. Nada mejor que esta jarra fresca y facil de preparar para compartir con amigos",
  "Llena la jarra con hielo en cubitos. Agrega el Aperol, las frutillas lavadas y cortadas, la naranja en gajos, el almibar y jugo de naranja y de limón. Revolve un poco con cuchara larga y completá con vino espumoso.",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679322102/drinksCo/apperol-berries_vfonzz.jpg",
  1,
  [
    " 1 taza de aperol -",
    " 1 taza de frutillas -",
    " 1 naranja -",
    " 1/2 taza de jugo de naranja -",
    " 1/2 taza de jugo de limon -",
    " 1/2 taza de almibar -",
    " vino espumoso seco -",
  ]
);
createAddRecipe(
  "Bramble",
  idRandom(),
  "Creado por Dick Bradsell en el Fred's Club de Londres en 1984",
  "Bati el gin, el jugo de limon y el almibar y colá en un vaso corto sobre hielo roto. Terminá con el licor de moras, buscando dejar un efecto degradé de colores. Por ultimo, decorá con los frutos y la rodaja de limón",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679322293/drinksCo/origen-Bramble-1024x1024_ydzkoy.jpg",
  random(0, 2),
  [
    " 1 1/2 oz de gin -",
    " 1oz de limón -",
    " 1/2 oz almibar -",
    " LIcor de moras -",
    " rodaja limon -",
  ]
);
createAddRecipe(
  "Jarra Cynar Julep",
  idRandom(),
  "Para una jarra recomiendo usar mitad jugo mitad gaseosa de pomelo, pero si elegís una sola opción también tendrás buen resultado.",
  "Colocá en la jarra el almibar, la menta, el limón y hielo en cubitos hasta completar 3/4 de jarra. Suma el pomelo en gajos y el Cynar. Completa con la gaseosa o jugo de pomelo y revolve.",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679323285/drinksCo/Coctel-cynar-julep_b4ykuz.webp",
  random(0, 2),
  [
    " 1/2 taza almibar simple -",
    " 6 ramas de menta -",
    " 1/2 taza de jugo de limon -",
    " 1 pomelo rosado cortado en gajos -",
    " 2 tazas de cynar -",
    " gaseosa o jugo de pomelo -",
  ]
);
createAddRecipe(
  "Cosmopolitan",
  idRandom(),
  "La primer receta conocida es de 1934. Muchos reclaman ser sus creadores; la receta actual fue creada en 1987 por Toby Ceccchini en Manhattan. Es el cóctel que beben las protagonistas de la erie Sex and the City",
  "Bati energicamente todos los ingredientes. Colá en una copa cóctel previamente enfriada y decorá con un twist de cáscara de naranja",
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1679323285/drinksCo/cosmopolitan_aromrr.jpg",
  random(0, 2),
  [
    " 2oz de vodka -",
    " 1oz de cointreau -",
    " 1/2oz de jugo de lima -",
    " 1/2oz de jugo de arandanos -",
    " garnish: twist de naranja -",
  ]
);
export const TotalRecetas = recetas.length;
