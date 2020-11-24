pipeline {
    agent { node '172.17.8.243' }
    tools {
        jdk 'jdk1.8.0_151'
    }
    
    stages {
        stage('Build') {
            steps {
                sh "docker run -i -v $PWD:/mytest -w /mytest cypress/included:5.5.0"
            }
        }
        stage('Test') {
            steps {
                println "Test"
            }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
            }
        }
    }
}
