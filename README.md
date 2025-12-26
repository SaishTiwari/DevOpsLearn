# Todo List Application

A full-stack todo list application built with React, Tailwind CSS, Node.js, Express, and PostgreSQL.

## Features

- ✅ Create new todos with title and description
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ View all todos
- ✅ Responsive design with Tailwind CSS
- ✅ REST API with 4 endpoints

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **PostgreSQL** - Database
- **pg** - PostgreSQL client
- **dotenv** - Environment variables

## Project Structure

```
DevOpsLearn/
├── backend/
│   ├── config/
│   │   └── db.js           # Database configuration
│   ├── database/
│   │   └── schema.sql      # Database schema
│   ├── routes/
│   │   └── todos.js        # Todo API routes
│   ├── .env.example        # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   └── server.js           # Express server
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── todoAPI.js  # API service
    │   ├── components/
    │   │   ├── TodoForm.jsx
    │   │   └── TodoItem.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Database Setup

First, install and start PostgreSQL if you haven't already:

```bash
# macOS (using Homebrew)
brew install postgresql@15
brew services start postgresql@15

# Or using the PostgreSQL app
# Download from https://postgresapp.com/
```

Create the database and run the schema:

```bash
# Connect to PostgreSQL
psql postgres

# Run the schema file
\i /Users/saishtiwari/DevOpsLearn/backend/database/schema.sql

# Or run it manually:
# CREATE DATABASE todo_db;
# Then connect: \c todo_db
# Then copy and paste the contents of schema.sql
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your PostgreSQL credentials
# Update DB_PASSWORD with your PostgreSQL password
nano .env
```

Update the `.env` file:
```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todo_db
DB_PASSWORD=your_actual_password
DB_PORT=5432
PORT=5000
```

Start the backend server:
```bash
# Development mode with auto-reload
npm run dev

# Or production mode
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env
```

The `.env` file should contain:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

### 4. Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/todos

## Usage

1. **Add a Todo**: Fill in the title (required) and description (optional) in the form and click "Add Todo"
2. **Complete a Todo**: Click the checkbox next to a todo to mark it as complete
3. **Delete a Todo**: Click the "Delete" button to remove a todo

## Development

### Backend Development
- The server uses nodemon for auto-reload in development mode
- API routes are defined in `backend/routes/todos.js`
- Database connection is configured in `backend/config/db.js`

### Frontend Development
- Vite provides hot module replacement for instant updates
- Tailwind CSS is configured for utility-first styling
- API calls are centralized in `src/api/todoAPI.js`

## Environment Variables

### Backend (.env)
- `DB_USER` - PostgreSQL username
- `DB_HOST` - Database host
- `DB_NAME` - Database name
- `DB_PASSWORD` - Database password (sensitive)
- `DB_PORT` - PostgreSQL port
- `PORT` - Backend server port

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

## Security Notes

- Never commit `.env` files to version control
- The `.env.example` files are provided as templates
- Update passwords and sensitive data in your local `.env` files
- Use environment-specific values for production deployments

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running: `brew services list`
- Check PostgreSQL credentials in `.env`
- Verify database exists: `psql -l`

### Port Already in Use
- Backend: Change `PORT` in backend `.env`
- Frontend: Change port in `vite.config.js`

### CORS Errors
- Ensure backend is running
- Check `VITE_API_URL` in frontend `.env`

## License

MIT
