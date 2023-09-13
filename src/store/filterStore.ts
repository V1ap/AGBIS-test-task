import { makeAutoObservable } from "mobx";

class FilterStore {
  filter = {
    items: [
      "filter.filterItem-All",
      "filter.filterItem-Completed",
      "filter.filterItem-NotCompleted",
    ],
    current: "filter.filterItem-All",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setFilter = (newValue: string) => {
    if (
      "filter.filterItem-All" === newValue ||
      "filter.filterItem-Completed" === newValue ||
      "filter.filterItem-NotCompleted" === newValue
    ) {
      this.filter.current = newValue;
    }
  };
}

export default new FilterStore();
