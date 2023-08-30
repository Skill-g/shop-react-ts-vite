import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";

const Bodylogin = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  const toggleForm = () => {
    setIsRegistration(!isRegistration);
  };

  return (
    <div className="regblock">
      <div className="regpos">
        <div className="regblockform">
        <form action=""             className={`form-reg ${
              isRegistration ? "slide-up" : "slide-down"
            }`}>
        <span className="form-title-reg">
              {isRegistration ? "Регистрация" : "Вход"}
            </span>
    <div className="email-inputreg validate-input">
      <input
        className="input"
        type="text"
        name="email"
        placeholder="Email"
      ></input>
      <span className="focus-input"></span>
      <span className="symbol-input">
        <i aria-hidden="true">
          {" "}
          <FaEnvelope />{" "}
        </i>
      </span>
    </div>
    {isRegistration && (
    <div className="email-inputreg validate-input">
      <input
        className="input"
        type="text"
        name="username"
        placeholder="Имя профиля"
      ></input>
      <span className="focus-input"></span>
      <span className="symbol-input">
        <i aria-hidden="true">
          {" "}
          <FaUserAlt />{" "}
        </i>
      </span>
    </div>
    )}
    <div className="password-inputreg validate-input">
      <input
        className="input"
        type="password"
        name="pass"
        placeholder="Пароль"
      ></input>
      <span className="focus-input"></span>
      <span className="symbol-input">
        <i aria-hidden="true">
          {" "}
          <FaLock />{" "}
        </i>
      </span>
    </div>
    <div className="btn-group">
      <button className="btn" type="button">Войти</button>
      <button className="btn" type="button" onClick={toggleForm}>
                {isRegistration ? "У меня уже есть аккаунт" : "Регистрация"}
              </button>
    </div>
    <div className="text-center">
      <a className="txt2" id="regbtn" href="#" >
      {isRegistration ? "" : "Забыли пароль?"}
      </a>
    </div>
    <div className="text-bottom"></div>
  </form>
        </div>
        <div className="leftimg"></div>
      </div>
    </div>
  );
};

export default Bodylogin;
