import React from "react";
import { imageAddress } from '../../constants';
import './Header.scss';

const title = "Jeżeli jesteś lekarzem i chciałbyś z nami współpracować";
const ending = "wypełnij formularz, a my skontaktujemy się z Tobą i przedstawimy nowości w naszej ofercie.";

export function Header() {
  return (
    <header>
      <p className="header__title">{title}</p>
      <img className="header__img" alt="line" src={imageAddress} />
      <p className="header__ending">{ending}</p>
    </header>
  );
}
