import { Component } from 'react';
import AppFilter from './app-filter/app-filter';
import AppInfo from './app-info/app-info';
import './app.css';
import EmployeesAddForm from './employees-add-form/employees-add-form';
import EmployeesList from './employees-list/employees-list';
import SearchPanel from './search-panel/search-panel';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
                [
                    {name:'Wi', surname : 'Smith', salary : 1000, increase: false, id:1},
                    {name:'Alex', surname : 'Smith', salary : 1200, increase: false, id:2},
                    {name:'John', surname : 'Smith', salary : 800, increase: true, id:3},
                ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index); // copy data elements until our needed one in index;
            // const after = data.slice(index + 1); // copy data elements after our needed one in index;

            // const newArr =[...before, ...after];
            return {
                data: data.filter(item => item.id !== id),
            }
        })
        
    }
    
    render() {
        return (
            
            <div className="app">
                <AppInfo/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data = {this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
                
            </div>
        )
    }
    
}

export default App;