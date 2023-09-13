import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import ChangeLanguagePanel from "./ChangeLanguagePanel/ChangeLanguagePanel";

const ChangeLanguage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.changeLanguage}>
      <h2 className={styles.changeLanguage__header}>
        {t("changeLanguage.header")}
      </h2>
      <ChangeLanguagePanel />
    </section>
  );
};

export default ChangeLanguage;
