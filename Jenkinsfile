pipeline {
    agent { docker { image 'node:10.15.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}