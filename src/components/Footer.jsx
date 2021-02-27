import React, {useContext, useState} from 'react'
import {DataContext} from './DataProvider'
export default function Footer() {

    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const newTodosComplete = () => {
        return todos.filter(todo => {
            return todo.complete === false
        })
    }

    const deleteTodo = () => {
        setTodos(newTodosComplete())
        setCheckAll(false)
    }

    return (

        <>
            {
                todos.length === 0 ? <h2>Умничка! Запланированные покупки в холодильнике!!!</h2>
                    : <div className="row">
                            <label htmlFor="all">
                            <input
                                type="checkbox"
                                name="all"
                                id="all"
                                onChange={handleCheckAll}
                                checked={checkAll}
                            />
                            Все покупки
                            </label>
                            <p>
                            В настоящее время запланировано {newTodosComplete().length} покупок
                            </p>
                            <button
                                id="delete"
                                onClick={deleteTodo}
                            >
                                Удалить
                            </button>
                    </div>

            }
        </>
    )
    // return (

    //     <div className="row">
    //         <label htmlFor="all">
    //         <input
    //             type="checkbox"
    //             name="all"
    //             id="all"
    //             onClick={handleCheckAll}
    //             checked={checkAll}
    //         />
    //         Все покупки
    //         </label>
    //         <p>
    //         В настоящее время запланировано {todos.length} покупок
    //         </p>
    //         <button
    //             id="delete"
    //             onClick={deleteTodo}
    //         >
    //             Удалить
    //         </button>
    //     </div>
    // )
}
