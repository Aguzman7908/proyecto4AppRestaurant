import React from "react";
import { useState} from "react";


const menu = [
  {
    title: "EMPANADAS ARGENTINAS",
    precio:"$80.00",
    description:
      "Las empanadas mendocinas son típicas de la región de Mendoza en Argentina – también conocida por sus excelentes vinos. Adapte un poco la receta del picadillo o condumio para las empanadas, ajuste las cantidades de especias a mi sazón y decidí usar orégano fresco y cebollines.",
    image:
      "https://viajerocasual.com/wp-content/uploads/2021/05/comidas-tipicas-de-argentina-empanadas-tucumanas.webp"  },
  {
    title: "ALFAJOR",
    precio:"$80.00",
    description:
      "El alfajor es un tipo de golosina con relleno de dulce de leche o mermelada de leche que se intercala entre dos galletas dulces. La combinación se recubre con una capa de chocolate o se espolvorea con azúcar glas. El nombre de alfajor procede de la palabra árabe al-hasú, que significa relleno.",
    image:
      "https://viajerocasual.com/wp-content/uploads/2021/05/comidas-tipicas-de-argentina-alfajor.webp"  },
  {
    title: "ASADO",
    precio:"$80.00",
    description:
      "Considerado un epítome de la gastronomía y la cultura argentinas, el asado es mucho más que una simple comida. En Argentina, Chile, Uruguay, Paraguay y otros países sudamericanos, es un evento culinario y social al que acuden amigos y familiares para compartir la alegría de la cocina al aire libre.",
    image:
      "https://viajerocasual.com/wp-content/uploads/2021/05/comidas-tipicas-de-argentina-asado.webp"  },
  {
    title: "DULCE DE CAJETA",
    precio:"$80.00",
    description:
      "El dulce de leche es un tipo de dulce de leche condensada procedente de Argentina. Tradicionalmente, se elabora calentando leche de vaca endulzada hasta que se carameliza y adquiere una consistencia espesa, suficiente para servir de pasta para untar, de relleno para tartas y pasteles, o de cobertura para helados.",
    image:
      "https://viajerocasual.com/wp-content/uploads/2021/05/comidas-tipicas-de-argentina-dulce-de-leche.webp"  },
  {
    title: "MILANESA",
    precio:"$80.00",
    description:
      "La milanesa, a menudo denominada el plato nacional no oficial de Argentina, es una comida humilde pero deliciosa que consiste en una loncha de carne de vacuno de primera calidad empanada que se fríe en aceite caliente y que se enrosca al cocinarse, debido a que los cortes de carne elegidos tienen menos grasa y tendones que otros cortes",
    image:
      "https://viajerocasual.com/wp-content/uploads/2021/05/comidas-tipicas-de-argentina-milanesa.webp"  },
  {
    title: "CHIMICHURRI",
    precio:"$80.00",
    description:
      "Lo que la harissa es para la cocina marroquí y lo que la mostaza es para los perritos calientes en EE.UU., el chimichurri es para los filetes en Argentina. Es una mezcla aromática de perejil, ajo, orégano, aceite de oliva, vinagre y escamas de pimiento rojo picante, aunque a veces se incluyen en la combinación otros ingredientes como el cilantro o los tomates picados.",
    image:
      "https://viajerocasual.com/wp-content/uploads/2021/05/comidas-tipicas-de-argentina-chimichurri.webp"  }
];


const MenuItem = (props) => {
    const { title, description, image, precio } = props;
    return (
      
            <div>
              
              <h2 className="animate__animated animate__bounce">{title} </h2>
              <h3>Precio:{precio}</h3><br></br>
              <p><h3>{description}</h3></p>
              <img src={image} alt="" title className="animate__animated animate__bounce"/>
            </div>
       
    );
  };



  const Menu = () => {
    /*const { title, description, image, precio } = props;*/
    return (
            
            <div className="content">
              
              {menu.map ((menuItem)=> <MenuItem title={menuItem.title} description={menuItem.description} image={menuItem.image}precio={menuItem.precio}/>)}
            </div>
       
    );
  };

  export default Menu;