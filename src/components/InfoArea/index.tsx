import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem/index";
type Props = {
  currentMonth: string;
  onMonthChange: (newMoth: string) => void;
  income: number;
  expense: number;
};
export const InfoArea = ({
  currentMonth,
  income,
  expense,
  onMonthChange,
}: Props) => {
  const handlePrevMoth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  let balanco = (income - expense).toFixed(2);
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMoth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          color={income - expense < 0 ? "red" : "green"}
          title="Balanco"
          value={Number(balanco)}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
