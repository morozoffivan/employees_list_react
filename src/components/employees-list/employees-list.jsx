import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data}) => {
return (
        <ul className='app-list list-group'>
            {data.map(item => {
                return(
                    <EmployeesListItem name={item.name} surname={item.surname} salary={item.salary} />
                    )
                })}
        </ul>
)
}

export default EmployeesList;