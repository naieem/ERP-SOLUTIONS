// pipeline {
//     agent { docker { image 'node:6.3' } }
//     stages {
//         stage('build') {
//             steps {
//                  bat 'set'
//             }
//         }
//     }
// }
node {
    stage('Build') {
        bat 'echo "hello world"'
        bat 'npm install && npm run build'
    }
}