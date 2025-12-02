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

    stage('npm start') {
      steps {
        sh 'npm i pm2 -g'
        sh 'pm2 status'
        echo "It is working till now"
        sh 'pm2 start index.js --name backend'
      }
    }
  }
}