import * as C from './styles'
import {Item} from '../../types/Item'
import {useState} from 'react'
import { dateInput } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'
type Props ={
    onAdd:(item:Item) => void
}
export const InputArea = ({onAdd}:Props) =>{
    const [title,setTitle] = useState('')
    const [valueInput,SetValueInput] = useState<number>(0)
    const [dateAdd,setDateAdd] = useState('')
    const [index,setIndex] = useState('rent')



    const handleAddEvent = () => {
        if(title === ''){
            alert('Título inválido')
        }
        if(valueInput === 0){
            alert('Valor invalido')
        }
        
        let newItem:Item = {
            date: dateInput(dateAdd),
            category:index,
            title: title,
            value:valueInput
        }
        onAdd(newItem)
    }
    
console.log(dateAdd)
    return(
        <C.Container>
            <input type="date" onChange={e => setDateAdd(e.target.value)}/>
            
            <select name="op" id="" onChange={e => setIndex(e.target.value)}>
            
                <option value="rent" >Aluguel</option>
                <option value="food">Alimentação</option>
                <option value="salary">Salario</option>
            </select>
            <input type="text" onChange={e => setTitle(e.target.value)}/>
            <input type="number" onChange={e => SetValueInput(Number(e.target.value))} />
           <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}