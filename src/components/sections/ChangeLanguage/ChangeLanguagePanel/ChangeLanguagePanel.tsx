import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import i18n from "../../../../i18n";

const ChangeLanguagePanel: React.FC = () => {
  const [language, setLanguage] = useState<string>("");
  useEffect(() => {
    // определение языка страницы
    if (
      window.navigator.language === "ru" ||
      window.navigator.language === "en"
    ) {
      i18n.changeLanguage(window.navigator.language);
      setLanguage(window.navigator.language);
    } else {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }, []);

  const changeLanguageHandler = (lng: "en" | "ru") => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <ul className={styles.changeLanguagePanel__list}>
      <li
        className={`${styles.changeLanguagePanel__item} ${
          language === "ru" ? styles.active : ""
        }`}
      >
        <button
          className={styles.changeLanguagePanel__btn}
          onClick={() => changeLanguageHandler("ru")}
        >
          Русский
        </button>
      </li>
      <li
        className={`${styles.changeLanguagePanel__item} ${
          language === "en" ? styles.active : ""
        }`}
      >
        <button
          className={styles.changeLanguagePanel__btn}
          onClick={() => changeLanguageHandler("en")}
        >
          English
        </button>
      </li>
    </ul>
  );
};

export default ChangeLanguagePanel;
