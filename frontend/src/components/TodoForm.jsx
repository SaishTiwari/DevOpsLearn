import { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 transition-all hover:shadow-xl">
      <div className="space-y-5">
        {/* Title Input */}
        <div className="relative">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
            Task Title
          </label>
          <div className="relative">
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-gray-800 placeholder-gray-400"
              autoComplete="off"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
        </div>

        {/* Description Input */}
        <div className="relative">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
            Description <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details..."
              rows="3"
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none transition-all text-gray-800 placeholder-gray-400"
            />
            <svg
              className="absolute left-4 top-4 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!title.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md disabled:active:scale-100 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
