import { useEffect, useState } from 'react'
import TaskItem from './components/TaskItem'

const STORAGE_KEY = 'week15-tasks'

const filters = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'done', label: '完了済み' },
]

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY)
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask(event) {
    event.preventDefault()

    const text = input.trim()

    if (text === '') {
      return
    }

    const newTask = {
      id: crypto.randomUUID(),
      text,
      done: false,
    }

    setTasks([...tasks, newTask])
    setInput('')
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.done
    }

    if (filter === 'done') {
      return task.done
    }

    return true
  })

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <section className="mx-auto max-w-xl">
        <header className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Week 15
          </p>
          <h1 className="mt-2 text-3xl font-bold">タスク管理</h1>
          <p className="mt-2 text-slate-600">
            やることを追加して、終わったらクリックして完了にしよう。
          </p>
        </header>

        <form onSubmit={addTask} className="flex gap-2">
          <input
            className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="例：教材を読む"
            aria-label="新しいタスク"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            追加
          </button>
        </form>

        <nav
          className="mt-5 flex gap-2"
          aria-label="タスクの表示フィルター"
        >
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                filter === item.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <p className="mt-5 text-sm text-slate-600">
          全{tasks.length}件・完了{tasks.filter((task) => task.done).length}件
        </p>

        {visibleTasks.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {visibleTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </ul>
        ) : (
          <p className="mt-3 rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500">
            {tasks.length === 0
              ? 'タスクはまだありません。上から追加してみよう。'
              : 'この条件に当てはまるタスクはありません。'}
          </p>
        )}
      </section>
    </main>
  )
}

export default App