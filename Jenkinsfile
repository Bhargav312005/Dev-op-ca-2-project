pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://Bhargav312005/Dev-op-ca-2-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'python test_form.py'
            }
        }

        stage('Post Actions') {
            steps {
                echo 'Pipeline executed successfully!'
            }
        }
    }
}