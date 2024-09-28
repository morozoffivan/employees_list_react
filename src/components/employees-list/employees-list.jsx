import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data, deleteItem, onToggleProp}) => {
return (
        <ul className='app-list list-group'>
            {data.map(({id, ...item}) => {
                return(
                    <EmployeesListItem 
                    key = {id} 
                    {...item}
                    onDelete = {() => deleteItem(id)}
                    onToggleProp = {(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}/>
                    )
                })}
        </ul>
)
}

export default EmployeesList;