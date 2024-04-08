"use client"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

function CardDetails() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const completedTodos = todos.filter((todo) => !!todo.completed === true).length
  const totalTodos = todos.length
  return (
    <div className="w-[80%] top-[10rem] rounded-3xl border md:flex justify-between p-12 space-y-8 md:space-y-0 min-w-[320px] max-w-[619px] mx-auto mb-[4rem]">
      <div className="sm:p-6 md:w-[50%]">
        <h1 className="font-bold text-[2rem]">Todo Done</h1>
        <span className="text-[1.5rem]">keep it up</span>
      </div>
      <div className="rounded-full p-12 bg-orange-500 items-center flex justify-center mx-auto">
        <span className="w-full font-bold text-[2rem] text-black">{completedTodos} / {totalTodos}</span>
      </div>
    </div>
  )
}
export default CardDetails