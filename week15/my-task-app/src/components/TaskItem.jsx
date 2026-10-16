function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <button
        type="button"
        aria-pressed={task.done}
        onClick={onToggle}
        className={`flex-1 text-left ${
          task.done ? 'text-gray-500 line-through' : 'text-gray-900'
        }`}
      >
        {task.text}
      </button>

      <button
        type="button"
        onClick={onDelete}
        className="rounded px-3 py-1 text-red-600 hover:bg-red-50"
        aria-label={`${task.text}を削除`}
      >
        削除
      </button>
    </li>
  )
}

export default TaskItem