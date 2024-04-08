"use client"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

export default function TodoCounter() {
const todos = useSelector((state: RootState) => state.todos.todos)
  const completedTodos = todos.filter((todo) => !!todo.completed === true).length
  const totalTodos = todos.length
  return (
    <div className="border-b border-white/65 w-full flex justify-between items-center py-5">
        <strong className="">Tareas Creadas <span className="bg-gray-700 py-1 px-3 rounded-full text-white">{totalTodos}</span></strong>
        <strong className="">Concluidas <span className="bg-gray-700 py-1 px-3 rounded-full text-white">{completedTodos}</span></strong>
    </div>
  )
}