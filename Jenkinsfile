// pipeline {
//     agent { docker { image 'node:10.15.0' } }
//     stages {
//         stage('build') {
//             steps {
//                 sh 'npm install'
//                 sh 'npm run build'
//             }
//         }
//     }
// }
node('docker') {
    checkout scm
    stage('Build') {
        docker.image('node:6.3').inside {
            sh 'npm --version'
        }
    }
}