import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { dateInput } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
type Props = {
  onAdd: (item: Item) => void;
};
export const InputArea = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [valueInput, SetValueInput] = useState<number>(0);
  const [dateAdd, setDateAdd] = useState("");
  const [categoryAdd, setCategoryAdd] = useState("rent");

  const handleAddEvent = () => {
    if (title !== "" && valueInput !== 0 && dateAdd !== "") {
      let newItem: Item = {
        date: dateInput(dateAdd),
        category: categoryAdd,
        title: title,
        value: valueInput,
      };
      onAdd(newItem);
    } else {
      if (title === "") {
        alert("Título inválido");
      }
      if (valueInput === 0) {
        alert("Valor inválido");
      }
      if (dateAdd === "") {
        alert("Data inválida");
      }
    }
  };

  console.log(dateAdd);
  return (
    <C.Container>
      <C.Label>
        Data<br></br>
        <C.Input type="date" onChange={(e) => setDateAdd(e.target.value)} />
      </C.Label>

      <C.Label>
        Categoria
        <br />
        <C.Select name="op" onChange={(e) => setCategoryAdd(e.target.value)}>
          <C.Option value="rent">Aluguel</C.Option>
          <C.Option value="food">Alimentação</C.Option>
          <C.Option value="salary">Salario</C.Option>
        </C.Select>
      </C.Label>

      <C.Label>
        Título
        <br />
        <C.Input type="text" onChange={(e) => setTitle(e.target.value)} />
      </C.Label>
      <C.Label>
        Valor
        <br />
        <C.Input
          type="number"
          onChange={(e) => SetValueInput(Number(e.target.value))}
        />
      </C.Label>
      <C.ButtonAdd onClick={handleAddEvent}>Adicionar</C.ButtonAdd>
    </C.Container>
  );
};
