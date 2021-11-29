import * as C from './styles'
import { Item } from '../../types/Item'
import {TableItem} from '../TableItem/index'
type Props={
    list:Item[]
}
export const Table = ({list}:Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadCollumn width={100}>Data</C.TableHeadCollumn>
                    <C.TableHeadCollumn width={130} >Categoria</C.TableHeadCollumn>
                    <C.TableHeadCollumn  >Título</C.TableHeadCollumn>
                    <C.TableHeadCollumn width={150}>Valor</C.TableHeadCollumn>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item,index)=>(
                        <TableItem key={index} item={item}/>
                    ))
                }
            </tbody>
        </C.Table>
    )
}