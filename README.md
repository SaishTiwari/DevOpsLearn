# DevOps Learning Project - Todo Application

A full-stack todo list application demonstrating modern DevOps practices including containerization, CI/CD pipelines, automated deployments, and cloud hosting.

**🚀 Live Demo:** [http://56.228.21.202](http://56.228.21.202)

## 📚 Learning Objectives

This project covers essential DevOps concepts and technologies:

- **Docker** - Container creation and multi-stage builds
- **Docker Compose** - Multi-container orchestration
- **Jenkins** - CI/CD pipeline automation
- **Nginx** - Reverse proxy and load balancing
- **AWS EC2** - Cloud hosting and deployment
- **Git** - Version control and source code management

## ✨ Features

- ✅ Create new todos with title and description
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ View all todos
- ✅ Responsive design with Tailwind CSS
- ✅ REST API with 4 endpoints
- ✅ Dockerized architecture
- ✅ Automated CI/CD pipeline
- ✅ Production-ready deployment

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         AWS EC2                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                    Nginx (Port 80)                    │   │
│  │              Reverse Proxy & Load Balancer           │   │
│  └─────────────┬──────────────────────┬─────────────────┘   │
│                │                      │                      │
│  ┌─────────────▼────────┐  ┌─────────▼──────────────┐       │
│  │  Frontend Container  │  │  Backend Container     │       │
│  │   React + Vite       │  │   Node.js + Express    │       │
│  │   Port 3000          │  │   Port 5050            │       │
│  └──────────────────────┘  └─────────┬──────────────┘       │
│                                       │                      │
│                            ┌──────────▼──────────┐           │
│                            │  PostgreSQL DB      │           │
│                            │  Port 5432          │           │
│                            └─────────────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **PostgreSQL** - Relational database
- **pg** - PostgreSQL client
- **dotenv** - Environment variables

### DevOps Tools
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container orchestration
- **Jenkins** - CI/CD automation server
- **Nginx** - Web server and reverse proxy
- **AWS EC2** - Cloud computing platform

## 📁 Project Structure

```
DevOpsLearn/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── database/
│   │   └── schema.sql         # Database schema and seed data
│   ├── routes/
│   │   └── todos.js           # Todo API routes
│   ├── Dockerfile             # Backend container image
│   ├── server.js              # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── todoAPI.js     # API service layer
│   │   ├── components/
│   │   │   ├── TodoForm.jsx   # Todo creation form
│   │   │   └── TodoItem.jsx   # Todo item component
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # App entry point
│   │   └── index.css          # Global styles
│   ├── Dockerfile             # Frontend container image
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── nginx/
│   └── nginx.conf             # Nginx reverse proxy config
├── docker-compose.yaml        # Multi-container orchestration
├── Jenkinsfile                # CI/CD pipeline definition
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

## 🚀 Getting Started

### Prerequisites
- Docker (v20.10 or higher)
- Docker Compose (v2.0 or higher)
- Git

### Local Development with Docker Compose

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DevOpsLearn
   ```

2. **Create environment file for backend**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your database credentials
   ```

3. **Start all services**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: http://localhost
   - Backend API: http://localhost/api
   - Nginx health check: http://localhost/nginx-health

5. **Stop all services**
   ```bash
   docker-compose down
   ```

### Manual Setup (Without Docker)

<details>
<summary>Click to expand manual setup instructions</summary>

#### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

#### 1. Database Setup

```bash
#### 1. Database Setup

```bash
# macOS (using Homebrew)
brew install postgresql@15
brew services start postgresql@15

# Create database
psql postgres -c "CREATE DATABASE todo_db;"

# Run schema
psql -d todo_db -f backend/database/schema.sql
```

#### 2. Backend Setup

```bash
cd backend
npm install

# Create and configure .env file
cp .env.example .env
# Edit .env with your database credentials

npm start
```

Backend runs on `http://localhost:5050`

#### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

</details>

## 🐳 Docker Configuration

### Dockerfile - Backend
- Base image: `node:20-alpine`
- Installs dependencies
- Copies application code
- Exposes port 5050
- Runs Node.js server

### Dockerfile - Frontend
- Base image: `node:20-alpine`
- Installs dependencies
- Copies application code
- Exposes port 3000
- Runs Vite dev server

### Docker Compose Services

| Service | Image | Port | Description |
|---------|-------|------|-------------|
| **db** | `postgres:15` | 5432 | PostgreSQL database |
| **backend** | Custom build | 5050 | Node.js API server |
| **frontend** | Custom build | 3000 | React application |
| **nginx** | `nginx:latest` | 80 | Reverse proxy |

## 🔄 CI/CD Pipeline (Jenkins)

The Jenkinsfile defines an automated CI/CD pipeline with the following stages:

### Pipeline Stages

1. **Checkout Code**
   - Pulls latest code from repository
   - Ensures clean workspace

2. **Prepare Environment**
   - Verifies Node.js installation
   - Checks Docker and Docker Compose versions
   - Validates build environment

3. **Build Backend Docker Image**
   - Builds backend container image
   - Tags with build number and latest
   - Optimized caching for faster builds

4. **Build Frontend Docker Image**
   - Builds frontend container image
   - Tags with build number and latest
   - Multi-stage build for production

5. **Docker Compose Up**
   - Stops existing containers
   - Starts all services in detached mode
   - Orchestrates multi-container deployment

6. **Verify Deployment**
   - Checks container health status
   - Validates all services are running
   - Displays container status

### Environment Variables

```groovy
DOCKER_REGISTRY = 'docker.io'
FRONTEND_IMAGE = 'devops-frontend'
BACKEND_IMAGE = 'devops-backend'
IMAGE_TAG = "${BUILD_NUMBER}"
```

### Post-Build Actions
- **Success**: Logs successful deployment
- **Failure**: Displays container logs for debugging
- **Always**: Prunes unused Docker images

## 🌐 Nginx Configuration

Nginx acts as a reverse proxy, routing requests to appropriate services:

```nginx
# Frontend (/)
location / {
    proxy_pass http://frontend:3000;
    # WebSocket support for Vite HMR
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}

# Backend API (/api/)
location /api/ {
    proxy_pass http://backend:5050;
    proxy_connect_timeout 5s;
    proxy_read_timeout 60s;
}
```

### Features
- Reverse proxy for frontend and backend
- WebSocket support for hot module replacement
- Health check endpoint `/nginx-health`
- Request timeout configuration
- Client max body size: 10M

## ☁️ AWS EC2 Deployment

### Instance Details
- **Public IP**: 56.228.21.202
- **Access**: http://56.228.21.202
- **Platform**: AWS EC2
- **Services**: Docker, Docker Compose, Jenkins, Nginx

### Deployment Steps

1. **Launch EC2 Instance**
   - Choose Ubuntu 22.04 LTS
   - Configure security groups (ports 80, 8080, 22)
   - Generate and download key pair

2. **Install Docker and Docker Compose**
   ```bash
   # Update packages
   sudo apt update && sudo apt upgrade -y
   
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   
   # Install Docker Compose
   sudo apt install docker-compose -y
   
   # Add user to docker group
   sudo usermod -aG docker $USER
   ```

3. **Clone and Deploy**
   ```bash
   git clone <repository-url>
   cd DevOpsLearn
   docker-compose up -d --build
   ```

4. **Configure Jenkins** (Optional)
   - Install Jenkins on EC2
   - Configure GitHub webhook
   - Set up automated deployments

## 🔧 Troubleshooting

### Database Connection Issues
```bash
# Check if database container is running
docker-compose ps

# View database logs
docker-compose logs db

# Manually create todos table
docker-compose exec db psql -U <username> -d todo_db -f /docker-entrypoint-initdb.d/schema.sql
```

### Nginx Configuration Issues
```bash
# Test nginx configuration
docker-compose exec nginx nginx -t

# Reload nginx
docker-compose exec nginx nginx -s reload

# View nginx logs
docker-compose logs nginx
```

### Container Issues
```bash
# Rebuild containers
docker-compose up --build --force-recreate

# Clean up and restart
docker-compose down -v
docker system prune -a
docker-compose up -d
```

### WebSocket Connection Errors
Ensure nginx.conf includes WebSocket upgrade headers:
```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

## 📝 Environment Variables

### Backend (.env)
```env
DB_USER=saishtiwari
DB_HOST=db
DB_NAME=todo_db
DB_PASSWORD=your_password
DB_PORT=5432
PORT=5050
```

### Frontend
Configured via build args in docker-compose.yaml:
```yaml
args:
  VITE_API_URL: /api
```

## 🎓 Learning Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Jenkins Documentation](https://www.jenkins.io/doc/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)

## 📜 License

This project is for educational purposes as part of a DevOps learning journey.

## 👤 Author

**Saish Tiwari**

---

**Project Status**: ✅ Live and Running on AWS EC2

**Last Updated**: January 2026

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
