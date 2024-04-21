import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
// @ts-ignore
import Logo from "./logo.png";
// @ts-ignore
import Icon from "./icon.png";

interface NavbarProps {
  onSelectStatus: (status: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelectStatus }) => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      setActiveButton("");
    } else {
      setActiveButton(buttonName);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={Logo} alt="s" />
          <span className="logotext">Рассылки</span>
        </div>
        <input
          type="text"
          placeholder="Поиск кампаний"
          className="navbar-search"
        />
        <div className="navbar-dropdowns d-flex">
          <Dropdown
            onSelect={(status: string | null) =>
              status && onSelectStatus(status)
            }
          >
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Все статусы
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Активная">Активная</Dropdown.Item>
              <Dropdown.Item eventKey="На паузе">На паузе</Dropdown.Item>
              <Dropdown.Item eventKey="Закончена">Закончена</Dropdown.Item>
              <Dropdown.Item eventKey="all">Все статусы</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Только промо
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="">Активная</Dropdown.Item>
              <Dropdown.Item eventKey="">На паузе</Dropdown.Item>
              <Dropdown.Item eventKey="">Закончена</Dropdown.Item>
              <Dropdown.Item eventKey="">Все статусы</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Все сервисы
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Афиша">Афиша</Dropdown.Item>
              <Dropdown.Item eventKey="Маркет">Маркет</Dropdown.Item>
              <Dropdown.Item eventKey="Кинопоиск">Кинопоиск</Dropdown.Item>
              <Dropdown.Item eventKey="Плюс">Плюс</Dropdown.Item>
              <Dropdown.Item eventKey="Музыка">Музыка</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Автор: Я
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Активная">Активная</Dropdown.Item>
              <Dropdown.Item eventKey="На паузе">На паузе</Dropdown.Item>
              <Dropdown.Item eventKey="Закончена">Закончена</Dropdown.Item>
              <Dropdown.Item eventKey="all">Все статусы</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <button className="navbar-button-sort">
          <img src={Icon} alt="s" />
        </button>
        <button className="navbar-button-create">Создать</button>
      </div>
      <div className="navbar-bottom">
        <button
          className={activeButton === "services" ? "active" : ""}
          onClick={() => handleButtonClick("services")}
        >
          Все сервисы
        </button>
        <button
          className={activeButton === "search" ? "active" : ""}
          onClick={() => handleButtonClick("search")}
        >
          Поиск
        </button>
        <hr />
        <button
          className={activeButton === "contacts" ? "active" : ""}
          onClick={() => handleButtonClick("contacts")}
        >
          Контакты
        </button>
        <button
          className={activeButton === "campanies" ? "active" : ""}
          onClick={() => handleButtonClick("campanies")}
        >
          Кампании
        </button>
        <button
          className={activeButton === "dash" ? "active" : ""}
          onClick={() => handleButtonClick("dash")}
        >
          Дашборды
        </button>
        <button
          className={activeButton === "gallery" ? "active" : ""}
          onClick={() => handleButtonClick("gallery")}
        >
          Галерея
        </button>
        <button
          className={activeButton === "automatisation" ? "active" : ""}
          onClick={() => handleButtonClick("automatisation")}
        >
          Автоматизация
        </button>
        <button
          className={activeButton === "otch" ? "active" : ""}
          onClick={() => handleButtonClick("otch")}
        >
          Отчёты
        </button>

        <hr />
        <button
          className={activeButton === "reference" ? "active" : ""}
          onClick={() => handleButtonClick("reference")}
        >
          Справочная
        </button>
        <button
          className={activeButton === "report" ? "active" : ""}
          onClick={() => handleButtonClick("report")}
        >
          Сообщить<br></br>об ошибке
        </button>
        <div className="navbar-bottom-left">
          <button
            className={activeButton === "notifications" ? "active" : ""}
            onClick={() => handleButtonClick("notifications")}
          >
            Уведомления
          </button>
          <button
            className={activeButton === "settings" ? "active" : ""}
            onClick={() => handleButtonClick("settings")}
          >
            Настройки
          </button>
          <button
            className={activeButton === "account" ? "active" : ""}
            onClick={() => handleButtonClick("account")}
          >
            Аккаунт
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
