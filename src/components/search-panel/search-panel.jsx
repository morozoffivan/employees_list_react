import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <input 
            type="text"
            className='form-control search-input'
            placeholder='Найти сотрудника'
            value={this.state.term} 
            onChange={this.onUpdateSearch}/> // этот метод локальный, создан для подержания логики приложения. Пользователь что-то вводит => введенное записывается в переменную и обновляет стейт, далее вызывается метод, который пришел из пропса и как аргумент туда передается переменная с данными, которые ввел пользователь
        )
    }
}
export default SearchPanel;