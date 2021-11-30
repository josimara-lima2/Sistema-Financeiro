import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { dateInput } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
import {InputItem,InputItemNumber} from '../InputItem/index'
import { SelectItem } from "../SelectItem";
type Props = {
  onAdd: (item: Item) => void;
};
export const InputArea = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [valueInput, setValueInput] = useState<number>(0);
  const [dateAdd,setAdd] = useState('')
  const [categoryAdd, setCategoryAdd] = useState("rent");

  const handleAddEvent = () => {
    if (title !== "" && valueInput !== 0 && dateAdd !== "" && categoryAdd !== "") {
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
      }else if (valueInput === 0) {
        alert("Valor inválido");
      }else if (dateAdd === "") {
        alert("Data inválida");
      }
    }
  };

  console.log(title);
  return (
    <C.Container>
      <C.AreaInputs>
      <InputItem title='Data' type='date' setString={setAdd} />
      <SelectItem title="Categoria" setCategory={setCategoryAdd}/>
      <InputItem title="Título" type="text" setString={setTitle}/>
      <InputItemNumber title="Valor" type="number" setNumber={setValueInput}/> 
      </C.AreaInputs>
      <C.ButtonAdd onClick={handleAddEvent}>Adicionar</C.ButtonAdd>
    </C.Container>
  );
};
