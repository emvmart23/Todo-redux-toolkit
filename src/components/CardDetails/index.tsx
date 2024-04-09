"use client"
import { RootState } from "@/store/store"
import Image from "next/image"
import { useSelector } from "react-redux"

function CardDetails() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const completedTodos = todos.filter((todo) => !!todo.completed === true).length
  const totalTodos = todos.length
  
  return (
    <div className="w-[80%] rounded-3xl border md:flex justify-between p-12 space-y-8 md:space-y-0 min-w-[320px] max-w-[619px] mx-auto mb-[4rem]">
      <div className="sm:p-6 md:w-[50%]">
        <h1 className="font-bold text-[2rem] mb-2">Todo hecho</h1>
        <figure>
          <Image src="/astro.png" alt="astronauta" width={90} height={90} className="object-cover w-auto h-auto" />
        </figure>
      </div>
      <div className="rounded-full p-10 bg-orange-500 items-center flex justify-center mx-auto w-40 h-40">
        <span className="w-full font-bold text-[2.3rem] text-black">{completedTodos} / {totalTodos}</span>
      </div>
    </div>
  )
}
export default CardDetails