import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {

    const[todos, setTodos] = useState([])

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    }, [])

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos])


    // const[todos, setTodos] = useState([
    //     {name:"cooking", complete: false },
    //     {name:"playning", complete: true }
    // ])

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
