import { Trash } from "lucide-react";

const style = {
    li:`flex justify-between bg-zinc-200 p-4 my-2 rounded-xl shadow-xl`,
    liCompleted: `flex justify-between bg-zinc-400 p-4 my-2 rounded-xl shadow-xl`,
    text:`ml-2 cursor-pointer font-semibold`,
    textCompleted: `ml-2 cursor-pointer line-through font-semibold`,
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
    return ( 
        <li className={todo.completed ? style.liCompleted : style.li}>
            <div className="flex">
                <input
                    onChange={() => toggleComplete(todo)}
                    type="checkbox"
                    checked={todo.completed ? true : false }
                    />
                    <p
                        onClick={() => toggleComplete(todo)}
                        className={todo.completed ? style.textCompleted : style.text}>{todo.text}</p>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}>
                    <Trash/>
            </button>
        </li>
     );
}
 
export default Todo;