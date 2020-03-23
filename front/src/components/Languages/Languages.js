import React, { useState, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { LANGUAGES } from "../../constants/Languages";

const menu = (
  <Menu>
    {LANGUAGES.map(lang => (
      <Menu.Item key={lang.code}>
        <div
          className="d-flex justify-content-center align-items-center"
          onClick={() => {
            localStorage.setItem("language", lang.code);
            window.location.reload(true);
          }}
        >
          <img width="20" src={lang.icon} alt="ru" />
          <span className="ml-2">{lang.title}</span>
        </div>
      </Menu.Item>
    ))}
  </Menu>
);
const Languages = () => {
  const [currentLang, setCurrentLang] = useState({});
  useEffect(() => {
    if (localStorage.language) {
      LANGUAGES.forEach(lang => {
        return lang.code === localStorage.language.split(/[,]/)[0]
          ? setCurrentLang(lang)
          : null;
      });
    }
  }, []);

  return (
    <Dropdown overlay={menu}>
      <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <div className="d-flex justify-content-center align-items-center">
          <img width="20" src={currentLang.icon} alt="ru" />
          <span className="ml-2">{currentLang.title}</span>
          <DownOutlined className="mx-2" />
        </div>
      </div>
    </Dropdown>
  );
};

export default Languages;
