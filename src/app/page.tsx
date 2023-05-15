'use client';
import { useEffect, useState } from "react"
import Todo from "./Components/Todo"
import { Plus } from "lucide-react"
import {db} from './firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  //Create
  const createTodo = async (e) =>{
    e.preventDefault(e)
    if(todoInput === ''){
      alert ('Enter a valid todo')
      return
    }
    await addDoc(collection(db,'todos'),{
      text: todoInput,
      completed: false,
    })
    setTodoInput('')
  }

  //Read
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //Update
  const toggleComplete = async(todo) =>{
    await updateDoc(doc(db,'todos', todo.id),{
      completed: !todo.completed
    })
  }

  //Delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div
      className="h-screen w-screen p-4 bg-zinc-800">
        <div
          className="bg-zinc-100 max-w-xl w-full m-auto rounded-xl shadow-xl p-4">
          <h3
            className="text-3xl font-bold text-center text-zinc-800 p-2">Todo App</h3>
          <form
            onSubmit={createTodo}
            className="flex justify-between">
            <input
              value={todoInput}
              onChange={(e) =>
              setTodoInput(e.target.value)}
              className="border border-zinc-400 p-2 w-full text-xl rounded-xl"
              type="text"
              placeholder="Add task" />
            <button className="border border-zinc-400 p-4 ml-2  text-zinc-800 rounded-xl">
              <Plus size={40}/>
            </button>
          </form>
          <ul>
            {todos.map((todo, index)=>(
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                />
            ))}
          </ul>
          {todos.length < 1 ? null : <p className="text-center p-2">{`You have ${todos.length} todos`}</p> }
        </div>
    </div>
  )
}
