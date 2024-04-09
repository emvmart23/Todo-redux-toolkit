"use client"
import { RootState } from "@/store/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import { useAppDispatch } from "@/store/hooks"
import { deleteTodo, completeTodo } from "@/store/slices/todo"
import { CheckCheckIcon, ClipboardList, Scan, Trash2 } from "lucide-react"
import TodoCounter from "../TodoCounter"
import { setLocalStorage } from "@/tools/localStorage"

function ListTodo() {
  const dispatch = useAppDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)

  useEffect(() => {
    todos && setLocalStorage("todos_V1", JSON.stringify(todos))
  }, [todos])

  const handlerDeleteTodo = (task: string) => {
    dispatch(deleteTodo(task))
  }

  const handlerCompleteTodo = (task: string) => {
    dispatch(completeTodo(task))
  }
  
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <TodoCounter/>
      {todos.length !== 0 ? (
        <ul className="w-full space-y-4">
          <AnimatePresence mode="sync">
            {todos.map(({ task, completed }) => (
              <motion.li
                className="w-full bg-white p-8 rounded-xl text-black flex justify-between items-center gap-4 px-10"
                layout
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.3, opacity: 0 }}
                transition={{ type: "spring" }}
                key={task}
              >
                <button
                  className=""
                  onClick={() => handlerCompleteTodo(task)} >
                  {completed ? <CheckCheckIcon size={25} /> : <Scan size={25} />}
                </button>
                <span className={`w-full text-[1.2rem] ${completed && "line-through"}`}> {task} </span>
                <button className="hover:shadow-lg" onClick={() => handlerDeleteTodo(task)}>
                  <Trash2 size={25} />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <ClipboardList strokeWidth={1} size={80} className="mb-4" />
          <strong>Todavía no tienes tareas registradas.</strong>
          <span>Crea tareas y organiza tus elementos por hacer.</span>
        </motion.div>
      )}
    </div>
  )
}

export default ListTodo