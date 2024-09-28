import './app-info.css';

const AppInfo = ({countOfEmployees, countOfIncreased}) => {
    return (
        <div className='app-info'>
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее количество сотрудников: {countOfEmployees}</h2>
            <h2>Премию получат: {countOfIncreased}</h2>
        </div>
    )
}

export default AppInfo;