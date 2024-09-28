import { Component } from 'react';
import AppFilter from './app-filter/app-filter';
import AppInfo from './app-info/app-info';
import EmployeesAddForm from './employees-add-form/employees-add-form';
import EmployeesList from './employees-list/employees-list';
import SearchPanel from './search-panel/search-panel';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        // переносим данные в стейт чтобы можно было ими манипулировать 
        this.state = {
            data: [
                {name:'Wi Smith', salary : 1000, rise: false, increase: false, id: 1, },
                {name:'Alex Smith', salary : 1200, rise: false, increase: false, id: 2, },
                {name:'John Smith', salary : 800, rise: false,  increase: false, id: 3, },
            ]
        }
        // создаем мах ид для дальнейшего добавления
        this.maxId = 4;
    }

    deleteItem = (id) => {
        // создаем новый метод для манипуляции с данными по ид
        this.setState(({data}) => ({
            // фильтр по ид, который создает новый массив данных без того ид на который мы кликнем
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            }
        })
    }

    onToggleProp = (id, prop) => {

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    //    this.setState(({data}) => {
    //     const index = data.findIndex(elem => elem.id === id);

    //     const old = data[index];
    //     const newItem = {...old, increase: !old.increase};
    //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //     return {
    //         data: newArr
    //     }
    //    })
        
    }

    render() {
        const countOfEmployees = this.state.data.length;
        const countOfIncreased = this.state.data.filter(item => item.increase).length;
        return (
            
            <div className="app">
                <AppInfo
                countOfEmployees = {countOfEmployees}
                countOfIncreased = {countOfIncreased}/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data = {this.state.data}
                deleteItem = {this.deleteItem}
                onToggleProp = {this.onToggleProp}/>
                <EmployeesAddForm 
                addItem = {this.addItem}/>
                
            </div>
        )
    }
}

export default App;