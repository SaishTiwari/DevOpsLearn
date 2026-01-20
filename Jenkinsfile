pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'docker.io'
        FRONTEND_IMAGE = 'devops-frontend'
        BACKEND_IMAGE = 'devops-backend'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Prepare Environment') {
            steps {
                echo 'Preparing build environment...'
                sh '''
                    echo "Node Version:"
                    node --version || echo "Node not installed"
                    echo "Docker Version:"
                    docker --version
                    echo "Docker Compose Version:"
                    docker-compose --version
                '''
            }
        }
        
        stage('Build Backend Docker Image') {
            steps {
                echo 'Building backend Docker image...'
                dir('backend') {
                    sh """
                        docker build -t ${BACKEND_IMAGE}:${IMAGE_TAG} .
                        docker tag ${BACKEND_IMAGE}:${IMAGE_TAG} ${BACKEND_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Build Frontend Docker Image') {
            steps {
                echo 'Building frontend Docker image...'
                dir('frontend') {
                    sh """
                        docker build -t ${FRONTEND_IMAGE}:${IMAGE_TAG} .
                        docker tag ${FRONTEND_IMAGE}:${IMAGE_TAG} ${FRONTEND_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Docker Compose Up') {
            steps {
                echo 'Starting application with Docker Compose...'
                sh '''
                    docker-compose down || true
                    docker-compose up -d
                '''
            }
        }
        
        stage('Verify Deployment') {
            steps {
                echo 'Verifying containers are running...'
                sh '''
                    docker-compose ps
                    echo "Waiting for services to be healthy..."
                    sleep 10
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
            sh 'docker-compose logs'
        }
        always {
            echo 'Cleaning up...'
            sh 'docker image prune -f || true'
        }
    }
}
