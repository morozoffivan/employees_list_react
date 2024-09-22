import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data}) => {
return (
        <ul className='app-list list-group'>
            {data.map((item, index) => {
                return(
                    <EmployeesListItem key = {index} {...item}/>
                    )
                })}
        </ul>
)
}

export default EmployeesList;