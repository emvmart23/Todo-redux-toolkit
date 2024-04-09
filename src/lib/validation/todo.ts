import { z } from "zod";

export const TodoSchema = z.object({
    task: z.string().min(1, { message: "Este campo no puede estar vacío"}).trim()
})

export type TodoSchemaType = z.infer<typeof TodoSchema>