import { BASKET_ROUTE, REG_ROUTE, SHOP_ROUTE } from "@/processes/consts";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="brandname">
        <a href={SHOP_ROUTE}>Skill</a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href={SHOP_ROUTE}>Магазин</a>
          </li>
          <li>
            <a href={BASKET_ROUTE}>Корзина</a>
          </li>
          <li>
            <a href="/news">Новое</a>
          </li>
          <li>
            <a href="/contacts">Контакты</a>
          </li>
        </ul>
      </div>
      <div className="tel"></div>
      <div className="loginh">
        <a href={REG_ROUTE}>
          Войти <FaArrowRight />{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
