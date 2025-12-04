pipeline {
  agent any

  environment{
    NODE_ENV = 'development'
  }
  tools {
    nodejs 'Simon'
    }

  stages {
    stage('Git') {
      steps {
        git branch: 'main', url: 'https://github.com/TomHArdy22311/node_backend.git'
      }
    }

    stage('Installation') {
          steps {
            sh 'npm install'
          }
    }
    stage('starting pm2'){
      steps{
        sh 'pm2 start index.js --name Backend'     
      }
    }
  }
}