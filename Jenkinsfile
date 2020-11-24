pipeline {
    agent { node '172.17.8.243' }
    tools {
        jdk 'jdk1.8.0_151'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
            }
        }
    }
}
