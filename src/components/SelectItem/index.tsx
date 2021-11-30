import * as C from './style'

type Props = {
    title:string;
    setCategory:(valor:string)=>void
}
export const SelectItem = ({title,setCategory}:Props) => {
    return(
        <C.Container>
            <h3>{title}</h3>
            <C.Select name="op" onChange={(e) => setCategory(e.target.value)}>
                <C.Option value="rent">Aluguel</C.Option>
                <C.Option value="food">Alimentação</C.Option>
                <C.Option value="salary">Salario</C.Option>
            </C.Select>
        </C.Container>
    )
}

