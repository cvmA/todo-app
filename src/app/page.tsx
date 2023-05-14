import { Plus } from "lucide-react"
export default function Home() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#1E1E1E] to-[#141414]">
        <div>
          <h3>Todo App</h3>
          <form>
            <input type="text" placeholder="Add task" />
            <button><Plus/></button>
          </form>
        </div>
    </div>
  )
}
