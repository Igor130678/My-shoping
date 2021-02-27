import React from 'react';
import ForInput from './components/FormInput'
import List from './components/List'
import Footer from './components/Footer'
import { DataProvider } from './components/DataProvider'

function App() {
  return (
    <DataProvider>
        <div className="App">
        <h1>Список покупок</h1>
        <ForInput />
        {/* <form autoComplete="off">
          <input
            id="todos"
            type="text"
            name="todos"
            required placeholder="Что необходимо купить?"
          />
          <button type="submit">Создать</button>
        </form> */}
        <List />
        {/* <ul>
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" />
              Cooking To Do
            </label>
            <button>Изменить</button>
          </li>
          <li>
            <label htmlFor="" >
              <input type="checkbox" id="" />
              Cooking To Do
            </label>
            <button>Изменить</button>
          </li>
        </ul> */}
        <Footer />
        {/* <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" />
            Все покупки
          </label>
          <p>
            В настоящее время запланировано 0 покупок
          </p>
          <button id="delete">Удалить</button>
        </div> */}

      </div>
    </DataProvider>
  );
}

export default App;
