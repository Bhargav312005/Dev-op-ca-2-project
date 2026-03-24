pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'git@github.com:DevDhapodkar/Devops-CA2.git'
            }
        }
        stage('Setup Environment') {
            steps {
                sh 'pip3 install selenium webdriver-manager'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'python3 test_form.py'
            }
        }
    }
    post {
        always {
            echo 'Build finished'
        }
    }
}
