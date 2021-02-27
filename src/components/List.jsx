import React, {useContext} from "react";
import ListItem from './ListItem'
import {DataContext} from './DataProvider'

export default function List() {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if(index === id) {
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if(index === id) {
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

    // console.log(todos)
    return (
        // <ul>
        //     <ListItem />
        //     <ListItem />
        //     <ListItem />
        //     {/* <li>
        //         <label htmlFor="">
        //         <input type="checkbox" id="" />
        //         Cooking To Do
        //         </label>
        //         <button>Изменить</button>
        //     </li> */}
        // </ul>
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                    checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
                ))
            }
        </ul>
    );
}
