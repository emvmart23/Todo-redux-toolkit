"use client"
import { TodoSchema, TodoSchemaType } from "@/lib/validation/todo"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useAppDispatch } from "@/store/hooks"
import { Plus } from "lucide-react"
import { addTodo } from "@/store/slices/todo"
import { useState } from "react"
import { motion } from "framer-motion"

export default function AddTodo() {
    const dispatch = useAppDispatch()
    const [text, setText] = useState("")
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TodoSchemaType>({
        resolver: zodResolver(TodoSchema)
    })

    const addTodoHandler = () => {
        dispatch(addTodo(text))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(addTodoHandler)} className="relative flex justify-between gap-[2.8rem] mb-16 h-[3.5rem]">
            <input
                className="w-full h-full p-3 rounded-xl placeholder:text-[1.1rem] md:placeholder:text-[1.3rem] text-[1.2rem] text-zinc-900 font-medium"
                id="task"
                type="text"
                placeholder="Escribe tu siguiente tarea"
                onChangeCapture={(e) => setText(e.currentTarget.value)}
                maxLength={30}
                {...register('task')}
            />
            {errors.task && <span className="text-red-700 absolute top-[4rem]">{errors.task.message}</span>}
            <motion.button
                whileTap={{ scale: 1.5 }}
                type="submit"
                className="
                border 
                border-white 
                rounded-full
                w-[4.4rem]
                h-[4rem]"
            >
                <Plus size={36} className="mx-auto bg-primary" />
            </motion.button>
        </form>
    )
}