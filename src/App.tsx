import { useState,useEffect } from 'react'
import * as C from './app.styles'
import {Category} from './types/Category'
import {Item} from './types/Item'

import {categories} from './data/categories'
import {items} from './data/items'

import {getCurrentMonth} from './helpers/dateFilter'
import {filterListByMonth} from './helpers/dateFilter'

import {Table} from './components/table/index'
import {InfoArea} from './components/InfoArea/index'
import {InputArea} from './components/InputArea/index'

function App() {
  const [list,setList] = useState(items)
  const [filteredList,setFilteredList] = useState<Item[]>([])
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth())
  const [income,setIncome] =useState(0)
  const [expense,setExpense]= useState(0)

useEffect(()=>{
  setFilteredList(filterListByMonth(list,currentMonth))
  
},[list,currentMonth])
 

useEffect(() => {
  setIncome(handleIncome)
  setExpense(handleExpense)
},[filteredList])

const handleMonthChange = (newMonth:string) =>{
  setCurrentMonth(newMonth)

}

const handleIncome = ():number=>{
  let soma =0
    filteredList.map((i)=>{
      if(!categories[i.category].expense){
        soma += i.value;    
      }
    })
    return soma
    
}

const handleExpense=():number =>{
  let soma = 0 
  filteredList.map((i)=>{
    if(categories[i.category].expense){
      soma += i.value; 
    }
  })
  return soma
}
const handleAddItem = (item:Item) =>{
  let newList = [...list]
  newList.push(item)
  setList(newList)
}

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Financeiro
        </C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea 
        
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense ={expense}
        />

        <InputArea onAdd={handleAddItem}/>
        <Table list={filteredList}/>

     
      </C.Body>
    </C.Container>
  );
}

export default App;
