import AppLayout from "@/common/components/AppLayout"
import { ListTodo, CardDetail, AddTodo } from "@/components/index"

function Home() {
  return (
    <AppLayout>
      <CardDetail />
      <AddTodo />
      <ListTodo />
    </AppLayout>
  )
}

export default Home