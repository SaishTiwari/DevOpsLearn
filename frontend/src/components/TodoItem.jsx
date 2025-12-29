const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div
      className={`group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl shadow-sm border transition-all duration-300 ${
        todo.completed
          ? 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200 opacity-75'
          : 'bg-white border-gray-200 hover:shadow-md hover:border-blue-200'
      }`}
    >
      {/* Completion Indicator */}
      {todo.completed && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-xl pointer-events-none"></div>
      )}

      {/* Checkbox */}
      <div className="relative flex-shrink-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
          className="peer sr-only"
          id={`todo-${todo.id}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`flex items-center justify-center w-6 h-6 rounded-lg border-2 cursor-pointer transition-all ${
            todo.completed
              ? 'bg-gradient-to-br from-emerald-500 to-green-500 border-emerald-500'
              : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
          }`}
        >
          {todo.completed && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </label>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3
          className={`font-semibold text-base sm:text-lg transition-all ${
            todo.completed
              ? 'line-through text-gray-400'
              : 'text-gray-800 group-hover:text-gray-900'
          }`}
        >
          {todo.title}
        </h3>
        {todo.description && (
          <p
            className={`text-sm mt-1.5 transition-all ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-600'
            }`}
          >
            {todo.description}
          </p>
        )}
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-2 sm:p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all active:scale-95 group/delete"
        aria-label="Delete task"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
