import AppFilter from './app-filter/app-filter';
import AppInfo from './app-info/app-info';
import './app.css';
import EmployeesAddForm from './employees-add-form/employees-add-form';
import EmployeesList from './employees-list/employees-list';
import SearchPanel from './search-panel/search-panel';

const App = () => {

    const data = [
        {name:'Wi', surname : 'Smith', salary : 1000, increase: false},
        {name:'Alex', surname : 'Smith', salary : 1200, increase: false},
        {name:'John', surname : 'Smith', salary : 800, increase: true},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data = {data}/>
            <EmployeesAddForm/>
            
        </div>
    )
}

export default App;