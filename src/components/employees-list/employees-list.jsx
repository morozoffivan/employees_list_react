import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = () => {
    return (
        <ul className='app-list list-group'>
            <EmployeesListItem name='John' surname = 'Smith' salary = {800}/>
            <EmployeesListItem name='Alex' surname = 'Smith' salary = {100}/>
            <EmployeesListItem name='Wi' surname = 'Smith' salary = {1200}/>
        </ul>
    )
}

export default EmployeesList;