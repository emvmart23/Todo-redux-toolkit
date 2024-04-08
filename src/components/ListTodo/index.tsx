"use client"
import { RootState } from "@/store/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import { useAppDispatch } from "@/store/hooks"
import { addTodo, deleteTodo, completeTodo } from "@/store/slices/todo"
import { CheckCheckIcon, ClipboardList, Filter, Scan, Trash2 } from "lucide-react"
import TodoCounter from "../TodoCounter"

function ListTodo() {

  const dispatch = useAppDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)

  useEffect(() => {
    todos && localStorage.setItem("todos_V1", JSON.stringify(todos))
  }, [todos])

  const handlerDeleteTodo = (task: string) => {
    dispatch(deleteTodo(task))
  }

  const handlerCompleteTodo = (task: string) => {
    dispatch(completeTodo(task))
  }
  
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 w-[35%] mx-auto">
      <TodoCounter/>
      {todos.length !== 0 ? (
        <ul className="w-full space-y-4">
          <AnimatePresence mode="popLayout">
            {todos.map(({ task, completed }, index) => (
              <motion.li
                className="w-full bg-white p-8 rounded-xl text-black flex justify-between items-center gap-4 px-10"
                layout
                initial={{ opacity: 0.4 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring" }}
                key={index}
              >
                <button
                  className=""
                  onClick={() => handlerCompleteTodo(task)} >
                  {completed ? <CheckCheckIcon /> : <Scan />}
                </button>
                <span className={`w-full ${completed ? "line-through" : ""}`}> {task} </span>
                <button className="hover:shadow-lg" onClick={() => handlerDeleteTodo(task)}>
                  <Trash2 size={20} />
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