import { useState, useEffect } from 'react';
import { todoAPI } from './api/todoAPI';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await todoAPI.getAllTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend server is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      const newTodo = await todoAPI.createTodo(todoData);
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError('Failed to create todo');
      console.error('Error creating todo:', err);
    }
  };

  const handleToggleTodo = async (todo) => {
    try {
      const updatedTodo = await todoAPI.updateTodo(todo.id, {
        ...todo,
        completed: !todo.completed,
      });
      setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoAPI.deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2"> Your Daily Work Checklist</h1>
          <p className="text-gray-600">Manage your tasks efficiently</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg shadow-sm animate-fade-in">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Add Task Form */}
        <div className="mb-8">
          <TodoForm onSubmit={handleAddTodo} />
        </div>

        {/* Stats Bar */}
        {todos.length > 0 && (
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Total</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800">{todos.length}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 shadow-sm border border-amber-100">
              <p className="text-xs sm:text-sm text-amber-700 font-medium mb-1">Pending</p>
              <p className="text-2xl sm:text-3xl font-bold text-amber-600">{pendingCount}</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 shadow-sm border border-emerald-100">
              <p className="text-xs sm:text-sm text-emerald-700 font-medium mb-1">Done</p>
              <p className="text-2xl sm:text-3xl font-bold text-emerald-600">{completedCount}</p>
            </div>
          </div>
        )}

        {/* Tasks List */}
        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500 mb-4"></div>
              <p className="text-gray-600 font-medium">Loading your tasks...</p>
            </div>
          ) : todos.length === 0 ? (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No tasks yet</h3>
              <p className="text-gray-500">Create your first task to get started!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
