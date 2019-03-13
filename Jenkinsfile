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
// node('docker') {
//     checkout scm
//     stage('Build') {
//         docker.image('node:10.15.0').inside {
//             sh 'npm --version'
//         }
//     }
// }
stage('npm-build') {
    agent {
        docker {
            image 'node:10.0.0'
        }
    }

    steps {
        echo "Branch is ${env.BRANCH_NAME}..."

        withNPM(npmrcConfig:'my-custom-npmrc') {
            echo "Performing npm build..."
            sh 'npm install'
        }
    }
}