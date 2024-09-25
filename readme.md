# Заметки по базовому реакту
## Свойства (props)
1. способ передачи props `function whoAmI? () {`
`return {props.name} }`
`whoAmI(Ivan)`
2. Компонент реакта не может перерендерить новые значения props. 
3. props могут быть любые типы данных.
4. props мб и function and arrow function
5. props можно передавать по иерархии
6. не забываем про метод map, благодаря которому можно из массива данных можно динамически создать элементы.
7. {...item} - вместо {item.name}, {item.surname}
## Component, State, setState
1. У компонента мб внутреннее состояние, которое динамически меняется 
2. Состояние может быть как у классовых так и функциональных компонентов
3. State на прямую менять нельзя только через setState
4. setState - это асинхронная операция, так что для точности нужно вызывать колбек функц. внутри setState
5. в команде setState можно менять только те State, которые  нужны, те которые не задействованы в setState изменяться не будут.
   
   ` class App extends Component {`

    `constructor(props) {`

      `super(props);`

      `this.state = {`

       ` years: 27,`

      `}`

    `}`


    `nextYear = () => {`

     ` this.setState(state => ({`

      `  years: state.years + 1`

     ` }))`

   ` }`
7. Для удобства, можно использовать диструктуризацию внутри функции и вместо return использовать круглые скобки: 
8. `onIncrease = () => {`
9. `setState(({increase}) => ({`
10. `increase: !increase}`
11. `))}`

## Props drill - передача св-в  компонента по иерархии
1. Можно в пропс передавать функцию
2. Эту функцию можно перекидывать на следующий уровень
3. А затем можно ее результат еще перекидывать на уровень ниже
