import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");
  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  let day = date.getDate();
  let month = date.getMonth() + 1;

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${date.getFullYear()}`;
};

const addZeroToDate = (n: number): string => {
  return n < 10 ? `0${n}` : `${n}`;
};

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let monthFormat = parseInt(month);
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[monthFormat - 1]} de ${year}`;
};

export const dateInput = (date: string): Date => {
  let [year, month, day] = date.split("-");
  let newDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return newDate;
};
