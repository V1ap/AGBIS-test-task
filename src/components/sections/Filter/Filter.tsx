import { observer } from "mobx-react-lite";
import Select from "../../ui/Select/Select";
import styles from "./styles.module.scss";
import filterStore from "../../../store/filterStore";
import { useTranslation } from "react-i18next";

const Filter: React.FC = observer(() => {
  const { setFilter, filter } = filterStore;
  const { t } = useTranslation();

  return (
    <section className={styles.filter}>
      <h2 className={styles.filter__header}>{t("filter.header")}</h2>
      <Select
        items={filter.items}
        currentItem={filter.current}
        setCurrentItem={(value: string) => setFilter(value)}
      />
    </section>
  );
});

export default Filter;
