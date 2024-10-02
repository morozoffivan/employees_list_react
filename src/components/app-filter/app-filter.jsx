import './app-filter.css';

const AppFilter = (props) => {

    const btnsData = [
        {name: 'all' , label: 'Все сотрудники'},
        {name: 'rise' , label: 'На повышение'},
        {name: 'bigSalary' , label: 'З.П более 100000 руб.'},
    ]

    const btns = btnsData.map(({name, label})=> {
        const active = props.filter === name; // замена if(props.filter === name); true or false;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
            className={`btn ${clazz}`}
            type='button'
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {btns}
        </div>
    )
}

export default AppFilter;