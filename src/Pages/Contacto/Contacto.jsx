import React from "react";
import {
  ContactoContainerStyled,
  ContactoTitulo,
  ContactoP,
} from "./ContactoStyle";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import Iframe from "react-iframe";
import { BannerWrapper } from "../../Components/BannerDestacados/BannerDestacadosStyle";
import { Divisor } from "../../Components/BannerDestacados/BannerDestacadosStyle";

const Contacto = () => {
  return (
    <ContactoContainerStyled>
      <BannerWrapper>
        <Divisor></Divisor>
        <ContactoTitulo>
          ¡Nos podes llamar o enviarnos un correo!
        </ContactoTitulo>
        <Divisor></Divisor>
      </BannerWrapper>

      <ContactoTitulo>
        <BsTelephone /> Telefono:
      </ContactoTitulo>
      <ContactoP> 0-800-666-drink</ContactoP>
      <ContactoTitulo>
        <FaRegEnvelope /> Email:
      </ContactoTitulo>
      <ContactoP> info@drinksco.com</ContactoP>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.2925914523491!2d-58.480227005904794!3d-34.574555542456366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb665de196317%3A0xb8d1b3cf453f061b!2sBodega%20Amparo!5e0!3m2!1ses!2sar!4v1676933670998!5m2!1ses!2sar"
        width="600"
        height="450"
        styles={{
          height: "18rem",
          width: "100%",
          marginBottom: "2rem",
          border: "solid 2px 2px 0px 2px black",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Iframe>
    </ContactoContainerStyled>
  );
};

export default Contacto;
