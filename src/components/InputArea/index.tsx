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
    const [value,SetValue] = useState<number>(0)
    const [dateAdd,setDateAdd] = useState('')
    const [index,setIndex] = useState(0)

    
    

    const handleAddEvent = () => {
        let newItem:Item = {
            date: dateInput(dateAdd),
            
            category: 'food',
            title: title,
            value:value
        }
        onAdd(newItem)
    }
    

    

    return(
        <C.Container>
            <input type="date" onChange={e => setDateAdd(e.target.value)}/>
            
            <select name="" id="" onChange={e => console.log(e.currentTarget)}>
            
                <option value="food" >Aluguel</option>
                <option value="rent">Alimentação</option>
                <option value="salary">Salario</option>
            </select>
            <input type="text" onChange={e => setTitle(e.target.value)}/>
            <input type="number" onChange={e => SetValue(Number(e.target.value))} />
           <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}